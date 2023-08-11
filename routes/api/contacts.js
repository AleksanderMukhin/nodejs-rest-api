const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/contacts')

const { validateBody, isValidId,validateFavorites } = require('../../middellwares');
const {schemas} = require("../../models/contact")

router.get('/', ctrl.getListContacts)

router.get('/:contactId', isValidId, ctrl.contactById)

router.post('/', validateBody(schemas.addShcema), ctrl.addContact)

router.delete('/:contactId', isValidId, ctrl.removeContact)

router.put('/:contactId', isValidId, validateBody(schemas.addShcema), ctrl.updateContact)

router.patch('/:contactId/favorite', isValidId, validateFavorites(schemas.updateFavoriteSchema), ctrl.updateStatusContact)

module.exports = router
