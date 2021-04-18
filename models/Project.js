const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
     
    car: {
        type: Schema.Types.ObjectId,
        ref: 'car'
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: false
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    endDate: {
        type: Date,
        default: Date.now
    },
    totalSpent: {
        type: Number,
        default: 0
    },
    workDetail: [
        {
            description: {
                type: String,
                required: true
            },
            price:{
                type: Number,
                default: 0
            },
            status: {
                type: Boolean,
                default: false
            },
            date: {
                type: Date,
                default: Date.now
            },
            itemUsed: [
                {
                    description: {
                        type: String,
                        required: true
                    },
                    price:{
                        type: Number,
                        default: 0
                    },
                    status: {
                        type: Boolean,
                        default: false
                    },
                    quantity:{
                        type: Number,
                        default: 1
                    }
                }
            ]
        }
    ]
 
});

module.exports = mongoose.model('project', UserSchema);