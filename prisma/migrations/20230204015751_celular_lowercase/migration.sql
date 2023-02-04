/*
  Warnings:

  - You are about to drop the column `Celular` on the `lojas` table. All the data in the column will be lost.
  - Added the required column `celular` to the `lojas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "lojas" DROP COLUMN "Celular",
ADD COLUMN     "celular" TEXT NOT NULL;
