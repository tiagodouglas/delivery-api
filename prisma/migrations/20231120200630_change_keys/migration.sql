/*
  Warnings:

  - The primary key for the `Role` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `categorias` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `formasPagamento` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `horariosFuncionamento` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `lojaStatus` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `lojas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `produtoAdicionais` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `produtoOpcaoItens` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `produtoOpcoes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `produtos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `usuarioLojas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `usuarios` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "categorias" DROP CONSTRAINT "categorias_lojaId_fkey";

-- DropForeignKey
ALTER TABLE "formasPagamento" DROP CONSTRAINT "formasPagamento_lojaId_fkey";

-- DropForeignKey
ALTER TABLE "horariosFuncionamento" DROP CONSTRAINT "horariosFuncionamento_lojaId_fkey";

-- DropForeignKey
ALTER TABLE "lojas" DROP CONSTRAINT "lojas_statusId_fkey";

-- DropForeignKey
ALTER TABLE "produtoAdicionais" DROP CONSTRAINT "produtoAdicionais_produtoId_fkey";

-- DropForeignKey
ALTER TABLE "produtoOpcaoItens" DROP CONSTRAINT "produtoOpcaoItens_produtoOpcaoId_fkey";

-- DropForeignKey
ALTER TABLE "produtoOpcoes" DROP CONSTRAINT "produtoOpcoes_produtoId_fkey";

-- DropForeignKey
ALTER TABLE "produtos" DROP CONSTRAINT "produtos_categoriaId_fkey";

-- DropForeignKey
ALTER TABLE "produtos" DROP CONSTRAINT "produtos_lojaId_fkey";

-- DropForeignKey
ALTER TABLE "usuarioLojas" DROP CONSTRAINT "usuarioLojas_lojaId_fkey";

-- DropForeignKey
ALTER TABLE "usuarioLojas" DROP CONSTRAINT "usuarioLojas_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "usuarios" DROP CONSTRAINT "usuarios_roleId_fkey";

-- AlterTable
ALTER TABLE "Role" DROP CONSTRAINT "Role_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Role_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Role_id_seq";

-- AlterTable
ALTER TABLE "categorias" DROP CONSTRAINT "categorias_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "lojaId" SET DATA TYPE TEXT,
ADD CONSTRAINT "categorias_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "categorias_id_seq";

-- AlterTable
ALTER TABLE "formasPagamento" DROP CONSTRAINT "formasPagamento_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "lojaId" SET DATA TYPE TEXT,
ADD CONSTRAINT "formasPagamento_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "formasPagamento_id_seq";

-- AlterTable
ALTER TABLE "horariosFuncionamento" DROP CONSTRAINT "horariosFuncionamento_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "lojaId" SET DATA TYPE TEXT,
ADD CONSTRAINT "horariosFuncionamento_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "horariosFuncionamento_id_seq";

-- AlterTable
ALTER TABLE "lojaStatus" DROP CONSTRAINT "lojaStatus_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "lojaStatus_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "lojaStatus_id_seq";

-- AlterTable
ALTER TABLE "lojas" DROP CONSTRAINT "lojas_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "statusId" SET DATA TYPE TEXT,
ADD CONSTRAINT "lojas_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "lojas_id_seq";

-- AlterTable
ALTER TABLE "produtoAdicionais" DROP CONSTRAINT "produtoAdicionais_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "produtoId" SET DATA TYPE TEXT,
ADD CONSTRAINT "produtoAdicionais_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "produtoAdicionais_id_seq";

-- AlterTable
ALTER TABLE "produtoOpcaoItens" DROP CONSTRAINT "produtoOpcaoItens_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "produtoOpcaoId" SET DATA TYPE TEXT,
ADD CONSTRAINT "produtoOpcaoItens_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "produtoOpcaoItens_id_seq";

-- AlterTable
ALTER TABLE "produtoOpcoes" DROP CONSTRAINT "produtoOpcoes_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "produtoId" SET DATA TYPE TEXT,
ADD CONSTRAINT "produtoOpcoes_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "produtoOpcoes_id_seq";

-- AlterTable
ALTER TABLE "produtos" DROP CONSTRAINT "produtos_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "categoriaId" SET DATA TYPE TEXT,
ALTER COLUMN "lojaId" SET DATA TYPE TEXT,
ADD CONSTRAINT "produtos_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "produtos_id_seq";

-- AlterTable
ALTER TABLE "usuarioLojas" DROP CONSTRAINT "usuarioLojas_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "usuarioId" SET DATA TYPE TEXT,
ALTER COLUMN "lojaId" SET DATA TYPE TEXT,
ADD CONSTRAINT "usuarioLojas_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "usuarioLojas_id_seq";

-- AlterTable
ALTER TABLE "usuarios" DROP CONSTRAINT "usuarios_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "roleId" SET DATA TYPE TEXT,
ADD CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "usuarios_id_seq";

-- AddForeignKey
ALTER TABLE "usuarios" ADD CONSTRAINT "usuarios_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuarioLojas" ADD CONSTRAINT "usuarioLojas_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuarioLojas" ADD CONSTRAINT "usuarioLojas_lojaId_fkey" FOREIGN KEY ("lojaId") REFERENCES "lojas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lojas" ADD CONSTRAINT "lojas_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "lojaStatus"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categorias" ADD CONSTRAINT "categorias_lojaId_fkey" FOREIGN KEY ("lojaId") REFERENCES "lojas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "produtos" ADD CONSTRAINT "produtos_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "produtos" ADD CONSTRAINT "produtos_lojaId_fkey" FOREIGN KEY ("lojaId") REFERENCES "lojas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "produtoOpcoes" ADD CONSTRAINT "produtoOpcoes_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "produtos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "produtoOpcaoItens" ADD CONSTRAINT "produtoOpcaoItens_produtoOpcaoId_fkey" FOREIGN KEY ("produtoOpcaoId") REFERENCES "produtoOpcoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "produtoAdicionais" ADD CONSTRAINT "produtoAdicionais_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "produtos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "formasPagamento" ADD CONSTRAINT "formasPagamento_lojaId_fkey" FOREIGN KEY ("lojaId") REFERENCES "lojas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "horariosFuncionamento" ADD CONSTRAINT "horariosFuncionamento_lojaId_fkey" FOREIGN KEY ("lojaId") REFERENCES "lojas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
