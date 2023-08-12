const { HttpError } = require("../helpers");

const validateBody = (schema) => {
  const checkValidate = (req, res, next) => {
    if (req.method === 'PATCH' && !req.body) {
      next(HttpError(400, 'missing field favorite'));
      return;
    }

    if (Object.keys(req.body).length === 0) {
      next(HttpError(400, "missing fields"));
      return;
    }

    const { error } = schema.validate(req.body);
    if (error) {
      error.details[0].type === "any.required"
        ? next(
            HttpError(400, `missing required ${error.details[0].path[0]} field`)
          )
        : next(HttpError(400, error.message));
    }
    next();
  };
  return checkValidate;
};

const validateFavorites = (schema) => {
  const func = (req, res, next) => {
    if (Object.kyes(req.body) != "favorite") {
      next(HttpError(400, "missing field favorite"));
      return;
    }

    const { error } = schema.validate(req.body);
    if (error) {
      next(HttpError(400, error.message));
      return;
    }

    next();
  };
  return func;
};

module.exports = {validateBody,validateFavorites};