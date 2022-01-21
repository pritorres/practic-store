import { CreateCategorie, UpdateCategories } from '../dtos/categories.dto';
import { CategoriesService } from '../services/categories.service';
export declare class CategoriesController {
    private categoriesService;
    constructor(categoriesService: CategoriesService);
    getAllCategories(limit: number, offset: number, brand: string): import("../entitis/categories.entity").Categories[];
    getCategories(productId: number): import("../entitis/categories.entity").Categories;
    createCategories(payload: CreateCategorie): {
        name: string;
        stock: number;
        logo: string;
        id: number;
    };
    updateCategorie(id: number, payload: UpdateCategories): {
        id: number;
        name: string;
        stock: number;
        logo?: string;
    };
    delete(id: number): boolean;
}
