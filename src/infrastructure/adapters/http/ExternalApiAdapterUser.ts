
import axios from 'axios';
import { IExternalApiUsers } from '../../../application/ports/IExternalApiUsers';

export class ExternalApiAdapterUser implements IExternalApiUsers {
    private baseUrl: string;

    constructor() {
        this.baseUrl = "http://192.168.0.24:3000/api-ecomerce/users";
    }

    async validateToken(token: string): Promise<boolean> {
        let value: boolean = false;
        try {
            const response = await axios({
                url: `${this.baseUrl}/validate-token`,
                method: "GET",
                headers: {
                    token,
                }
            });            
            if (response.data.value === true) value = true;
        } catch (error) {
            console.error(error);
            value = false
        }
        return value
    }
}

