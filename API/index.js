const express = require('express');
const cors = require('cors');
const router = require('./src/routes/indexRoutes')
const { connect } = require('./src/db');


const app = express()
app.use(express.json())
app.use(cors())
app.use("/", router)


const PORT = process.env.PORT || 3001



app.listen(PORT, connect.sync({force:true}).then(()=>{console.log(`the server is lisen in port ${PORT}`)}))