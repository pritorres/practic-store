export declare class CreateBrandDto {
    readonly name: string;
    readonly logo: string;
}
declare const UpdateBranDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateBrandDto>>;
export declare class UpdateBranDto extends UpdateBranDto_base {
}
export {};
