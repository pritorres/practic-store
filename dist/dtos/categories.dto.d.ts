export declare class CreateCategorie {
    name: string;
    stock: number;
    logo: string;
}
declare const UpdateCategories_base: import("@nestjs/mapped-types").MappedType<Partial<CreateCategorie>>;
export declare class UpdateCategories extends UpdateCategories_base {
}
export {};
