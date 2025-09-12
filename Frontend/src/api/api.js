import axios from "axios";
import config from "../config/config.js";

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

    async getTransactions(){
        try {
            const {data} = await this.apiClient.get('/api/transactions/get-transactions');

            return data || null;
        } catch (error) {
            console.log(error)
        }
    }

    async getTransactionById({id}){
        try {
            const {data} = await this.apiClient.get(`/api/transactions/get-transaction/${id}`);

            return data || null;
        } catch (error) {
            console.log(error)
        }
    }

    async getTransactionByCategory({category}){
        try {
            const {data} = await this.apiClient.get('/api/transactions/get-transactions-by-category',{
                category
            })

            return data || null;
        } catch (error) {
            console.log(error)
        }
    }

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