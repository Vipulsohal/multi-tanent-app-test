/*
 *
 * ALL THE RESPONSE MESSAGES SHOULD BE IN THIS FILE.
 *
 */
exports.statusMessages = {
  inValidEmail: "Please enter a valid email.",
  userNotRegistred: "Couldn't find your account",
  brandAccessRequired: "You don't have access to any Brand Local",
  blankEmail: "Email Address cannot be left blank",
  blankPassword: "Password cannot be left blank.",
  dataNotFound: "Data Not Found.",
  invalidInput: "Invalid Input.",
  emailAlreadyExist: "Email Already Exists.",
  incorrectPassword: "Incorrect Password",
  inactiveUser: "User is not activated",
  unsuccessfulConnection: "Unable to connect to service, Please try again later.",
  loggedOut: "user logged out ",
  somethingWentWrong: "Something Went Wrong.",
  rolesNotFound: "Role not found.",
  roleAlreadyExist: "Role already exists"
};

/*
 *
 * ALL THE RESPONSE STATUS CODES SHOULD COME HERE.
 *
 */
exports.statusCodes = {
  success: 200,
  failure: 400,
  notFound: 404,
  forbidden: 403,
};
