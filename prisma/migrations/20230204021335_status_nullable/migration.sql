-- DropForeignKey
ALTER TABLE "lojas" DROP CONSTRAINT "lojas_statusId_fkey";

-- AlterTable
ALTER TABLE "lojas" ALTER COLUMN "statusId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "lojas" ADD CONSTRAINT "lojas_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "lojaStatus"("id") ON DELETE SET NULL ON UPDATE CASCADE;
