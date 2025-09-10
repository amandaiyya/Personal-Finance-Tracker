import { Router } from "express";
import { 
    addTransaction, 
    deleteTransaction, 
    getTransaction, 
    updateTransactoin 
} from "../controllers/transaction.controller.js";

const router = Router();

router.route("/add-transaction").post(addTransaction);
router.route("/get-transactions").get(getTransaction);
router.route("/update-transaction/:transactionId").patch(updateTransactoin);
router.route("/delete-transaction/:transactionId").delete(deleteTransaction);

export default router;