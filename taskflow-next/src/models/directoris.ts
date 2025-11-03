import { model, Schema, Document, Types } from "mongoose";

export interface IDirectory extends Document {
  name: string;
  owner: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const DirectorySchema = new Schema<IDirectory>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      maxlength: [10, "Please add a name less than 10 characters"],
    },
    owner: { 
      type: Schema.Types.ObjectId, 
      ref: "User", 
      required: true 
    },
  },
  { timestamps: true }
);

const Directory = model<IDirectory>("Directory", DirectorySchema);
export default Directory;
