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
	`event` text NOT NULL,
	`tag` text NOT NULL,
	PRIMARY KEY(`event`, `tag`),
	FOREIGN KEY (`event`) REFERENCES `event`(`id`) ON UPDATE cascade ON DELETE cascade,
	FOREIGN KEY (`tag`) REFERENCES `tag`(`name`) ON UPDATE restrict ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `tag` (
	`name` text PRIMARY KEY NOT NULL
);
