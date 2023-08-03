const router = require('express').Router();

// Using ALL functions from thoughtControl.js
const {
    getAllThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtsControl');

// Establishing default route for server
router.route('/').get(getAllThoughts).post(createThought);

// Establishing userId routes (GET, PUT, DELETE) for server
router.route('/:thoughtId').get(getSingleThought);
router.route('/:thoughtId').put(updateThought);
router.route('/:thoughtId').delete(deleteThought);

// Establishing userId friends Routes (POST, DELETE) for server
router.route('/:thoughtId/reactions').post(createReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

// Exporting Router
module.exports =router;
