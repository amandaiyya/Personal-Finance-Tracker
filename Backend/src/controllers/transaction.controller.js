import Transaction from "../models/transaction.model.js";
import apiResponse from "../utils/apiResponse.js";
import apiError from "../utils/apiError.js";
import mongoose from "mongoose";

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
            new apiResponse(200, [], "Transactions not found")
        )
    }

    return res
    .status(200)
    .json(
        new apiResponse(200, transactions, "Transactions fetched successfully")
    )
}

const updateTransactoin = async (req, res) => {
    const { transactionId } = req.params;
    
    if(!transactionId.trim()){
        throw new apiError(400, "Transaction ID is required")
    }

    if(!mongoose.Types.ObjectId.isValid(transactionId)){
        throw new apiError(400, "Invalid Transaction ID format")
    }

    const { title, amount, date, category } = req.body;

    if(!title.trim() || !amount || !date || !category.trim()){
        throw new apiError(400, "title, amount, date and category is required");
    }

    const updatedTransaction = await Transaction.findByIdAndUpdate(
        transactionId,
        {
            title,
            amount,
            date,
            category,
        },
        {
          new: true, 
          runValidators: true  
        },
    )

    if(!updatedTransaction){
        throw new apiError(404, "Transaction not found")
    }

    return res
    .status(200)
    .json(
        new apiResponse(200, updatedTransaction, "Transaction updated successfully")
    )
}

const deleteTransaction = async (req, res) => {
    const { transactionId } = req.params;

    if(!transactionId){
        throw new apiError(400, "Transaction ID is required")
    }

    if(!mongoose.Types.ObjectId.isValid(transactionId)){
        throw new apiError(400, "Invalid Transaction ID format")
    }

    const deletedTransaction = await Transaction.findByIdAndDelete(transactionId)

    if(!deletedTransaction){
        throw new apiError(404, "Transaction not found")
    }

    return res
    .status(200)
    .json(
        new apiResponse(200, deletedTransaction, "Transaction has been deleted successfully")
    )
}

export {
    addTransaction,
    getTransaction,
    updateTransactoin,
    deleteTransaction,
};