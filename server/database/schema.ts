import { integer, sqliteTable, text, primaryKey } from 'drizzle-orm/sqlite-core';
import { relations, type InferModel } from 'drizzle-orm';

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
    url: text('url')
});
export const eventRelations = relations(event, ({ many }) => ({ tags: many(eventsToTags) }));
export type EventModel = InferModel<typeof event>;
export type InsertEventModel = InferModel<typeof event, 'insert'>;

export const tag = sqliteTable('tag', {
    name: text('name').primaryKey()
});
export const tagRelations = relations(tag, ({ many }) => ({ events: many(eventsToTags) }));
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
export const eventsToTagsRelations = relations(eventsToTags, ({ one }) => ({
    event: one(event, { fields: [eventsToTags.event], references: [event.id] }),
    tag: one(tag, { fields: [eventsToTags.tag], references: [tag.name] })
}));
export type EventsToTagsModel = InferModel<typeof eventsToTags>;
export type InsertEventsToTagsModel = InferModel<typeof eventsToTags, 'insert'>;
