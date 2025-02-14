//OFFICIALLY START HERE
//STEP ONE
const mongoose = require('mongoose');

// STEP 2
const customerSchema = new mongoose.Schema({
    name: String,
    age: Number,
  });

  // STEP 3
//define and export customer model 
const Customer = mongoose.model('Customer', customerSchema );
// execute Customer
module.exports = Customer;


