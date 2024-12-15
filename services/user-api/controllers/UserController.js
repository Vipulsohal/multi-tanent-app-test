/**
 * The UserController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/UserService');
const createUpdateUser = async (request, response) => {
  await Controller.handleRequest(request, response, service.createUpdateUser);
};

const deleteUser = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteUser);
};

const getAllUsers = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllUsers);
};

const loginUser = async (request, response) => {
  await Controller.handleRequest(request, response, service.loginUser);
};

const logoutUser = async (request, response) => {
  await Controller.handleRequest(request, response, service.logoutUser);
};

const updateUserRole = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateUserRole);
};


module.exports = {
  createUpdateUser,
  deleteUser,
  getAllUsers,
  loginUser,
  logoutUser,
  updateUserRole,
};
