const {validateBody, validateFavorites} = require('./validateBody');
const isValidId = require('./isValidId');
const authintecate = require('./authenticate');
const upload = require('./upload');

module.exports = { validateBody, isValidId, validateFavorites, authintecate, upload,};