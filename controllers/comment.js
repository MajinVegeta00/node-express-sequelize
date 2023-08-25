import Comments from "../models/Comments.js";
import Post from "../models/Post.js";
//?Create post
export const createComment = async (req, res) => {
    try {
      const { postId, comment } = req.body;
      await Comments.create({
        postId,
        comment,
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
      const post = await Comments.findAll({ include: [{ model: User }] });
      res.json(post);
    } catch (error) {
      console.log(error)
    }
}
//?Get post by id
export const getCommentByPost = async (req, res) => {
    try {
        const id=req.params.postId
      const post = await Comments.findAll({
        where:{
          postId:id
        }
      },{ include: [{ model: Post }] });
      res.json(post);
    } catch (error) {
      console.log(error);
    }
  };