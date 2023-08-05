const { Schema, model} = require('mongoose');
// Schema to create User model
const userSchema = new Schema(
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
        match: [/.+@.+\..+/]
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

    userSchema
      .virtual('friendCount')
      .get(function () {
        return this.friends.length
      });
    
    const User = model('User', userSchema)
    
    module.exports = User;