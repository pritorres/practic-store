import { ProductsService } from './../services/products.service';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    getAllProduct(limit?: number, offset?: number, brand?: string): import("../entitis/product.entity").Product[];
    getProduct(productId: number): import("../entitis/product.entity").Product;
    createProduct(payload: CreateProductDto): {
        name: string;
        description: string;
        image: string;
        stock: number;
        price: number;
        id: number;
    };
    upDateProduct(id: number, payload: UpdateProductDto): import("../entitis/product.entity").Product;
    delete(id: number): boolean;
}
