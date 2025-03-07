import { faker } from '@faker-js/faker'
import bcrypt from 'bcrypt'
import { addMinutes } from 'date-fns'

import { prisma } from '@/libs/prisma'

const main = async () => {
  await prisma.question.deleteMany()
  await prisma.exam.deleteMany()
  await prisma.user.deleteMany()

  const teacher = await prisma.user.create({
    data: {
      name: 'Admin',
      username: 'admin',
      password: bcrypt.hashSync('password', 10),
      role: 'ADMIN',
    },
  })

  await prisma.user.create({
    data: {
      name: 'John Doe',
      username: 'johndoe',
      password: bcrypt.hashSync('password', 10),
      role: 'STUDENT',
    },
  })

  await Promise.all(
    Array.from({ length: 20 }).map(async () => {
      const startDate = faker.date.future()

      return prisma.exam.create({
        data: {
          title: faker.lorem.sentence(),
          description: faker.lorem.sentences({ min: 3, max: 5 }),
          duration: 60,
          startTime: startDate,
          endTime: addMinutes(startDate, 120),
          teacherId: teacher.id, // Guru pemilik ujian
          questions: {
            create: Array.from({ length: 2 }).map(() => {
              return {
                content: faker.lorem.sentence(),
                // correctAnswer: '0', // Sementara pakai 'a' (bisa disesuaikan)
                options: {
                  create: Array.from({ length: 2 }).map((_, i) => {
                    return {
                      content: faker.lorem.sentence(),
                    }
                  }),
                },
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
    console.log('Database seeding is done ✅')
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error('Error when seeding the database ❌', e)
    await prisma.$disconnect()
    process.exit(1)
  })
