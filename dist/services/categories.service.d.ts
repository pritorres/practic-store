import { Categories } from '../entitis/categories.entity';
import { CreateCategorie, UpdateCategories } from '../dtos/categories.dto';
export declare class CategoriesService {
    private counterId;
    private categories;
    findAll(): Categories[];
    findOne(id: number): Categories;
    create(payload: CreateCategorie): {
        name: string;
        stock: number;
        logo: string;
        id: number;
    };
    update(id: number, payload: UpdateCategories): {
        id: number;
        name: string;
        stock: number;
        logo?: string;
    };
    delete(id: number): boolean;
}
