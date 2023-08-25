import mongoose from 'mongoose'
const DB_URI=`mongodb://localhost:27017/`;


    const conect=()=>
    {
        mongoose.connect(            //?promess
            DB_URI,
            {    
            keepAlive:true,
            useNewUrlParser:true,    //?compatibilidad para cualquier proveedor de mongodb
            useUnifiedTopology:true //?   
            },
            (err)=>                  
            {
                if(err)
                {
                    console.log("DB: Error!!!!")
                    console.log(err)
                }
                else
                {
                    console.log('Correct conection with DB!!!!!')
                }
                
            }
        )
        
    }
    export default conect;
