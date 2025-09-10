import mongoose, { Schema } from "mongoose";

const transactionSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    
    amount: {
        type: Number,
        required: true,
    },

    date: {
        type: Date,
        required: true,
    },

    category: {
        type: String,
        required: true,
        enum: ["Food", "Rent", "Travel", "Salary", "Shopping", "Other"]
    },
},{ timestamps: true });

const Transaction = mongoose.model("Transaction", transactionSchema);

export default Transaction;