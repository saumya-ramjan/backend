
import dotenv from "dotenv"
import connectDB from "./db/index.js";


dotenv.config({
    path: '/env'
});
 

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`server is running on port ${process.env.PORT} `)
        })

        app.on("error", (error) => {
            console.log(" server error", error);
            
        })

    })
    .catch((error) => {
        console.log('conecction faaild !!' ,error)
    })






// import express from 'express'
// const app = express();

// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log("error", error);
//             throw error
//         })

//         app.listen(process.env.PORT , () =>{
//             console.log(`app is listening on port ${process.env.PORT}`)
//         })

//     } catch (error) {
//         console.log("error", error);
//     }
// })()

