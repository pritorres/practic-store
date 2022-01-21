export declare class OrderController {
    getAllOrder(limit: number, offset: number, brand: string): {
        message: string;
    };
    getOrder(orderId: string): {
        message: string;
    };
    createCustomer(payload: any): {
        message: string;
        payload: any;
    };
}
