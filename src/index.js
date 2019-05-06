const express = require('express')
const cors = require('cors')
const userRouter = require('./routers/userRouter')
const catrouter = require('./routers/catrouter')
const movcatrouter = require('./routers/movcatrouter')



const app = express()
const port = 2010 // akses dari environment

app.get('/', (req, res) => {
    res.send(`<h1> API RUNNING ON HEROKU PORT ${port} </h1>`)
})

app.use(cors())
app.use(express.json())
app.use(userRouter)
app.use(catrouter)
app.use(movcatrouter)



app.listen(port, ()=>{
    console.log("Running on port:", port);
    
})