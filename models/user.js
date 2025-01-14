const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    cart: {
        items: [
            {
                productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true},
                quantity: { type: Number, required: true }
            }
        ]
    }
});

userSchema.methods.clearCart = function() {
    this.cart = { items: [] };
    return this.save();
};

userSchema.methods.addToCart = function(product) {
    const cartProductIndex = this.cart.items.findIndex(cp => {
        return cp.productId.toString() === product._id.toString();
    });

    let newQuantity = 1;
    const updatedCartItems = [...this.cart.items];

    if (cartProductIndex >= 0) {
        newQuantity = this.cart.items[cartProductIndex].quantity + 1;
        updatedCartItems[cartProductIndex].quantity = newQuantity;
    } else {
        updatedCartItems.push({ productId: product._id, quantity: newQuantity });
    }

    const updatedCart = {
        items: updatedCartItems
    }
    this.cart = updatedCart;

    return this.save();
};

userSchema.methods.removeFromCart = function(productId) {
    const updatedCartItems = this.cart.items.filter(item => {
        return item.productId.toString() !== productId.toString();
    });
    this.cart.items = updatedCartItems;
    return this.save();
}

userSchema.methods.addOrder = function(user) {
    
}

module.exports = mongoose.model('User', userSchema);


// const mongodb = require('mongodb');
// const getDb = require('../util/database').getDb;
// class User {
//     constructor(username, email, cart, id) {
//         this.username = username;
//         this.email = email;
//         this.cart = cart; // an object { items: [] }
//         this._id = id ? new mongodb.ObjectId(id) : null;
//     }

//     save() {
//         const db = getDb();
//         let dbOp;

//         if (this._id) {
//             dbOp = db.collection('users')
//                 .updateOne({ _id: this._id}, { $set: this });
//         } else {
//             dbOp = db.collection('users').insertOne(this);
//         }

//         return dbOp
//             .then(result => {
//                 console.log(result);
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     }

//     deleteItemFromCart(productId) {
//         const db = getDb();

//         const updatedCartItems = this.cart.items.filter(item => {
//             return item.productId.toString() !== productId.toString();
//         });

//         return db
//             .collection('users')
//             .updateOne(
//                 { _id: this._id },
//                 { $set: {
//                     cart: { items: updatedCartItems } }
//                 }
//             );
//     }

//     addOrder() {
//         const db = getDb();

//         return this.getCart()
//             .then(products => {
//                 const order = {
//                     items: products,
//                     user: {
//                        _id: new mongodb.ObjectId(this._id),
//                        name: this.name
//                     }
//                 }
//                 return db
//                     .collection('orders')
//                     .insertOne(order);
//             })
//             .then(result => {
//                 this.cart = { items: [] };
//                 return db
//                     .collection('users')
//                     .updateOne(
//                         { _id: new mongodb.ObjectId(this._id) },
//                         { $set: { cart: { items: [] } } }
//                     )

//             })
//             .catch(err => console.log(err));
//     }

//     getOrders() {
//         const db = getDb();
//         return db.collection('orders').find({'user._id': new mongodb.ObjectId(this._id)}).toArray();
//     }

// module.exports = User;
