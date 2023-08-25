import User from '../models/User.js'
import bcrypt from 'bcrypt'
import  jwt  from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

export const login=async (req,res)=>{
    const { username, password } = req.body;
 
  // Verificar si el usuario existe
  const user =await User.findOne({where:{username}})
  if (!user) {
    return res.status(401).json({ message: 'Usuario no encontrado' });
  }

  // Comparar la contraseña
  bcrypt.compare(password, user.password, (err, result) => {
    if (err || !result) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }
    // Generar el token JWT
    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_KEY);
   
    // Configurar y guardar cookie en el navegador
    res.cookie('session',token);   
  
    // Enviar el token como respuesta
    res.json( 'Login exitoso' );
  });
}

