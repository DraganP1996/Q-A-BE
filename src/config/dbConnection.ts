import mongoose from "mongoose";
import { ConnectionOptions } from "tls";
import dotenv from 'dotenv';

dotenv.config();

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI + '', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectionOptions);
mongoose.connection
  .once("open", () => console.log("Database connected Successfully"))
  .on("error", err => console.log);

export default mongoose;
