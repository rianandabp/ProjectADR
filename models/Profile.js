const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    companyName: {
        type: String
    },
    address: {
        type: String
    },
    ownerName: {
        type: String
    },
    accountNumber: {
        
        type: String
    },
    bankAccount: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    description: {
        type: String
    }
});

module.exports = mongoose.model('profile', UserSchema);