import { Router } from "express";
import { 
    addTransaction, 
    deleteTransaction, 
    getTransactions, 
    getTransactionsByCategory, 
    updateTransactoin 
} from "../controllers/transaction.controller.js";

const router = Router();

router.route("/add-transaction").post(addTransaction);
router.route("/get-transactions").get(getTransactions);
router.route("/update-transaction/:transactionId").put(updateTransactoin);
router.route("/delete-transaction/:transactionId").delete(deleteTransaction);
router.route("/get-transactions-by-category").get(getTransactionsByCategory)

export default router;