/*
  Warnings:

  - Made the column `name` on table `Album` required. The migration will fail if there are existing NULL values in that column.
  - Made the column `name` on table `Picture` required. The migration will fail if there are existing NULL values in that column.
  - Made the column `image` on table `Picture` required. The migration will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Album" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Picture" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "image" SET NOT NULL;
