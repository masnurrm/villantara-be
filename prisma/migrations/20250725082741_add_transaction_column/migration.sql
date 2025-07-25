/*
  Warnings:

  - Added the required column `duration` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "duration" INTEGER,
ADD COLUMN     "type" TEXT NOT NULL,
ALTER COLUMN "min_price" DROP NOT NULL,
ALTER COLUMN "max_price" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "nik" DROP NOT NULL,
ALTER COLUMN "phone" DROP NOT NULL;
