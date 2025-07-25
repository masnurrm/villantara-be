/*
  Warnings:

  - You are about to drop the column `total_capacity` on the `Recommendation` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Recommendation" DROP COLUMN "total_capacity",
ADD COLUMN     "carbon_captured" DOUBLE PRECISION,
ADD COLUMN     "carbon_value" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "access_token" TEXT;
