import axios from "axios";
import config from "../config/config.js";

// Custom Class for Handling all the API Calls
class ApiServices {
    apiClient;

    constructor(){
        this.apiClient = axios.create({
            baseURL: config.apiurl,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            timeout: 10000
        })
    }

    // Method for Add Transaction
    async addTransaction({title, amount, date, category}){
        try {
            const {data} = await this.apiClient.post('/api/transactions/add-transaction',{
                title,
                amount,
                date,
                category
            })

            return data || null;
        } catch (error) {
            console.log(error)
        }
    }

    // Method for Get All Transactions
    async getTransactions(){
        try {
            const {data} = await this.apiClient.get('/api/transactions/get-transactions');

            return data || null;
        } catch (error) {
            console.log(error)
        }
    }

    // Method for Get Transaction By ID
    async getTransactionById({id}){
        try {
            const {data} = await this.apiClient.get(`/api/transactions/get-transaction/${id}`);

            return data || null;
        } catch (error) {
            console.log(error)
        }
    }

    // Method for Get All Transactions By Category
    async getTransactionByCategory({category}){
        try {
            const {data} = await this.apiClient.get(`/api/transactions/get-transactions-by-category?category=${category}`);

            return data || null;
        } catch (error) {
            console.log(error)
        }
    }

    // Method for Update Transaction 
    async updateTransaction({transactionId, title, amount, category, date}){
        try {
            const {data} = await this.apiClient.put(`/api/transactions/update-transaction/${transactionId}`,{
                title,
                amount,
                category,
                date,
            });

            return data || null;
        } catch (error) {
            console.log(error)
        }
    }

    // Method for Delete Transaction
    async deleteTransaction({transactionId}){
        try {
            const {data} = await this.apiClient.delete(`/api/transactions/delete-transaction/${transactionId}`);

            return data || null;
        } catch (error) {
            console.log(error)
        }
    }
};

const apiServices = new ApiServices();

export default apiServices;