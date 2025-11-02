use("cruddb")

db.createCollection("course")

// db.course.insertOne({
//     name: "harry web deb free course",
//     price: 100,
//     assignments: 12,
//     projects: 32
// })

db.course.insertMany([
    {
        name: "javascript mastery bootcamp",
        price: 120,
        assignments: 15,
        projects: 28
    },
    {
        name: "react js complete guide",
        price: 150,
        assignments: 18,
        projects: 35
    },
    {
        name: "node js backend dev course",
        price: 130,
        assignments: 10,
        projects: 25
    },
    {
        name: "python full stack track",
        price: 140,
        assignments: 16,
        projects: 30
    },
    {
        name: "frontend design fundamentals",
        price: 90,
        assignments: 12,
        projects: 20
    },
    {
        name: "advanced web security course",
        price: 160,
        assignments: 20,
        projects: 22
    },
    {
        name: "html css beginner to pro",
        price: 80,
        assignments: 10,
        projects: 15
    },
    {
        name: "typescript for web developers",
        price: 110,
        assignments: 14,
        projects: 26
    },
    {
        name: "vue js practical course",
        price: 125,
        assignments: 13,
        projects: 24
    },
    {
        name: "next js & api integration",
        price: 155,
        assignments: 17,
        projects: 29
    }
])

// let a = db.course.find({ price: 100 })
// let a = db.course.findOne({ price: 100 })
// console.log(a)

//update
// db.course.updateMany({ price: 0 }, { $set: { price: 100 } })


//delete
// db.course.deleteMany({ price: 120 })

