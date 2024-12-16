/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Create a new project for an organization.
*
* inlineObject4 InlineObject4 
* no response value expected for this operation
* */
const createProject = ({ inlineObject4 }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        inlineObject4,
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
* Delete a project by ID.
*
* id String The unique ID of the project to delete.
* no response value expected for this operation
* */
const deleteProject = ({ id }) => new Promise(
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
* Get a project's details by ID.
*
* id String The unique ID of the project.
* no response value expected for this operation
* */
const getProjectById = ({ id }) => new Promise(
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
* Update a project's details.
*
* id String The unique ID of the project to update.
* inlineObject5 InlineObject5 
* no response value expected for this operation
* */
const updateProject = ({ id, inlineObject5 }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        inlineObject5,
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
  createProject,
  deleteProject,
  getProjectById,
  updateProject,
};
