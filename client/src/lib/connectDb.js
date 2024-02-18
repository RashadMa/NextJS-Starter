import mongoose from "mongoose";

const connection = {}
export const connectDb = async () => {
      try {
            if (connection.isConnected) {
                  console.log("Database is already connected");
                  return
            }
            const db = await mongoose.connect(process.env.MONGO);
            connection.isConnected = db.connections[0].readyState;
            console.log("MongoDB connected");
      } catch (err) {
            console.log(err);
            process.exit(1);
      }
}