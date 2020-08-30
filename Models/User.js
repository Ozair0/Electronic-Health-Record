const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    FirstName: {
      type: String,
      required: true
    },
    MidName: {
      type: String
    },
    LastName: {
      type: String,
      required: true
    },
    Age: {
      type: Number,
      required: true
    },
    Gender: {
      type: String,
      required: true
    },
    Email: {
      type: String
    },
    MartialStatus: {
      type: String
    },
    PhoneNumber: {
      type: String,
      required: true
    },
    HomePhoneNumber: {
      type: String,
      required: true
    },
    EmergencyContact: {
      type: String,
      required: true
    },
    Occupation: {
      type: String
    },
    ImageURL: {
      type: String,
      required: true
    },
    DateOfBirth: {
      type: Date,
      required: true
    },
    MoreInfo: { type: mongoose.Schema.Types.ObjectId, ref: "DemoGraphicInfo" },
    ProblemList: [{ type: mongoose.Schema.Types.ObjectId, ref: "ProblemList" }]
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
