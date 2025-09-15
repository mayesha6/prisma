import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function others() {
    const insertUsers = await prisma.users.createMany({
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