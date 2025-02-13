const prompt = require('prompt-sync')();


const username = prompt('What is your name? ');

console.log(`Your name is ${username}`);

const connect = async () => {
    // Connect to MongoDB using the MONGODB_URI specified in our .env file.
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
};