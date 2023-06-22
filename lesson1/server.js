require('dotenv').config()
const express =require('express')
const app = express();
const PORT = process.env.PORT||3501;
const path = require('path')
const cors =require('cors')
const cookieParser =require('cookie-parser')
const {logger} =require('./middleware/logger');
const errorHandler=require('./middleware/errorHandler')
const corsOptions =require('./config/corsOptions')
const connectDB = require('./config/dbConn')
const mongoose =require('mongoose')
const {logEvents}=require('./middleware/logger')
const userRoute =require('./routes/userRoutes')
const notesRoute =require('./routes/notesRoutes')
const authRoute = require('./routes/authRoutes')
console.log(process.env.NODE_ENV)
console.log(process.env.DATABASE_URL)
connectDB()


app.use(express.json()) //receives  and process json data
app.use(cookieParser())
app.use(cors(corsOptions))
app.use("/users",userRoute)
app.use('/notes',notesRoute)
app.use('/auth',authRoute)


app.use('/', express.static(path.join(__dirname, 'public')))
app.use(logger)
app.use('/',require('./routes/root'))
 
// app.use('/here',(req,res)=>{
//     res.send("hello")
//  })
app.all('*', (req, res) => {
     res.status(404)
     if (req.accepts('html')) {
         res.sendFile(path.join(__dirname, 'views', '404.html'))
     } else if (req.accepts('json')) {
         res.json({ message: '404 Not Found for json' })
     } else {
         res.type('txt').send('404 Not Found from for text')
     }
 })
 app.use(errorHandler)
 

 mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})

mongoose.connection.on('error', err => {
    console.log(err)
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
})
//app.listen(PORT, () => console.log(`Server running on port ${PORT}`))