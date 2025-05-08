const mongoose = require('mongoose');

exports.connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Databse er tilkoblet");
  } catch (error) {
    console.error("Feil ved database tilkobling:", error);
  }
}