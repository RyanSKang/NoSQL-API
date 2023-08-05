const { Schema, Types } = require('mongoose');

// Importing momentFormatDate.js for time sheet of when reaction is created
const allotedTime = require('../utils/momentFormatDate');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String, 
            required: true, 
            minlength: 1,
            maxlength: 280
        },
        username: {
            type: String, 
            required: true
        },
        createdAt: {
            type: Date, 
            default: Date.now, 
            get: (time) => allotedTime(time)
        }
    },
    // Data for each of these routes is displayed in a formatted JSON
    {
        toJSON: {
            getters: true,
          },
          id: false,
    }
);

module.exports = reactionSchema