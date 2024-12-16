/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Delete a user by ID.
*
* id String The unique ID of the user to delete.
* no response value expected for this operation
* */
const deleteUser = ({ id }) => new Promise(
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
* Get a user's details by ID.
*
* id String The unique ID of the user.
* no response value expected for this operation
* */
const getUserById = ({ id }) => new Promise(
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
* Authenticate a user and generate a JWT token.
*
* inlineObject1 InlineObject1 
* returns inline_response_200
* */
const loginUser = ({ inlineObject }) => new Promise(
  async (resolve, reject) => {
    console.log("loginUser", inlineObject)
    try {
      resolve(Service.successResponse({
        inlineObject,
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
* Register a new user.
*
* inlineObject InlineObject 
* no response value expected for this operation
* */
const registerUser = ({ inlineObject }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        inlineObject,
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
* Update a user's details.
*
* id String The unique ID of the user.
* inlineObject2 InlineObject2 
* no response value expected for this operation
* */
const updateUser = ({ id, inlineObject2 }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        inlineObject2,
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
* Update a user's role.
*
* id String The unique ID of the user.
* inlineObject3 InlineObject3 
* no response value expected for this operation
* */
const updateUserRole = ({ id, inlineObject3 }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        inlineObject3,
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
  deleteUser,
  getUserById,
  loginUser,
  registerUser,
  updateUser,
  updateUserRole,
};
