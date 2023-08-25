import Post from "../models/Post.js";
import User from "../models/User.js";
import Comment from '../models/Comments.js'
//?Create post
export const createPost = async (req, res) => {
  try {
    const { name, description, userPk } = req.body;
    await Post.create({
      name,
      description,
      userPk,
    });
    res.json("Registro creado exitosamente");
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};
//?Get Post
export const getAllPost = async (req, res) => {
  try {
    const post = await Post.findAll({ include: [{ model: User },{model:Comment}] });
    res.json(post);
  } catch (error) {
    console.log(error);
  }
};

//?Get post by id
export const getPostById = async (req, res) => {
    try {
        const id=req.params.id
      const post = await Post.findByPk((id),{ include: [{ model: User },] });
      res.json(post);
    } catch (error) {
      console.log(error);
    }
  };
