import {Sequelize} from 'sequelize';
import configDB from './configDataBaseMySQL.js';

const sequelize =new Sequelize(
    configDB.database.database,
    configDB.database.username,
    configDB.database.pasword,
    {
       host:configDB.database.host, 
       dialect:'mysql',   
       timezone: '-04:00' 
    }
);


export default sequelize;


