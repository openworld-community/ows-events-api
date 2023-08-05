import { integer, sqliteTable, text, primaryKey } from 'drizzle-orm/sqlite-core';
import { type InferModel } from 'drizzle-orm';

export const event = sqliteTable('event', {
    id: text('id').primaryKey(),
    title: text('title').notNull(),
    description: text('description'),
    date: integer('date', { mode: 'timestamp_ms' }).notNull(),
    durationInSeconds: integer('duration'),
    timezoneName: text('timezone-name').notNull(),
    timezoneOffset: integer('timezone-offset').notNull(),
    country: text('country').notNull(),
    city: text('city'),
    address: text('address'),
    price: text('price'),
    image: text('image'),
    url: text('url')
});
export type EventModel = InferModel<typeof event>;
export type InsertEventModel = InferModel<typeof event, 'insert'>;

export const tag = sqliteTable('tag', {
    name: text('name').primaryKey()
});
export type TagModel = InferModel<typeof tag>;
export type InsertTagModel = InferModel<typeof tag, 'insert'>;

export const eventsToTags = sqliteTable(
    'events-to-tags',
    {
        event: text('event')
            .notNull()
            .references(() => event.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
        tag: text('tag')
            .notNull()
            .references(() => tag.name, { onDelete: 'cascade', onUpdate: 'restrict' })
    },
    (table) => {
        return { pk: primaryKey(table.event, table.tag) };
    }
);
export type EventsToTagsModel = InferModel<typeof eventsToTags>;
export type InsertEventsToTagsModel = InferModel<typeof eventsToTags, 'insert'>;
