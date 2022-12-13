import mongoose from 'mongoose';

const connectMongo = async () => {
  const url = process.env.MONGO_URL!;
  try {
    const { connection } = await mongoose.connect(url);

    if (connection.readyState === 1) {
      return Promise.resolve(true);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export default connectMongo;
