import axios from "axios";
import {ICustomer} from "@/types/Customer";

export class CustomerService{
    API_URL = process.env.VUE_APP_API_URL;

    public async getCustomers(): Promise<any> {
        const result: any = await axios.get(`${this.API_URL}/customers`);
        return result.data;
    };

    public async getCustomer(id:String): Promise<any> {
        const result: any = await axios.get(`${this.API_URL}/customers/${id}`);
        return result.data;
    };

    public async updateCustomer(customer:ICustomer): Promise<any> {
        const result: any = await axios.patch(`${this.API_URL}/customers/${customer.id}`, customer);
        return result.data;
    };

    public async addCustomer(customer:ICustomer): Promise<any> {
        const result: any = await axios.post(`${this.API_URL}/customers`, customer);
        return result.data;
    };
}