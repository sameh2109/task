const mongoose = require('mongoose')
require("./mongoose_connect")

const Schema = mongoose.Schema
const CoffeePods = new Schema({
    product_type:{
        type: String
    },
    coffee_flavor:{
        type: String
    },
    pack_size:{
        type: String
    },
    code:{
        type:String,unique : true
    }
})

module.exports = mongoose.model('CoffeePods', CoffeePods );
