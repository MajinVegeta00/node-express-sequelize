const errorHandler = (error) => {
  if (
    error.name == "SequelizeValidationError" ||
    error.name == "SequelizeUniqueConstraintError"
  ) {
    const er = error.errors.map((info) => {
      const data = {
        description: info.message,
        type: info.type,
        field: info.path,
      };
      return data;
    });
    const err = {
      errors: er,
      code: 422,
    };
    return err;
  }
  if (
    error.name == "SequelizeDatabaseError" ||
    error.name == "SequelizeForeignKeyConstraintError"
  ) {
    const err = {
      errors: {
        name: "Database error",
        error: error.parent.code,
        code: error.parent.sqlStatus,
        msg: error.parent.sqlMessage,
      },
      code: 500,
    };
    return err;
  } else {
    const err = {
      errors: error,
      code: 500,
    };
    return err;
  }
};
export default errorHandler;
