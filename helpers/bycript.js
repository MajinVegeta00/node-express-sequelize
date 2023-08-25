import bcrypt from "bcrypt";

export const compare = async (passwordPlain, hashPassword) => {
  const value = await bcrypt.compare(passwordPlain, hashPassword);
  return value;
};
export const encrypt = async (textPlain) => {
  const hash = await bcrypt.hash(textPlain, 10);
  return hash;
};

