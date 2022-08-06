// import { PartialType } from '@nestjs/mapped-types';
// import { CreateBrandDto } from './create-brand.dto';

import { IsString, MinLength } from "class-validator";

// //Extends funciona como una extensión de una clase, se utiliza aquí porque el update es muy similar al create, con la excepción de que puede contener información parcial
// export class UpdateBrandDto extends PartialType(CreateBrandDto) {}

export class UpdateBrandDto{
    @IsString()
    @MinLength(1)
    name: string;
}