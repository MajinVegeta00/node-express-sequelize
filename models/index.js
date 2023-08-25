import User from "./User.js";
import Post from "./Post.js";
import Comments from "./Comments.js";

//?Relations

//!One to many
User.hasMany(Post);
Post.belongsTo(User);
Post.hasMany(Comments);
Comments.belongsTo(Post);

const models = () => {
  User, Post, Comments;
};

export default models;
