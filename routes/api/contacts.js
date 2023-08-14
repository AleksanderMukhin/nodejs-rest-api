const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/contacts')

const { validateBody, isValidId, validateFavorites, authintecate } = require('../../middellwares');
const {schemas} = require("../../models/contact")

router.get('/', authintecate, ctrl.getListContacts);

router.get('/:contactId', authintecate, isValidId, ctrl.contactById)

router.post('/', authintecate, validateBody(schemas.addShcema), ctrl.addContact)

router.delete('/:contactId', authintecate, isValidId, ctrl.removeContact)

router.put('/:contactId', authintecate, isValidId, validateBody(schemas.addShcema), ctrl.updateContact)

router.patch('/:contactId/favorite', authintecate, isValidId, validateFavorites(schemas.updateFavoriteSchema), ctrl.updateStatusContact)

module.exports = router
