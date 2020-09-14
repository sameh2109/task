const express = require('express');
const bodyParser = require('body-parser')
const product = require('./src/db/coffee_machine')
const coffeePods = require('./src/db/coffee_pods')
const path = require('path')
const app = express();
app.use(bodyParser.json())

// View Engine Setup 
app.set("views", path.join(__dirname))
app.set("view engine", "ejs")

//Add Coffee Machine
app.post('/add', (req, res, next) => {
    const post = new product(req.body);
    post.save().then(() => {
        console.log(post)
    }).catch((error) => {
        console.log(error)
    })
    res.status(201).json({
        message: 'Post Added successfully'
    })
})

//Get All Coffee Machine
app.get('/products', (req, res, next) => {
    product.find({}, function (err, users) {
        const productMap = {};

        users.forEach(function (pro) {
            productMap[pro._id] = pro;
        });

        res.send(productMap);
    });
})

//Get certain Coffee Machine by code
app.get('/get_product', (req, res, next) => {
    const name = req.query.name
    product.findOne({ code: name.toString(name) }, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
})

//Delete Coffee Machine by code
app.delete('/delete', (req, res, next) => {
    const name = req.query.name
    product.deleteOne({ code: name.toString(name) }, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
})

//Add Coffee Pods
app.post('/addP', (req, res, next) => {
    const post = new coffeePods(req.body);
    post.save().then(() => {
        console.log(post)
    }).catch((error) => {
        console.log(error)
    })
    res.status(201).json({
        message: 'Post Added successfully'
    })
})

//Get All Coffee Pods
app.get('/productsP', (req, res, next) => {
    coffeePods.find({}, function (err, users) {
        const productMap = {};

        users.forEach(function (pro) {
            productMap[pro._id] = pro;
        });

        res.send(productMap);
    });
})

//Get certain Coffee Pods by name
app.get('/get_productP', (req, res, next) => {
    const name = req.query.name
    coffeePods.findOne({ product_type: name.toString(name) }, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
})

//Delete Coffee Pods by name
app.delete('/deleteP', (req, res, next) => {
    const name = req.query.name
    coffeePods.deleteOne({ product_type: name.toString(name) }, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
})


module.exports = app;