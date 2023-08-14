import { getTableColumns, type InferModel } from 'drizzle-orm';
import { integer, primaryKey, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const event = sqliteTable('event', {
    id: text('id').primaryKey(),
    title: text('title').notNull(),
    description: text('description'),
    /** Timestamp in ms */
    date: integer('date').notNull(),
    durationInSeconds: integer('duration'),
    timezoneName: text('timezone-name').notNull(),
    timezoneOffset: integer('timezone-offset').notNull(),
    country: text('country').notNull(),
    city: text('city'),
    address: text('address'),
    price: text('price'),
    image: text('image'),
    url: text('url'),
});
export const eventColumns = getTableColumns(event);
export type EventModel = InferModel<typeof event>;
export type InsertEventModel = InferModel<typeof event, 'insert'>;

export const tag = sqliteTable('tag', {
    name: text('name').primaryKey(),
});
export type TagModel = InferModel<typeof tag>;
export type InsertTagModel = InferModel<typeof tag, 'insert'>;

export const eventsToTags = sqliteTable(
    'events-to-tags',
    {
        eventId: text('event-id')
            .notNull()
            .references(() => event.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
        tagName: text('tag-name')
            .notNull()
            .references(() => tag.name, { onDelete: 'cascade', onUpdate: 'restrict' }),
    },
    (table) => {
        return { pk: primaryKey(table.eventId, table.tagName) };
    }
);
export type EventsToTagsModel = InferModel<typeof eventsToTags>;
export type InsertEventsToTagsModel = InferModel<typeof eventsToTags, 'insert'>;
