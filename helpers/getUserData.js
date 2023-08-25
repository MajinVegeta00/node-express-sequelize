import { verifyToken } from "./handlerToken.js";


export const getUserData=async(req)=>{
  try {
    const token = req.headers.authorization.split(" ").pop();
    const tokenData = await verifyToken(token);
     const options={
         username:tokenData.user.userName,
         ip:req.ip,
         id:tokenData.user.id
     }
   return options 
  } catch (error) {
    console.log(error)
  }
}
