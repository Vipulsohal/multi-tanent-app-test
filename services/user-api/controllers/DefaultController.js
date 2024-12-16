/**
 * The DefaultController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/DefaultService');
const createOrganization = async (request, response) => {
  await Controller.handleRequest(request, response, service.createOrganization);
};

const createProject = async (request, response) => {
  await Controller.handleRequest(request, response, service.createProject);
};

const deleteOrganization = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteOrganization);
};

const deleteProject = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteProject);
};

const deleteUser = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteUser);
};

const getOrganizationById = async (request, response) => {
  await Controller.handleRequest(request, response, service.getOrganizationById);
};

const getProjectById = async (request, response) => {
  await Controller.handleRequest(request, response, service.getProjectById);
};

const getUserById = async (request, response) => {
  await Controller.handleRequest(request, response, service.getUserById);
};

const loginUser = async (request, response) => {
  await Controller.handleRequest(request, response, service.loginUser);
};

const registerUser = async (request, response) => {
  await Controller.handleRequest(request, response, service.registerUser);
};

const updateOrganization = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateOrganization);
};

const updateProject = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateProject);
};

const updateUser = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateUser);
};

const updateUserRole = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateUserRole);
};


module.exports = {
  createOrganization,
  createProject,
  deleteOrganization,
  deleteProject,
  deleteUser,
  getOrganizationById,
  getProjectById,
  getUserById,
  loginUser,
  registerUser,
  updateOrganization,
  updateProject,
  updateUser,
  updateUserRole,
};
