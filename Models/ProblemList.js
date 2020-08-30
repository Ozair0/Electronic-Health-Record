const mongoose = require("mongoose");

const ProblemList = new mongoose.Schema(
  {
    Problem: {
      type: String,
      required: true
    },
    Date_Solved: {
      type: Date
    },
    SolvedBy: {
      type: String
    },
    Date_Deleted: {
      type: Date
    },
    DeletedBy: {
      type: String
    },
    AddedBy: {
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

module.exports = mongoose.model("ProblemList", ProblemList);
