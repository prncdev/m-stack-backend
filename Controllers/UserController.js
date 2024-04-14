/**
 * @returns JSON response object.
 * @description Get all the users from the database.
 * @method GET
 * @Route /api/users
 * @access Public.
 */
const getUsers = function(req, res) {
  res.json({ message: 'Retrived users' });
}

/**
 * @returns Newly added user as JSON response.
 * @description Sets a user in the database.
 * @method POST
 * @Route /api/users
 * @access Public.
 */
const setUser = function(req, res) {
  res.json({ message: 'User added' });
}

/**
 * @returns Updated user as JSON response.
 * @description Updates a user with a user id in the database.
 * @method PUT
 * @Route /api/users/:id
 * @access Public.
 */
const updateUser = function(req, res) {
  res.json({ message: `User updated with id: ${req.params.id}` });
}

/**
 * @returns Deleted user as JSON response.
 * @description Removes a user from the database.
 * @method DELETE
 * @Route /api/users/:id
 * @access Public.
 */
const deleteUser = function(req, res) {
  res.json({ message: `user deleted with id: ${req.params.id}` });
}

module.exports = {
  getUsers,
  setUser,
  updateUser,
  deleteUser
}