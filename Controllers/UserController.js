const Users = require('../models/users');

/**
 * @returns JSON response object.
 * @description An asynchronous function to get all the users from the database.
 * @method GET
 * @Route /api/users
 * @access Public.
 */
const getUsers = async function(req, res) {
  const users = await Users.find();

  // res.json({ message: 'Retrived users' });
  res.status(200).json(users);
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
  // res.json({ message: 'User added' });
  const user = await Users.create({
    firstName: req.body.name,
    lastName: req.body.lastName,
    email: req.body.email,
    gender: req.body.gender,
    age: req.body.age,
  });
  
  res.status(201).json(user);
}

/**
 * @returns Updated user as JSON response.
 * @description An asynchronous function to update users with a user id in the database.
 * @method PUT
 * @Route /api/users/:id
 * @access Public.
 */
const updateUser = async function(req, res) {
  const user = await Users.findById(req.params.id);

  if(!user) {
    res.status(404);
    throw new Error(`No user found with the ID: ${req.params.id}`);
  }

  // The third argument of `findByIdAndUpdate` method is telling mongoose if the field weren't there then add and update the document.
  const updatedUser = await Users.findByIdAndUpdate(req.params.id, req.body, {new: true});

  // res.json({ message: `User updated with id: ${req.params.id}` });
  res.status(201).json(updatedUser);
}

/**
 * @returns Deleted user as JSON response.
 * @description An asynchronous function to remove users with a user id from the database.
 * @method DELETE
 * @Route /api/users/:id
 * @access Public.
 */
const deleteUser = async function(req, res) {
  const user = await Users.findById(req.params.id);
  if(!user) {
    res.status(404);
    throw new Error('Provide a valid id to delete the user');
  }
  const deletedUser = await Users.findByIdAndDelete(req.params.id);
  // This will return deleted user.
  // console.log(deletedUser);
  // res.json({ message: `user deleted with id: ${req.params.id}` });
  res.status(200).json({ id: req.params.id });
}

module.exports = {
  getUsers,
  setUser,
  updateUser,
  deleteUser
}