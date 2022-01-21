import { BrandService } from '../services/brand.service';
import { CreateBrandDto, UpdateBranDto } from '../dtos/brand.dto';
export declare class BrandController {
    private brandService;
    constructor(brandService: BrandService);
    getBrand(brandId: number): import("../entitis/brand.entity").Brand;
    getAllBrand(limit: number, offset: number, brand: string): import("../entitis/brand.entity").Brand[];
    createBrand(payload: CreateBrandDto): {
        name: string;
        logo: string;
        id: number;
    };
    upDateBrand(id: number, payload: UpdateBranDto): {
        message: string;
        newData: {
            name: string;
            logo: string;
            id: number;
        };
    };
    deleteBrand(id: number): boolean;
}
