import { Brand } from '../entitis/brand.entity';
import { CreateBrandDto, UpdateBranDto } from '../dtos/brand.dto';
export declare class BrandService {
    private counterId;
    private brand;
    findAll(): Brand[];
    findOne(id: number): Brand;
    create(payload: CreateBrandDto): {
        name: string;
        logo: string;
        id: number;
    };
    update(id: number, payload: UpdateBranDto): {
        message: string;
        newData: {
            name: string;
            logo: string;
            id: number;
        };
    };
    delete(id: number): boolean;
}
