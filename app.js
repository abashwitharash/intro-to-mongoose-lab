const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const Customer = require('./models/customer')

// const prompt = require('prompt-sync')();

// const welcome = prompt('Welcome to the CRM\n\nWhat would you like to do?\n\n1. Create a customer\n2. View all customers\n3. Update a customer\n4. Delete a customer\n5. quit')

// console.log(welcome);

// const welcome = prompt('What is your name? ');

// console.log(`Your name is ${username}`);

//STEP ONE CONNECT TO MONGO AND THEN MAKE THE START FUNCTIONS
const connect = async () => {
    // Connect to MongoDB using the MONGODB_URI specified in our .env file.
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    await runQueries()

    await mongoose.disconnect();
  console.log('Disconnected from MongoDB');

  process.exit();

}




//STEP 2 HAVE A RUN QUERIES TO RUN THE FUNCTIONS AND WHEN MADE AWAIT AND RUN FUNCTIONS HERE
const runQueries = async () => {
    console.log('Queries running.')
    // The functions calls to run queries in our db will go here as we write them.
      await findCustomers();
       await createCustomer();
  };
  

 

//STEP 3 CREATE AND MAKE FUNCTIONS 
  const createCustomer = async () => {
    const customerData = [
        {name: 'Arash', age: 35},
        {name: 'Mica', age: 10}
    ];
//making a constand and calling it customer = teling it to wait to understand the info 
// and then grabbing the schematics (Customer) and create it with the customerData aka my name and age 
    const customer = await Customer.create(customerData) // how data is created on MongoDB
    console.log("new customer:", customer);
};

const findCustomers = async () => {
    const customers = await Customer.find({})
    console.log('All customers:', customers);
};
//STEP 4 RUN PROGRAM
connect();


