export declare class CustomerController {
    getAllCustomer(limit: number, offset: number, brand: string): {
        message: string;
    };
    getCustomer(customerId: string): {
        message: string;
    };
    createCustomer(payload: any): {
        message: string;
        payload: any;
    };
    upDateCustomer(id: number, payload: any): {
        message: string;
    };
    deleteCustomer(id: number, payloas: any): {
        message: string;
    };
}
