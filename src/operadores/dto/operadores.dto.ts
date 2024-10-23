import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString, Length } from "class-validator";

export class CreateOperadorDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly id: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @Length(6)
    readonly email: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly password: string;
    
    @ApiProperty()
    @IsNotEmpty()
    readonly rol: string;
    
    @IsOptional()
    @ApiProperty()
    @IsNotEmpty()
    readonly compradorId: number;

};

export class UpdateOperadorDto extends PartialType( CreateOperadorDto ){}