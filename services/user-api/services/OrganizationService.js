/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Create a new organization.
*
* inlineObject6 InlineObject6 
* no response value expected for this operation
* */
const createOrganization = ({ inlineObject6 }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        inlineObject6,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete an organization by ID.
*
* id String The unique ID of the organization to delete.
* no response value expected for this operation
* */
const deleteOrganization = ({ id }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get an organization's details by ID.
*
* id String The unique ID of the organization.
* no response value expected for this operation
* */
const getOrganizationById = ({ id }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Update an organization's details.
*
* id String The unique ID of the organization to update.
* inlineObject7 InlineObject7 
* no response value expected for this operation
* */
const updateOrganization = ({ id, inlineObject7 }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        inlineObject7,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createOrganization,
  deleteOrganization,
  getOrganizationById,
  updateOrganization,
};
