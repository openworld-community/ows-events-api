import checkbox from '@inquirer/checkbox';
import confirm from '@inquirer/confirm';
import { db } from '../../server/database/client';
import {
    event,
    tag,
    type InsertTagModel,
    type InsertEventModel,
    type InsertEventsToTagsModel,
    eventsToTags,
} from '../../server/database/schema';
import { faker } from '@faker-js/faker';
import { nanoid } from 'nanoid';

const TAG_COUNT = 30;
const EVENT_COUNT = 1000;
populate();

async function populate() {
    const tables = await checkbox({
        choices: [
            { value: { priority: 0, fn: populateTags }, name: 'Tags' },
            { value: { priority: 1, fn: populateEvents }, name: 'Events' },
        ],
        message:
            'Which tables would you like to populate with data? Existing data in selected tables will be purged',
    });

    const answer = await confirm({
        message: 'This action is gonna purge all data from selected tables. Continue?',
    });
    if (!answer) return;

    tables.sort((a, b) => a.priority - b.priority).map(({ fn }) => fn());
}

function populateTags() {
    db.delete(tag).all();

    const tags: InsertTagModel[] = faker.helpers
        .uniqueArray(
            () => (Math.random() > 0.5 ? faker.word.noun() : faker.word.adjective()),
            TAG_COUNT
        )
        .map((name) => ({ name }));

    db.insert(tag).values(tags).all();
}

function populateEvents() {
    db.delete(event).all();

    const events: InsertEventModel[] = faker.helpers.uniqueArray(nanoid, EVENT_COUNT).map((id) => ({
        id,
        country: faker.location.country(),
        date: faker.date.anytime().getTime(),
        timezoneName: faker.location.timeZone(),
        timezoneOffset: faker.number.int({ min: -72, max: 72 }) * 10,
        title: faker.company.name(),
        address: maybeUndefined(faker.location.streetAddress),
        city: maybeUndefined(faker.location.city),
        description: maybeUndefined(
            () =>
                `${faker.commerce.productDescription()}\n${faker.lorem.paragraph({
                    min: 0,
                    max: 15,
                })}`
        ),
        durationInSeconds: maybeUndefined(() => faker.number.int({ max: 2592000 /** 1 month */ })),
        image: maybeUndefined(faker.image.url),
        price: maybeUndefined(() =>
            Math.random() > 0.5
                ? faker.finance.amount({ symbol: faker.finance.currency().symbol })
                : faker.finance.transactionType()
        ),
        url: maybeUndefined(faker.internet.url),
    }));

    Promise.allSettled(
        chunk(events, 500).map((chunk) => db.insert(event).values(chunk).all())
    ).then(populateEventsToTags);
}

async function populateEventsToTags() {
    await db.delete(eventsToTags).all();

    const tags = await db.select().from(tag).all();
    if (!tags.length) return console.warn('There are no tags in the database to insert');

    const events = await db.select().from(event).all();
    for (const event of events) {
        if (Math.random() < 0.3) continue;
        const eventTags = faker.helpers
            .arrayElements(tags, { min: 1, max: tags.length >> 1 })
            .map<InsertEventsToTagsModel>((tag) => ({ tagName: tag.name, eventId: event.id }));
        db.insert(eventsToTags).values(eventTags).all();
    }
}

function maybeUndefined<T>(fn: () => T) {
    return Math.random() < 0.3 ? undefined : fn();
}

function chunk<T>(arr: T[], size: number) {
    const newArr = [];
    for (let i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size));
    }
    return newArr;
}
