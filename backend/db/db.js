import mongoose from "mongoose";

async function connnectToMongoDB() {
  try {
    await mongoose.connect(process.env.dbLink);
    console.log(`DB Connected`);
  } catch (error) {
    console.log(error);
  }
}

export default connnectToMongoDB;
