var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ServiceTagModelSchema = new Schema({
    user_id: {
        type: String,
        required: [true, 'User field is required!']
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

const ServiceTag = mongoose.model('ServiceTag', CustomerModelSchema);
module.exports = { ServiceTag }