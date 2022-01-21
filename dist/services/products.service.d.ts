import { Product } from '../entitis/product.entity';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';
export declare class ProductsService {
    private counterId;
    private products;
    findAll(): Product[];
    findOne(id: number): Product;
    create(payload: CreateProductDto): {
        name: string;
        description: string;
        image: string;
        stock: number;
        price: number;
        id: number;
    };
    upDate(id: number, payload: UpdateProductDto): Product;
    delete(id: number): boolean;
}
