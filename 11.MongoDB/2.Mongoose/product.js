const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("CONNECTION OPENED !!!")
    })
    .catch((err) => {
        console.log("OH NO ERROR!!!!!")
        console.log(err)
    })


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, "Price must be Negative ya dodo!"]
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: {
        type: [String],
        default: ["cycling"]
    },
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type : Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ["S", "M", "L"]
    }
})


/* Instance Method=========================================
=========================================================*/
productSchema.methods.greet = function(){
    console.log("HELLO!!! HI!! HOWDY!!!")
    console.log(`- from ${this.name}`)
}
productSchema.methods.toggleOnSale = function() {
    this.onSale = !this.onSale;
    return this.save();
}
productSchema.methods.addCategory = function(newCat){
    this.categories.push(newCat)
    return this.save();
}
/* ====================================================== */


/* static Schema Method ==========================================================================
================================================================================================ */
productSchema.statics.firstSale = function() {
    return this.updateMany({}, {onSale: true, price: 0})
}
/* ============================================================================================= */






/* Creating Product Schema ================================
======================================================== */
const Product = mongoose.model("Product", productSchema)
/* ====================================================== */



/* Calling Instance Method =============================================================
====================================================================================== */
const findProduct = async() => {
    const foundProduct = await Product.findOne({name: "Mountain Bike"});
    console.log(foundProduct)
    await foundProduct.toggleOnSale()
    console.log(foundProduct)
    await foundProduct.addCategory("Outdoors")
    console.log(foundProduct)
}
findProduct()
/* =============================================================================================== */


/* Calling static Schema Method ==========================================================================
================================================================================================ */
Product.firstSale().then(res => console.log(res))
/* ============================================================================================= */




/* Insertion ==========================================================================
================================================================================================ */
// if we add some extra info which is not present in schema 
// then db will simply ignore that 
const bike = new Product({name: "Sycling Jersey", price: 28.50, categories: ["cycling"], size: "S"})
bike.save().then(data => {
    console.log("IT WORKED!!!")
    console.log(data)
}).catch(err => {
    console.log("OH NO ERROR!!!")
    console.log(err)
})
/* ============================================================================================= */




/* Updation ==========================================================================
================================================================================================ */
Product.findOneAndUpdate({name: "Mountain Bike"}, {price : 199}, {new: true, runValidators: true})
.then(data => {
    console.log("IT WORKED!!!")
    console.log(data)
}).catch(err => {
    console.log("OH NO ERROR!!!")
    console.log(err)
})
/* ============================================================================================= */















