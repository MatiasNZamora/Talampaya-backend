import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Length } from "class-validator";

//TODO: Completar los DTO
export class CreateCompradorDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    id: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @Length(6)
    nombre: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    apellido: string;
    
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    telefono: string;

};

export class UpdateCompradorDto extends PartialType(CreateCompradorDto){};