const mongoose = require('mongoose')
// mongoose.connect('mongodb+srv://sameh:abc123456@cluster0.p8bw6.mongodb.net/<api>?retryWrites=true&w=majority',{
//     useNewUrlParser: true,
//     useCreateIndex: true
// })
require("./mongoose_connect")
const Schema = mongoose.Schema
const Product = new Schema({
    product_type:{
        type: String,
    },
    water_line_compatible:{
        type:Boolean, default: false 
    },
    code:{
        type:String,unique : true
    },
    model:{
        type:String
    }
})


module.exports = mongoose.model('Product', Product );

