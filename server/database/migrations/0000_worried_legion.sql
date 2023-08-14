CREATE TABLE `event` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`description` text,
	`date` integer NOT NULL,
	`duration` integer,
	`timezone-name` text NOT NULL,
	`timezone-offset` integer NOT NULL,
	`country` text NOT NULL,
	`city` text,
	`address` text,
	`price` text,
	`image` text,
	`url` text
);
--> statement-breakpoint
CREATE TABLE `events-to-tags` (
	`event-id` text NOT NULL,
	`tag-name` text NOT NULL,
	PRIMARY KEY(`event-id`, `tag-name`),
	FOREIGN KEY (`event-id`) REFERENCES `event`(`id`) ON UPDATE cascade ON DELETE cascade,
	FOREIGN KEY (`tag-name`) REFERENCES `tag`(`name`) ON UPDATE restrict ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `tag` (
	`name` text PRIMARY KEY NOT NULL
);
