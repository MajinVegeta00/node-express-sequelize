import Post from "../models/Post.js";
import User from "../models/User.js";
import bcrypt from 'bcrypt'

//?Create user
export const createUser = async (req, res) => {
  try {
    const { id, name, firstname, lastname, email, phone,password, username } = req.body;
    await User.create({
      id,
      name,
      firstname,
      lastname,
      email,
      phone,
      password:await bcrypt.hash(password,10),
      username
    });
    res.json("Registro creado exitosamente");
  } catch (error) {
    console.log(error);
    res.json(error)
  }
};
//?read all
export const getAllUser=async(req,res)=>{
    try {
        const user=await User.findAll({include:[{model:Post}]})
        res.json(user)
    } catch (error) {
        console.log(error);
    }
}