const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String, 
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String, 
            unique: true,
            required: true, 
            match: [
                /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
                "Please fill a valid email address",
            ]
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: "Thought",
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

//get total amount user friends
userSchema.virtual("friendCount").get(function() {
    return this.friends.length;
  });
  
//creates User model 
const User = model("User", userSchema);
  
module.exports = User;