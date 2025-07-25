const express = require('express');
const app = express();
const port = process.env.PORT || 3333
const cors = require('cors');
require('dotenv').config()
const userAuthenticate = require('./app/user-signup/user-middleware/userAuthenticate');


app.use(express.json());
app.use(cors());

// database configuration
const configDB = require('./config/db');
configDB()


// app.get('/api/login', async(req, res) => {
//     const login = await db.collection('login').find().toArray();
//     res.json(login);
// });

// app.get('/api/login/:id', async(req, res) => {
//     const id = req.params.id;
//     const login = await db.collection('login').findOne({_id : new ObjectId(id)});
//     res.status(200).json(login);
// })


/// method to signup user
const UserCltr = require('./app/user-signup/user-controller/user-controller')
app.post('/user/signup', UserCltr.Signup );

/// method to login user
app.post('/user/login', UserCltr.Login)


// app.put("/api/login/:id", async(req, res) => {
//     const id = req.params.id;
//     const {value, error} = loginSchema.validate(req.body, {abortEarly : false})
//     if(error){
//         res.status(400).json({error : error.details})
//     }
//     const login = await db.collection("login").updateOne({_id : new ObjectId(id)}, {$set : value});
//     res.json(login);
// })

// app.delete("/api/login/:id", async(req, res) => {
//     const id = req.params.id;
//     const login = await db.collection('login').deleteOne({_id : new ObjectId(id)});
//     res.status(200).json(login);
// })

app.listen(port, () => {
    console.log('app is listening to port', port)
})