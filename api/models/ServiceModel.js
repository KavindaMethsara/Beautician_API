var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const { ServiceTag } = require("./ServiceTagModel");

var ServiceTagSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title filed is required']
    },
    description: {
        type: String,
        required: [true, 'Description filed is required']
    },
    image: {
        type: String
    },
    service_tag: {
        type: mongoose.Schema.Types.ObjectId,
        ref: ServiceTag,
        required: [true, 'ServiceTag filed is required']
    },
    price: {
        type: String,
        required: [true, 'Price filed is required']
    },
    beautician: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Beautician',
        required: [true, 'Beautician filed is required']
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

const Service = mongoose.model('Service', CustomerModelSchema);
module.exports = { Service }