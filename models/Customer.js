const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    car: [
        {
            car:{
                type: mongoose.Schema.Types.ObjectId
            }
        }
    ]
});

module.exports = mongoose.model('customer', UserSchema);