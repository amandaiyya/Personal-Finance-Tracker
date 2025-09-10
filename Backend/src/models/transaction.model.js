import mongoose, { Schema } from "mongoose";

const transactionSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        trim: true,
    },
    
    amount: {
        type: Number,
        required: [true, "Amount is required"],
    },

    date: {
        type: Date,
        required: [true, "Date is required"],
    },

    category: {
        type: String,
        required: [true, "Category is required"],
        enum: ["Food", "Rent", "Travel", "Salary", "Shopping", "Other"]
    },
},{ timestamps: true });

const Transaction = mongoose.model("Transaction", transactionSchema);

export default Transaction;