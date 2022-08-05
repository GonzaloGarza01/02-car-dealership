import { IsString } from "class-validator";

//Los Dto son como se espera mover la data en la aplicación
export class CreateCarDto{
    
    @IsString()
    readonly brand: string;

    @IsString()
    readonly model: string;

}