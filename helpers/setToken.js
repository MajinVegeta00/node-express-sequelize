import jwt from "jsonwebtoken"

const checkIsAuth=(request,response,next)=>
{
const token=request.headers.authorization.split(' ').pop()
if( bearerHeader !== undefined)
{
const bearerToken=bearerHeader.split(" ")[1];
request.token=bearerToken;
jwt.verify(request.token,process.env.JWT_KEY,(err)=>
{
    if(err)
    {
        return response.sendStatus(403)
    }
    else{
        next();
    }
    
})

}
}

