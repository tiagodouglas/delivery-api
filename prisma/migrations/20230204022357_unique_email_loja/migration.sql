/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `lojas` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "lojas_email_key" ON "lojas"("email");
