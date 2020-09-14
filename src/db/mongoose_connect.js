const mongoose = require('mongoose')
const con =  mongoose.connect('mongodb+srv://<username>:<password>@cluster0.p8bw6.mongodb.net/<api>?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useCreateIndex: true
})
module.exports = con