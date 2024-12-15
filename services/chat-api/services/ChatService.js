/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Create a conversation
*
* inlineObject InlineObject  (optional)
* no response value expected for this operation
* */
const conversationsPOST = ({ inlineObject }) => new Promise(
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
* Get messages for a conversation
*
* conversationId String 
* tenantId String 
* no response value expected for this operation
* */
const messagesGET = ({ conversationId, tenantId }) => new Promise(
  async (resolve, reject) => {
    try {
      console.log("get messages")
      resolve(Service.successResponse({
        conversationId,
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

module.exports = {
  conversationsPOST,
  messagesGET,
};
