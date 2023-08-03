// Importing User and Thought models
const { userInfo } = require('os');
const { User, Thought } = require('../models');

// module.export all functions so they can be used in api routes
module.exports = {
    // Getting all Users
    getAllUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err))
    },
    // Get a single User
    getSingleUser(req, res) {
        User.findOne({_id: req.params.userId})
        .select('-__v')
        .then ((singleUser) =>
            !singleUser
                ? res.status(404).json({ message: 'No User with that id'})
                : res.json(singleUser)
        )
        .catch((err) => res.status(500).json(err));
    },
    // Creating a User
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    // Deleting a User
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId})
            .then((user) => 
                !user
                ? res.status(404).json({ message: 'No User with that Id'})
                : Thought.deleteMany({ username: user.username})
                    .then((userThoughts) => 
                        !userThoughts
                        ? res.status(404).json({ message: 'There are no thoughts associated with this user'})
                        : res.json(User)
            )
        )
            .catch((err) => res.status(500).json(err));
    },
    // Updating a User
    updateUser( req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId},
            { email: req.body.email},
            { new: true}
        )
        .then((user) => 
            !user
                ? res.status(404).json({ message: "No User with this id"})
                : res.json(user)
        );
    },
    // Adding a friend and updating in user's userSchema
    addAFriend( req, res) {
        User.findOne({_id: req.params.friendId})
        .select('-__v')
        .then((user) => {
            return User.findOneAndUpdate(
                {_id: req.params.userId},
                {$set: {friends: user._id}},
                {new: true}
            );
        }).then((user) => 
        !user
            ? res.status(404).json({ message: "No User with this id"})
            : res.json(user)
        ).catch((err) => res.status(500).json(err))
    },
    // Deleting a friend and updating in user's userSchema
    deleteAFriend(req, res) {
        User.findOne({_id: req.params.friendId})
        .select('-__v')
        .then((user) => {
            return User.findOneAndUpdate(
                {_id: req.params.userId},
                {$pull: {friends: user._id}},
                {new: true}
            );
        }).then((user) => 
        !user
            ? res.status(404).json({ message: "No User with this id"})
            : res.json(user)
        ).catch((err) => res.status(500).json(err))
    }
}