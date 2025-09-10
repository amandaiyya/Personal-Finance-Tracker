import Transaction from "../models/transaction.model.js";
import apiResponse from "../utils/apiResponse.js";
import apiError from "../utils/apiError.js";

const addTransaction = async (req, res) => {
    const { title, amount, date, category } = req.body;

    if(!title.trim() || !amount || !date || !category.trim()){
        throw new apiError(400, "title, amount, date and category is required");
    }

    const transactionDate = new Date(date);

    const transaction = await Transaction.create({
        title,
        amount,
        date: transactionDate,
        category
    })
    
    if(!transaction){
        throw new apiError(500, "Error while creating transaction");
    }

    return res
    .status(200)
    .json(
        new apiResponse(200, transaction, "Transaction added successfully")
    )
}

const getTransaction = async (req, res) => {
    const transactions = await Transaction.find().sort({date: -1})

    if(!transactions || !transactions.length){
        return res
        .status(200)
        .json(
            new apiResponse(200, [], "Transactions Not Found")
        )
    }

    return res
    .status(200)
    .json(
        new apiResponse(200, transactions, "Transactions fetched successfully")
    )
}

const updateTransactoin = async () => {}

const deleteTransaction = async () => {}

export {
    addTransaction,
    getTransaction,
    updateTransactoin,
    deleteTransaction,
};