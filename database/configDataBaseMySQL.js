import dotenv from 'dotenv'
dotenv.config();

const configDB=
{
    database:
    {
        username:process.env.DB_USERNAME,
        pasword:process.env.DB_PASSWORD,
        database:process.env.DB_NAME,
        host:process.env.DB_HOST
    }
}


export default configDB;
