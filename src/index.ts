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

    // const userData = await prisma.users.findMany()
    // console.log(userData)

    // const userData = await prisma.users.findUnique({
    //     where: {
    //         id: 1
    //     }
    // })
    // console.log(userData)

    // const userData = await prisma.users.findUniqueOrThrow({
    //     where: {
    //         id: 4
    //     }
    // })
    // console.log(userData)

//     const updateData = await prisma.users.update({
//         where:{
//             id:1
//         },
//         data:{
//             name: "Mayesha Mumtaz Soumy"
//         }
//     })
//    console.log(updateData)

//     const updateProfilePhoto = await prisma.users.updateMany({
//         where:{
//             profilePicture: null
//         },
//         data:{
//             profilePicture: "https://www.facebook.com/photo/?fbid=2103458326831735&set=a.119795195198068"
//         }
//     })
//    console.log(updateProfilePhoto)

//     const updateProfilePhoto = await prisma.users.updateManyAndReturn({
//         where:{
//             profilePicture: null
//         },
//         data:{
//             profilePicture: "https://www.facebook.com/photo/?fbid=2103458326831735&set=a.119795195198068"
//         }
//     })
//    console.log(updateProfilePhoto)

// const deleteUser = await prisma.users.delete({
//     where:{
//         id: 1
//     }
// })
// console.log(deleteUser)

// const deleteUsers = await prisma.users.deleteMany({
//     where:{
//         id:{
//             lt:5
//         }
//     }
// })
// console.log(deleteUsers)

// const insertUsers = await prisma.users.createMany({
//         data: [
//             {
//                 name: "Mayesha Mumtaz",
//                 email: "mayesha@gmail.com"
//             },
//             {
//                 name: "Rathi Alam",
//                 email: "rathi@gmail.com"
//             },
//             {
//                 name: "Dola",
//                 email: "dola@gmail.com"
//             },
//             {
//                 name: "Ahasan Habib Utsho",
//                 email: "utsho@gmail.com"
//             },
//         ]
// })
// console.log(insertUsers)

const insertUsers = await prisma.users.createManyAndReturn({
        data: [
            {
                name: "Mayesha Mumtaz",
                email: "mayesha@gmail.com"
            },
            {
                name: "Rathi Alam",
                email: "rathi@gmail.com"
            },
            {
                name: "Dola",
                email: "dola@gmail.com"
            },
            {
                name: "Ahasan Habib Utsho",
                email: "utsho@gmail.com"
            },
        ]
})
console.log(insertUsers)
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