const express = require("express");
const router = express.Router();
const {
  getAllExpenses,
  addExpense,
  deleteExpense,
  updateExpense,
} = require("../controllers/expenseController");
const { protect } = require("../middlewares/auth");

// All routes require authentication
router.use(protect);

router.route("/").get(getAllExpenses).post(addExpense);
router.route("/:id").delete(deleteExpense).put(updateExpense);

module.exports = router;
