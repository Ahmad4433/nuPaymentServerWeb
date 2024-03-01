const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
      default: "individual",
    },
    currency: {
      type: String,
    },
    name: {
      type: String,
    },
    image: { type: String },
    bio: { type: String,default:null },
    website: { type: String,default:null },
    invoice:[{type:mongoose.Types.ObjectId,ref:'Invoice'}],
    paymant:[{type:mongoose.Types.ObjectId,ref:'Payment'}],
    status:{type:String,default:'active'},
    mobile:{type:Number},
    address:{type:String},
    transcation:[{type:mongoose.Types.ObjectId,ref:'Transcation'}]
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
