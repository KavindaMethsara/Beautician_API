var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PaymentModelSchema = new Schema({
    booking: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking',
        required: [true, 'Customer field is required']
    },
    amount: {
        type: Number,
        required: [true, 'Amount field is required']
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

const Payment = mongoose.model('Payment', BookingModelSchema);
module.exports = {Payment}