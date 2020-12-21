-- CreateTable
CREATE TABLE "Album" (
"id" SERIAL,
    "name" TEXT,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Picture" (
"id" SERIAL,
    "name" TEXT,
    "description" TEXT NOT NULL,
    "image" TEXT,
    "albumId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Picture" ADD FOREIGN KEY("albumId")REFERENCES "Album"("id") ON DELETE SET NULL ON UPDATE CASCADE;
