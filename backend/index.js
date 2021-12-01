import app from "./server.js"

import mongodb from "mongodb"
import dotenv from "dotenv"
import recipesDAO from "./dao/recipesDAO.js"
dotenv.config()
const MongoClient = mongodb.MongoClient
const express = require('express');

const port = process.env.port || 8000
//RESTREVIEWS_DB_URI='mongodb+srv://BMarceau:WinterIsComing1@cluster0.1i945.mongodb.net/recDB?retryWrites=true&w=majority'

// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static('frontend/build'));
// }


MongoClient.connect(
    process.env.RESTREVIEWS_DB_URI,
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        useNewUrlParser: true
    }
)
.catch(err => {
    console.error(err.stack)
    process.exit(1)
})
.then(async client => {
    await recipesDAO.injectDB(client)
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
})