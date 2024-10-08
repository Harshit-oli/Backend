import dotenv from "dotenv"
import connectDB from "./db/index.js"


dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    append.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running at ${process.env.PORT}`);
    })
}).catch((err)=>{
    console.log("MongoDb connection failed !!",err);
})