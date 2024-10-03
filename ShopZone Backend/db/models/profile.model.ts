import mongoose from "mongoose";

export interface IProfile extends mongoose.Document {
  address: string;
  mobileNumber: string;
}

const ProfileSchema = new mongoose.Schema<IProfile>({
  address: {
    type: String,
    required: false,
  },
  mobileNumber: {
    type: String,
    required: false,
  },
});

export const Profile = mongoose.model<IProfile>("Profile", ProfileSchema);
