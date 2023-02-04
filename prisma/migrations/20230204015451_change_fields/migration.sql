/*
  Warnings:

  - Added the required column `Celular` to the `lojas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `lojas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hash` to the `lojas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `celular` to the `usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "lojas" ADD COLUMN     "Celular" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "hash" TEXT NOT NULL,
ALTER COLUMN "icone" DROP NOT NULL;

-- AlterTable
ALTER TABLE "usuarios" ADD COLUMN     "celular" TEXT NOT NULL;
