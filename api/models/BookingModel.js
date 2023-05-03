var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BookingModelSchema = new Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: [true, 'Customer field is required']
    },
    service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
        required: [true, 'Service field is required']
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'payment_done', 'completed'],
        required: [true, 'Status field is required']
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

const Booking = mongoose.model('Booking', BookingModelSchema);
module.exports = {Booking}