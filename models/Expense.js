const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: [true, "Please add a title"],
      trim: true,
    },
    amount: {
      type: Number,
      required: [true, "Please add an amount"],
      min: [0, "Amount cannot be negative"],
    },
    category: {
      type: String,
      required: [true, "Please add a category"],
      enum: [
        "Food",
        "Transport",
        "Shopping",
        "Entertainment",
        "Bills",
        "Healthcare",
        "Education",
        "Other",
      ],
    },
    date: {
      type: Date,
      required: [true, "Please add a date"],
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Expense", expenseSchema);
