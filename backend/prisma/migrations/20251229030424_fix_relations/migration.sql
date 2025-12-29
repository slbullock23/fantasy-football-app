-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "League" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "creatorId" INTEGER NOT NULL,

    CONSTRAINT "League_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LeagueMember" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "leagueId" INTEGER NOT NULL,

    CONSTRAINT "LeagueMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Draft" (
    "id" SERIAL NOT NULL,
    "leagueId" INTEGER NOT NULL,

    CONSTRAINT "Draft_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DraftPick" (
    "id" SERIAL NOT NULL,
    "draftId" INTEGER NOT NULL,
    "playerId" INTEGER NOT NULL,
    "teamId" INTEGER NOT NULL,

    CONSTRAINT "DraftPick_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Team" (
    "id" SERIAL NOT NULL,
    "leagueId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeamPlayer" (
    "id" SERIAL NOT NULL,
    "teamId" INTEGER NOT NULL,
    "playerId" INTEGER NOT NULL,

    CONSTRAINT "TeamPlayer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "LeagueMember" ADD CONSTRAINT "LeagueMember_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LeagueMember" ADD CONSTRAINT "LeagueMember_leagueId_fkey" FOREIGN KEY ("leagueId") REFERENCES "League"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Draft" ADD CONSTRAINT "Draft_leagueId_fkey" FOREIGN KEY ("leagueId") REFERENCES "League"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DraftPick" ADD CONSTRAINT "DraftPick_draftId_fkey" FOREIGN KEY ("draftId") REFERENCES "Draft"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_leagueId_fkey" FOREIGN KEY ("leagueId") REFERENCES "League"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamPlayer" ADD CONSTRAINT "TeamPlayer_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
