import mongoose, { Schema } from 'mongoose'

const userSchema: Schema<any> = new Schema({
    email: {
        type: String,
    },
    password: {
        type: String,
    },

});

const userModel = mongoose.model("UserModel", userSchema);

export default userModel;