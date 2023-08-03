const router = require('express').Router();

// Using ALL functions from userControl.js
const {
    getAllUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser,
    addAFriend,
    deleteAFriend
} = require('../../controllers/userControl');

// Establishing default route for server
router.route('/').get(getAllUsers).post(createUser);

// Establishing userId routes (GET, PUT, DELETE) for server
router.route('/:userId').get(getSingleUser);
router.route('/:userId').put(updateUser);
router.route('/:userId').delete(deleteUser);

// Establishing userId friends Routes (POST, DELETE) for server
router.route('/:userId/friends/:friendId').post(addAFriend);
router.route('/:userId/friends/:friendId').delete(deleteAFriend);

// Exporting Router
module.exports =router;

