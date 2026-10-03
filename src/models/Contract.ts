import mongoose, { Schema, Document, Model } from "mongoose";

export interface IContract extends Document {
  userId: string;
  originalName: string;
  fileName: string;
  fileType: string;
  fileSize: number;
  fileUrl: string;
  status: "uploaded" | "processing" | "completed" | "failed";
  createdAt: Date;
  updatedAt: Date;
}

const contractSchema = new Schema<IContract>(
  {
    userId: {
      type: String,
      required: true,
      index: true,
    },

    originalName: {
      type: String,
      required: true,
      trim: true,
    },

    fileName: {
      type: String,
      required: true,
    },

    fileType: {
      type: String,
      required: true,
    },

    fileSize: {
      type: Number,
      required: true,
    },

    fileUrl: {
  type: String,
  default: "",
},

    status: {
      type: String,
      enum: ["uploaded", "processing", "completed", "failed"],
      default: "uploaded",
    },
  },
  {
    timestamps: true,
  }
);

const Contract: Model<IContract> =
  mongoose.models.Contract ||
  mongoose.model<IContract>("Contract", contractSchema);

export default Contract;