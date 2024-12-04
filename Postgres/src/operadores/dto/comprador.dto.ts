import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Length } from "class-validator";

export class CreateCompradorDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly id: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @Length(3)
    readonly nombre: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly apellido: string;
    
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly telefono: string;

};

export class UpdateCompradorDto extends PartialType(CreateCompradorDto){};