const express = require("express")
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose=require("mongoose")
const userRoutes= require("./routes/user.routes")
const carRoutes= require("./routes/carRequest.routes")
const customerRequestRoutes=require("./routes/userCarRental.routes")
const carRentalRoutes= require("./routes/userCarRental.routes")
const adminRequests=require("./routes/adminRequests.routes")
const customers=require("./routes/customers.routes")


dotenv.config({path: './.env'})

app.use(cors());
app.use(express.json())
app.use("/users",userRoutes)
app.use("/cars",carRoutes)
app.use("/requests",customerRequestRoutes)
app.use("/rental",carRentalRoutes)
app.use("/response",adminRequests)
app.use("/customers",customers)


let PORT = process.env.PORT
mongoose.connect(process.env.DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})


.then(()=>console.log("Connected to database successfully"))
.catch(err=>console.log(err))

app.listen( PORT ,()=>{
    console.log(`server is listening on port ${PORT}`);
})