import mongoose from 'mongoose';

const connectMongoDb = async () =>{

try {
    await mongoose.connect('mongodb+srv://vibansdinars:wJv399dRmAXbb7Pd@cluster0.jn3bvle.mongodb.net/users')
console.log('connected to db')
} catch (error) {
    console.log('rerror with connection', error)
}
}

export default connectMongoDb