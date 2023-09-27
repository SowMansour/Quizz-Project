-- Add un TEXT role in the database
ALTER TABLE "user" ADD COLUMN "role" TEXT DEFAULT 'user';