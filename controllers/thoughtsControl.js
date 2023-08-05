const { Thought, User} = require('../models');

// module.export all functions so they can be used in api routes
module.exports = {
    // Getting all thoughts
    getAllThoughts(req, res) {
        Thought.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err))
    },
    // Getting a single thought
    getSingleThought(req, res) {
        Thought.findOne({_id: req.params.thoughtId})
        .select('-__v')
        .populate('reactions')
        .then ((singleThought) =>
            !singleThought
                ? res.status(404).json({ message: 'No User with that id'})
                : res.json(singleThought)
        )
        .catch((err) => res.status(500).json(err));
    },
    // Creating a Thought and then updating into user's userSchema
    createThought(req, res) {
        Thought.create({
            thoughtText: req.body.thoughtText,
            username: req.body.username
        })
        .then((thought) => {
            return User.findOneAndUpdate(
                { username: req.body.username},
                { $addToset: {thoughts: thought._id}},
                { new: true}
            );
        }).then((user) => 
        !user
        ? res.status(404).json({ message: "No User with this id"})
        : res.json(user)
        ) 
        .catch((err) => res.status(500).json(err));
    },
    // Updating a Thought and updating user's thoughtSchema
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId},
            { thoughtText: req.body.thoughtText,
              username: req.body.username},
            { new: true},
            (err, result) => {
                if(err) {
                    console.log(err);
                    res.status(500).json(err);
                } else {
                    res.status(200).json(result);
                    console.log(`${result} has been updated successfully`)
                }
            }
        );
    },
    // Deleting a Thought and update user's thoughtSchema
    deleteThought (req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId})
        .then((thought) => 
            !thought
            ? res.status(404).json({ message: 'No thought with that Id'})
            : User.findOneAndUpdate(
                {thoughts: req.params.thoughtId},
                {$pull: {thoughts: req.params.thoughtId}},
                {new: true}
                )
            )
            .then((user) => 
                !user
                ? res.status(404).json({ message: 'Something went wrong deleting this thought'})
                : res.json({message: 'Thought has been deleted'})
        )
        .catch((err) => res.status(500).json(err));
    },
    // Adding a reaction and updating in user's thoughtSchema
    createReaction (req,res) {
        Thought.findOneAndUpdate(
            {_id:req.params.thoughtId},
            {$addToset: {reactions: req.body}},
            {new: true},
            {runValidators:true}
        )
        .then((thought) => 
            !thought
                ? res.status(404).json({message: 'No thought with this id'})
                : res.json('A Reaction was created')
        )
        .catch((err) => res.status(500).json(err));
    },
    // Deleting a reaction and updating in user's thoughtSchema
    deleteReaction (req,res) {
        Thought.findOneAndUpdate(
            {_id:req.params.thoughtId},
            {$pull: {reactions: {reactionsId: req.params.reactionId}}},
            {new: true},
            {runValidators:true}
        )
        .then((thought) => 
            !thought
                ? res.status(404).json({message: 'No thought with this id'})
                : res.json('A Reaction was deleted')
        )
        .catch((err) => res.status(500).json(err));
    }
}