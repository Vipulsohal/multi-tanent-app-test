/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Create or update user
* This can only be done by the logged in user.
*
* brand brands Brand of review to return
* locale locales Locale of review to return
* user User Created user object
* returns User
* */
const createUpdateUser = ({ brand, locale, user }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        brand,
        locale,
        user,
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
* Delete user
* This can only be done by the logged in user.
*
* brand brands Brand of review to return
* locale locales Locale of review to return
* username String The username of the user
* returns oas_any_type_not_mapped
* */
const deleteUser = ({ brand, locale, username }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        brand,
        locale,
        username,
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
* get all onboarded user
*
* userRequestBody UserRequestBody Search user parametres
* returns List
* */
const getAllUsers = ({ userRequestBody }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        userRequestBody,
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
* Logs user into the system
*
* login Login  (optional)
* returns User
* */
const loginUser = ({ login }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        login,
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
* Logs out current logged in user session
*
* returns oas_any_type_not_mapped
* */
const logoutUser = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
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
* Logs user into the system
*
* updateUserRole UpdateUserRole  (optional)
* returns oas_any_type_not_mapped
* */
const updateUserRole = ({ updateUserRole }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        updateUserRole,
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
  createUpdateUser,
  deleteUser,
  getAllUsers,
  loginUser,
  logoutUser,
  updateUserRole,
};
