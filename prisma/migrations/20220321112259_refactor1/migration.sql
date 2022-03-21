-- DropForeignKey
ALTER TABLE "Collection" DROP CONSTRAINT "Collection_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "Share" DROP CONSTRAINT "Share_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "Share" DROP CONSTRAINT "Share_ownerId_fkey";

-- AddForeignKey
ALTER TABLE "Share" ADD CONSTRAINT "Share_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Collection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Share" ADD CONSTRAINT "Share_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collection" ADD CONSTRAINT "Collection_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
