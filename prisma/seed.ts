import { faker } from '@faker-js/faker'
import bcrypt from 'bcrypt'
import { addMinutes } from 'date-fns'

import { prisma } from '@/libs/prisma'

const main = async () => {
  // Hapus semua data lama
  // await prisma.option.deleteMany()
  await prisma.question.deleteMany()
  await prisma.exam.deleteMany()
  await prisma.user.deleteMany()

  // Buat satu guru sebagai pemilik ujian
  const teacher = await prisma.user.create({
    data: {
      name: faker.person.firstName(),
      username: faker.internet.username(),
      password: bcrypt.hashSync('password', 10),
      role: 'TEACHER',
    },
  })

  // Buat 40 ujian dengan soal dan opsi jawaban
  await Promise.all(
    Array.from({ length: 2 }).map(async () => {
      const startDate = faker.date.future()

      return prisma.exam.create({
        data: {
          title: faker.lorem.sentence(),
          description: faker.lorem.sentences({ min: 3, max: 5 }),
          duration: 60, // dalam menit
          startTime: startDate,
          endTime: addMinutes(startDate, 120),
          teacherId: teacher.id, // Guru pemilik ujian
          questions: {
            create: Array.from({ length: 2 }).map(() => {
              const option = Array.from({ length: 2 }).map(() => faker.lorem.sentence())
              return {
                content: faker.lorem.sentence(),
                correctAnswer: faker.helpers.arrayElement(option), // Sementara pakai 'a' (bisa disesuaikan)
                options: Array.from({ length: 2 }).map(() => faker.lorem.sentence()),
                // options: {
                //   create: Array.from({ length: 2 }).map((_, i) => {
                //     id = faker.string.uuid()
                //     return {
                //       id,
                //       content: faker.lorem.sentence(),
                //     }
                //   }),
                // },
              }
            }),
          },
        },
      })
    }),
  )
}

main()
  .then(async () => {
    console.log('Database seeding selesai ✅')
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error('Error saat seeding database ❌', e)
    await prisma.$disconnect()
    process.exit(1)
  })
