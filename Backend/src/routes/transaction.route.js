import { Router } from "express";
import { 
    addTransaction, 
    deleteTransaction, 
    getTransactionById, 
    getTransactions, 
    getTransactionsByCategory, 
    updateTransaction 
} from "../controllers/transaction.controller.js";

const router = Router();

// All Transactions Routes
router.route("/add-transaction").post(addTransaction);
router.route("/get-transactions").get(getTransactions);
router.route("/get-transaction/:transactionId").get(getTransactionById)
router.route("/update-transaction/:transactionId").put(updateTransaction);
router.route("/delete-transaction/:transactionId").delete(deleteTransaction);
router.route("/get-transactions-by-category").get(getTransactionsByCategory)

export default router;