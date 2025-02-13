const mongoose = require('mongoose');


const customerSchema = new mongoose.Schema({
    name: String,
    age: Number,
  });

//define and export customer model 
const Customer = mongoose.model('Customer', customerSchema );
// execute Customer
module.exports = Customer;


