const bcryptjs = require("bcryptjs");
const jwt = require('jsonwebtoken');
const User = require("../user-model/user-model-schema");
const {userRegisterValidationSchema, userLoginValidationSchema} = require("../user-validation/user-validation-schema");

const UserCltr = {};

UserCltr.Signup = async (req, res) => {
  const { value, error } = userRegisterValidationSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    const messages = error.details.map((err) => err.message);
    return res.status(400).json({ errors: messages });
  }
  try {
    const emailExists = await User.findOne({ email: value.email });
    if (emailExists) {
      return res.status(400).json({ errors: ["Email already exists"] });
    }
    const salt = await bcryptjs.genSalt();
    const hash = await bcryptjs.hash(value.password, salt);
    value.password = hash;
    const user = new User(value);
    await user.save();
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: "Something went wrong" });
  }
};


UserCltr.Login = async (req, res) => {
  const body = req.body;
  try{
    const {error, value} = userLoginValidationSchema.validate(body, {abortEarly : false});
    if(error){
      res.status(400).json({error : error.details})
    }

    const user = await User.findOne({email : value.email});
    if(!user){
      res.status(401).json({error : "invalid email / password"})
    }
    const matchPassword = await bcryptjs.compare(value.password, user.password);
    if(!matchPassword){
      res.status(401).json({error : "invalid email / password"})
    }
   const tokenData = {userId : user._id};
   const token = jwt.sign(tokenData, process.env.JWT_SECRET , {expiresIn : '7d'});
   res.json({token : token});
  }
  catch(err){
    console.log(err);
    res.status(400).json({error : "Something went wrong"})
  }
}


module.exports = UserCltr;
