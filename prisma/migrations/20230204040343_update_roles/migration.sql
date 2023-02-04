/*
  Warnings:

  - You are about to drop the column `celular` on the `lojas` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `lojas` table. All the data in the column will be lost.
  - You are about to drop the column `hash` on the `lojas` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "lojas_email_key";

-- AlterTable
ALTER TABLE "lojas" DROP COLUMN "celular",
DROP COLUMN "email",
DROP COLUMN "hash";

-- CreateTable
CREATE TABLE "usuarioLojas" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "lojaId" INTEGER NOT NULL,

    CONSTRAINT "usuarioLojas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "usuarioLojas" ADD CONSTRAINT "usuarioLojas_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuarioLojas" ADD CONSTRAINT "usuarioLojas_lojaId_fkey" FOREIGN KEY ("lojaId") REFERENCES "lojas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
