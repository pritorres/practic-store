export declare class CreateCustomerDto {
    readonly name: string;
    readonly gender: string;
    readonly ID: number;
    readonly age: number;
}
declare const UpdateCustomerDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateCustomerDto>>;
export declare class UpdateCustomerDto extends UpdateCustomerDto_base {
}
export {};
