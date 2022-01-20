const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const connectDB = require('../routes/db');
connectDB();

// const mongoURI = 'mongodb://localhost:3000';
// mongoose
//   .connect(mongoURI)
//   .then(() => {
//     console.log('Connected to sessions database');
//     return;
//   })
//   .catch((err) => {
//     console.log(`Error connecting to sessions database: ${err}`);
//     return;
//   });

const sessionSchema = new Schema({
  cookieId: { type: String, required: true, unique: true },
  createdAt: { type: Date, expires: '30m', default: Date.now },
});

module.exports = mongoose.model('Session', sessionSchema);