import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: { name: "Saniyah", email: "Saniyah@example.com", password: "password" }
  });

  await prisma.league.create({
    data: { name: "Friends League", creatorId: 1 }
  });

  console.log("Seed finished.");
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());
