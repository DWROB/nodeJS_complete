const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    items: [
        {
            productId: { type: Schema.Types.ObjectId, ref: 'Product'},
            quantity: Number
        }
    ],
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Order', orderSchema);

// userSchema.methods.CreateOrder = function(products) {

// }
