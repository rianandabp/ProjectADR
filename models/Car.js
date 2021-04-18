const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customer'
    },
    model: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    plateNumber: {
        type: String
    },
    year: {
        type: String,
    },
    description: {
        type: String,
    },
    totalSpent: {
        type: Number,
        default: 0
    },
    project: [
        {
            project: {
                type: mongoose.Schema.Types.ObjectId
            }
        }
    ]
});

module.exports = mongoose.model('car', UserSchema);