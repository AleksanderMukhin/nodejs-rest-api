const {validateBody, validateFavorites, validateEmailBody} = require('./validateBody');
const isValidId = require('./isValidId');
const authintecate = require('./authenticate');
const upload = require('./upload');

module.exports = { validateBody, isValidId, validateEmailBody, validateFavorites, authintecate, upload,};