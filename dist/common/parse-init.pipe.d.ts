import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class ParseInitPipe implements PipeTransform {
    transform(value: string, metadata: ArgumentMetadata): string;
}
