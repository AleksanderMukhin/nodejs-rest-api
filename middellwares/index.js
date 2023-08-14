const {validateBody, validateFavorites} = require('./validateBody');
const isValidId = require('./isValidId');
const authintecate =  require('./authenticate')

module.exports = { validateBody, isValidId, validateFavorites, authintecate};