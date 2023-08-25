import sequelize from "../database/configSequelize.js";

export const savePutLogs=async (data,options,modelName)=>{
    const logs=sequelize.models['logs']
    const oldValue=data._previousDataValues
    const newValue=data.dataValues
    const oldProp = {};
    const newProp={};
    for (let prop in oldValue) {
      if (oldValue.hasOwnProperty(prop) && newValue.hasOwnProperty(prop)) {
        if (oldValue[prop] !== newValue[prop]) {
          oldProp[prop] = oldValue[prop]
          newProp[prop] =  newValue[prop]
        }
      }
    }
    console.log(oldProp,newProp)
    await logs.create({
     username:options.options.username,
     ipAdress:options.options.ip,
     action:'PUT',
     modelName:modelName,
     oldValue:`${modelName} con id:${newValue.id} y propiedades:${JSON.stringify(oldProp)}`,
     newValue:`${modelName} con id:${newValue.id} y propiedades:${JSON.stringify(newProp)}`,
     deletedValue:"ninguno"
    })
}
export const saveDeletedLogs=async(data,options,modelName)=>{
    const where=options.where
    let key
    let value
    for(let w in where){
        key=w
        value=where[key]
    }
    console.log(key,value)
    const logs=sequelize.models['logs']
    await logs.create({
     username:options.options.username,
     ipAdress:options.options.ip,
     action:'DELETE',
     modelName:modelName,
     oldValue:"ninguno",
     newValue:"ninguno",
     deletedValue:`${modelName} con id:${value}`
    })
}
export const saveCreatedLogs=async (data,options,modelName)=>{
    const logs=sequelize.models['logs']
    await logs.create({
     username:options.username,
     ipAdress:options.ip,
     action:'POST',
     modelName:modelName,
     oldValue:"ninguno",
     newValue:`${modelName} con id:${data.id}`
    })
}
export const saveLoginLogs=async(req,action)=>{
  try {
    const logs=sequelize.models['logs']
    await logs.create({
    username:req.body.username,
    ipAdress:req.ip,
    action:action,
    modelName:"ninguno",
    oldValue:"ninguno",
    newValue:"ninguno",
    deletedValue:"ninguno"
   })
  } catch (error) {
    
  }
}