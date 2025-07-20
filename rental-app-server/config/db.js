const mongoose = require('mongoose');


async function configDB() {
  try{
    await mongoose.connect(process.env.DB_URL);
    console.log('connected to auth-database');
  }catch(err){
    console.log('error to connet DB', err.message);
  }
  
}

module.exports = configDB