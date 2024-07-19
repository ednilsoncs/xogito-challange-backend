CREATE TABLE IF NOT EXISTS "take-home-fullstack_users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"avatar_url" varchar(256),
	"company" varchar(256),
	"location" varchar(256),
	"avatar_emailurl" varchar(256),
	"followers" integer,
	"following" integer,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone
);
