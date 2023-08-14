const {Contact} = require("../models/contact");

const { HttpError,ctrlWrapper } = require('../helpers');

const getListContacts = async (req, res) => { 
  const { _id: owner } = req.user;
  const result = await Contact.find({owner});
  res.json(result);  
}

const contactById = async (req, res) => {  
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result)  
}

const addContact = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Contact.create({...req.body, owner});
  res.status(201).json(result);
}

const removeContact = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    throw HttpError(404, "Not found")
  }
  res.json({
    message: "contact deleted"
  })
}

const updateContact = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {new: true});
  if (!result) throw HttpError(404, "Not found");
  res.json(result);
}

const updateStatusContact = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {new: true});
  if (!result) throw HttpError(404, "Not found");
  res.json(result);
}

module.exports = {
  getListContacts: ctrlWrapper(getListContacts),
  addContact: ctrlWrapper(addContact),
  contactById:ctrlWrapper(contactById),  
  updateContact: ctrlWrapper(updateContact),
  updateStatusContact: ctrlWrapper(updateStatusContact),
  removeContact:ctrlWrapper(removeContact),
}