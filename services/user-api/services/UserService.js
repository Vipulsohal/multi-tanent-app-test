/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Get users for a tenant
*
* tenantId String 
* no response value expected for this operation
* */
const usersGET = ({ tenantId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        tenantId,
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
* Register a new user
*
* inlineObject InlineObject  (optional)
* no response value expected for this operation
* */
const usersRegisterPOST = ({ inlineObject }) => new Promise(
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

module.exports = {
  usersGET,
  usersRegisterPOST,
};
