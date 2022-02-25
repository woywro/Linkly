/*
  Warnings:

  - You are about to drop the column `tags` on the `Link` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Link" DROP COLUMN "tags",
ADD COLUMN     "categories" TEXT[],
ADD COLUMN     "keywords" TEXT[];

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "links" TEXT[],

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);
