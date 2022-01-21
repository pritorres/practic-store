export declare class UserController {
    getAllCustomer(limit: number, offset: number, brand: string): {
        message: string;
    };
    getUser(userId: number): {
        message: string;
    };
    createUser(payload: any): {
        message: string;
        payload: any;
    };
}
