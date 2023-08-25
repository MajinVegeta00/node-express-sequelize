import sequelize from "../database/configSequelize.js";
import models from "../models/index.js";

(async () => {
  sequelize
    .sync({ force: true })
    .then((ok) => {
      console.log("Run migrations success");
      process.exit();
    })
    .catch((error) => {
      console.log(error);
    });
})();
