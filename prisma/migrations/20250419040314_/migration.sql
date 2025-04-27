/*
  Warnings:

  - You are about to drop the column `name` on the `Room` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Room" DROP COLUMN "name";

-- CreateTable
CREATE TABLE "Section" (
    "id" TEXT NOT NULL,
    "batch" TEXT NOT NULL,
    "program" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "section" TEXT NOT NULL,
    "courseCode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "roomId" TEXT NOT NULL,

    CONSTRAINT "Section_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Section_roomId_key" ON "Section"("roomId");

-- AddForeignKey
ALTER TABLE "Section" ADD CONSTRAINT "Section_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
