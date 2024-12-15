/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Send a message
*
* inlineObject1 InlineObject1  (optional)
* no response value expected for this operation
* */
const messagesPOST = ({ inlineObject1 }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        inlineObject1,
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
  messagesPOST,
};
