const mongoose = require("mongoose");

const DGraphicInfo = new mongoose.Schema(
  {
    ResponPersonFirstName: {
      type: String,
      required: true
    },
    ResponPersonLastName: {
      type: String,
      required: true
    },
    ResponPersonMiddleName: {
      type: String,
      required: true
    },
    ResponPersonRelation: {
      type: String,
      required: true
    },
    ResponPersonAddress: {
      type: String,
      required: true
    },
    MotherName: {
      type: String,
      required: true
    },
    MotherLastName: {
      type: String,
      required: true
    },
    MotherMiddleName: {
      type: String,
      required: true
    },
    CountryOfResidence: {
      type: String,
      required: true
    },
    Country: {
      type: String,
      required: true
    },
    City: {
      type: String,
      required: true
    },
    Street: {
      type: String,
      required: true
    },
    ZipCode: {
      type: Number,
      required: true
    },
    Smocking: {
      type: Boolean,
      required: true
    },
    SmockingStatus: {
      type: String,
      required: true
    },
    Disabilities: {
      type: String,
      required: true
    },
    Religion: {
      type: String,
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("DemoGraphicInfo", DGraphicInfo);
