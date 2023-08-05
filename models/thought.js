const { Schema, model, Types } = require('mongoose');

// Importing momentFormatDate.js for time sheet of when thought is created
const allotedTime = require('../utils/momentFormatDate');

// Importing Reaction.js for array of reactions
const reaction = require('./reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String, 
            required: true, 
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date, 
            default: Date.now,
            get: (time) => allotedTime(time)
        },
        // user that created this thought
        username: {
            type: String, 
            required: true
        },
        // User Replies
        reactions: [reaction]
    },
    // Data for each of these routes is displayed in a formatted JSON
    {
        toJSON: {
            virtuals: true,
            getters: true,
          },
          id: false,
    }
);

// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.

thoughtSchema.virtual('reactionCount').get(function() {
        return this.reactions.length;
    });

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;