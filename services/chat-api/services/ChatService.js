/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Create a new chat room for an organization.
* This endpoint creates a new chat room for a given organization.
*
* inlineObject InlineObject 
* returns inline_response_201
* */
const createChatRoom = ({ inlineObject }) => new Promise(
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
* Retrieve messages for a specific chat room.
* This endpoint retrieves all messages for a specific chat room.
*
* id String The ID of the chat room to retrieve messages from.
* returns inline_response_200
* */
const getChatRoomMessages = ({ id }) => new Promise(
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
* Send a message to a specific chat room.
* This endpoint sends a message to a specific chat room.
*
* roomId String The ID of the chat room where the message will be sent.
* inlineObject1 InlineObject1 
* no response value expected for this operation
* */
const sendMessageToChatRoom = ({ roomId, inlineObject1 }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        roomId,
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
  createChatRoom,
  getChatRoomMessages,
  sendMessageToChatRoom,
};
