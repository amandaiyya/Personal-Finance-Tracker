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
};

const apiServices = new ApiServices();

export default apiServices;