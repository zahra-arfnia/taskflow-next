
import { connect , disconnect ,connection} from "mongoose";
const MONGODB_URI : string | undefined = process.env.MONGODB_URI




const connectDB = async (): Promise<void> =>{

 if (!MONGODB_URI) {
    console.error(" MONGODB_URI is missing!");
    return;
  }
  if( connection.readyState === 1) return;
  try {
    await connect(MONGODB_URI)
    console.log(`MongoDB connected`);
    
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(` MongoDB is not connected because: ${error.message}`);
    } else {
      console.error(" MongoDB is not connected due to an unknown error");
    }
  }
}

const disconnectDB = async (): Promise<void> =>{
  try {
    await disconnect()
    console.log(`MongoDB disconnected`);
    
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(` MongoDB is not disconnected because: ${error.message}`);
    } else {
      console.error(" MongoDB is not disconnected due to an unknown error");
    }
  }
}



export {connectDB , disconnectDB}