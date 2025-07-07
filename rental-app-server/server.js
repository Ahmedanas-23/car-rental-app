const express = require('express');
const app = express();
const port = 3333;
const cors = require('cors');
const joi = require('joi');
const {MongoClient, ObjectId} = require('mongodb');

app.use(express.json());
app.use(cors());

const loginSchema = joi.object({
    fullname: joi.string().min(3).required().messages({
  'string.empty': 'Full name is required',
  'string.min': 'Full name must be at least 3 characters'
}),
    email : joi.string().required().email({tlds :{allow : false}}).messages({
      'string.email': 'Please provide a valid email address',
      'string.empty': 'Email is required',
    }),
    password: joi.string()
    .min(6)
    .required()
    .messages({
      'string.min': 'Password must be at least 6 characters long',
      'string.empty': 'Password is required',
    })
});

const validMail = {email : "test@gmail.com"};


const client = new MongoClient('mongodb://127.0.0.1:27017');
let db;

async function configDB() {
  try{
    await client.connect();
    db = client.db('login-databass');
    console.log('connect to ', db.databaseName);
  }catch(err){
    console.log('error to connet DB', err.message);
  }
  
}
configDB();


app.get('/api/login', async(req, res) => {
    const login = await db.collection('login').find().toArray();
    res.json(login);
});

app.get('/api/login/:id', async(req, res) => {
    const id = req.params.id;
    const login = await db.collection('login').findOne({_id : new ObjectId(id)});
    res.status(200).json(login);
})


app.post('/api/login', async(req, res) => {
  const { value, error } = loginSchema.validate(req.body, { abortEarly: false });

  if (error) {
    const messages = error.details.map(err => err.message);
    return res.status(400).json({ errors: messages });
  }

  const emailExists = await db.collection('login').findOne({ email: req.body.email });
  if (emailExists) {
    return res.status(400).json({ errors: ["Email already exists"] });
  }

  const login = await db.collection('login').insertOne(value);
  const loginObj = { ...value, _id: login.insertedId };
  res.status(200).json(loginObj);
});


app.put("/api/login/:id", async(req, res) => {
    const id = req.params.id;
    const {value, error} = loginSchema.validate(req.body, {abortEarly : false})
    if(error){
        res.status(400).json({error : error.details})
    }
    const login = await db.collection("login").updateOne({_id : new ObjectId(id)}, {$set : value});
    res.json(login);
})

app.delete("/api/login/:id", async(req, res) => {
    const id = req.params.id;
    const login = await db.collection('login').deleteOne({_id : new ObjectId(id)});
    res.status(200).json(login);
})

app.listen(port, () => {
    console.log('app is listening to port', port)
})