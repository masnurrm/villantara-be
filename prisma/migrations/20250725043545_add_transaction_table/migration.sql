/*
  Warnings:

  - You are about to drop the column `competency` on the `Recommendation` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Recommendation` table. All the data in the column will be lost.
  - You are about to drop the column `in_contract` on the `Village` table. All the data in the column will be lost.
  - You are about to drop the column `offer` on the `Village` table. All the data in the column will be lost.
  - Added the required column `total_capacity` to the `Recommendation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Recommendation" DROP COLUMN "competency",
DROP COLUMN "description",
ADD COLUMN     "insight" TEXT,
ADD COLUMN     "total_capacity" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Village" DROP COLUMN "in_contract",
DROP COLUMN "offer";

-- CreateTable
CREATE TABLE "Transaction" (
    "id" UUID NOT NULL,
    "village_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "capacity" DOUBLE PRECISION NOT NULL,
    "min_price" INTEGER NOT NULL,
    "max_price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_village_id_fkey" FOREIGN KEY ("village_id") REFERENCES "Village"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
