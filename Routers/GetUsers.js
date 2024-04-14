const express = require('express');
const Routes = express.Router();
const {
    getUsers,
    setUser,
    updateUser,
    deleteUser
  } = require('../Controllers/UserController');

/*
Routes.get('/', function(req, res) {
  // res.send('Hello World');
  // Let's send a JSON response.
  // res.json({message: "Getting users...."});

  // We can set and send our own defined status code. normally when we make a get request and if the server able to find the resource that we are trying to retrive it sends that resposne along with a status code `200` let's change to 201, but don't confuse the http methods, let it do its job
  // res.status(201).json({message: "Getting users...."});

  res.status(200).json({message: "Getting users...."});
});
*/

// Since we are hitting the same endpoints or path for getting or setting the users as well as updating or deleting the users, we can optimize the codebase more further, so that we can follow the DRY principal.
// Routes.get('/', getUsers);

// Routes.post('/', setUser);

// Routes.put('/:id', updateUser);

// Routes.delete('/:id', deleteUser);

// To do that we'll leverage the express route method and chain our http request methods on it.
Routes.route('/').get(getUsers).post(setUser);
Routes.route('/:id').delete(deleteUser).put(updateUser);

module.exports = Routes;