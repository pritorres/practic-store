export declare class CreateProductDto {
    readonly name: string;
    readonly description: string;
    readonly image: string;
    readonly stock: number;
    readonly price: number;
}
declare const UpdateProductDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateProductDto>>;
export declare class UpdateProductDto extends UpdateProductDto_base {
}
export {};
