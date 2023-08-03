const { Schema, model} = require('mongoose');

// Importing validator to validate email
import { isEmail } from 'validator';

// Schema to create User model
const userModel = new Schema(
    {
       username: {
        type: String,
        unique: true,
        required: true, 
        trim: true
       },
       email: {
        type: String, 
        required: true, 
        unique: true,
        // Mongoose's matching validation
        validate: [ isEmail, 'invalid email']
       },
       thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'thought',
        },
       ],
       friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user'
        },
       ],
    },
    {
        toJSON: {
          getters: true,
        },
        id: false,
      }
    );

    // Create a virtual called friendCouont that retrieves the lengh of the user's friends array field on query

    userModel
      .virtual('friendCount')
      .get(function () {
        return this.friends.length
      });
    
    const User = model('User', userModel)
    
    module.exports = User;