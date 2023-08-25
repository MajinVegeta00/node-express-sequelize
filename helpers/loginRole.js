import Doctor from "../models/Doctor.js"
import { getUserData } from "./getUserData.js";
import Aspirant from "../models/Aspirant.js";


export const createRegisterByRole=async(req,role,pk,country)=>{
   try {
    console.log('Entre a la funcion');
    console.log(role);
    if(role=="Doctor" || role=="Jefe de Linea" || role=="Comite Doctoral"){
        const options=await getUserData(req)
        await Doctor.create({
            userPk:pk,
            id:req.body.id,
            name:`${req.body.name} ${req.body.firstname} ${req.body.lastName}`,
            lineId:req.body.line,
            categoryId:req.body.category,
            specialityId:req.body.speciality,
        },
        options)
    }
    if(role=="Aspirante"){
        console.log("Soy un aspirante");
        const options={
            username:req.body.username,
            ip:req.ip,
            id:req.body.id
        }
        await Aspirant.create({
            userPk:pk,
            aspirantName: req.body.name,
            id: req.body.id,
            aspirantEmail: req.body.email,
            countryId: country,
          },options)
    }
   } catch (error) {
    console.log(error);
   }
}