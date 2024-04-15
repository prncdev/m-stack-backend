/**
 * @returns JSON response object.
 * @description An asynchronous function to get all the users from the database.
 * @method GET
 * @Route /api/users
 * @access Public.
 */
const getUsers = async function(req, res) {
  res.json({ message: 'Retrived users' });
}

/**
 * @returns Newly added user as JSON response.
 * @description An asynchronous function to set a user in the database.
 * @method POST
 * @Route /api/users
 * @access Public.
 */
const setUser = async function(req, res) {
  if(!req.body.name) {
    res.status(400);
    throw new Error('Name field shouldn\'t be empty');
  }
  console.log(req.body);
  res.json({ message: 'User added' });
}

/**
 * @returns Updated user as JSON response.
 * @description An asynchronous function to update users with a user id in the database.
 * @method PUT
 * @Route /api/users/:id
 * @access Public.
 */
const updateUser = async function(req, res) {
  res.json({ message: `User updated with id: ${req.params.id}` });
}

/**
 * @returns Deleted user as JSON response.
 * @description An asynchronous function to remove users with a user id from the database.
 * @method DELETE
 * @Route /api/users/:id
 * @access Public.
 */
const deleteUser = async function(req, res) {
  res.json({ message: `user deleted with id: ${req.params.id}` });
}

module.exports = {
  getUsers,
  setUser,
  updateUser,
  deleteUser
}