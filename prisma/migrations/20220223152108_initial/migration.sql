-- CreateTable
CREATE TABLE "Link" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "tags" TEXT[],

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);
