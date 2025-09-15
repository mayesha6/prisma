import { PrismaClient } from "@prisma/client"



const prisma = new PrismaClient()

async function main() {
    // const result = await prisma.users.create({
    //     data: {
    //         name: "Tania Tabassum",
    //         email:"tania@gmail.com"
    //     }
    // })    
    // console.log(result)

    const userData = await prisma.users.findMany()
    console.log(userData)
   
}

main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })