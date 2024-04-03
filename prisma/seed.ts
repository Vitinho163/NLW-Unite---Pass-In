import { prisma } from '../src/lib/prisma'

async function seed() {
  await prisma.event.create({
    data: {
      id: '5a5757e5-e14d-441a-a8ef-7997dab5d16f',
      title: 'Unite Sumit',
      slug: 'unite-sumit',
      details: 'Um evento p/ devs apaixonados(as) por código!',
      maximumAttendees: 128,
    }
  })
}

seed().then(() => {
  console.log('Database seeded!')
  prisma.$disconnect
})