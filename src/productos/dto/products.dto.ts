import { IsString, IsNotEmpty, MinLength, IsOctal, IsNumber } from 'class-validator';
import { ApiProperty, PartialType, OmitType } from '@nestjs/swagger';

export class productDto {
    // Swagger
    @ApiProperty({description: 'Nombre del producto'})
    
    // Class validator
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    nombre: string;

    @ApiProperty({description: 'Detalles del producto'})

    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    description: string;

    @ApiProperty({description: 'Precio producto'})

    @IsNumber()
    @IsNotEmpty()
    precio:number;
    
    @ApiProperty({description: 'Cantidades disponibles producto'})

    @IsNumber()
    @IsNotEmpty()
    stock:number;

    @ApiProperty({description: 'Origen del producto'})

    @IsString()
    @IsNotEmpty()
    origen:string;

    @ApiProperty({description: 'Imagen detallada del producto'})

    @IsString()
    @IsNotEmpty()
    image: string;

};

export class UpdateAuthorDto extends PartialType(
    OmitType(productDto, ['nombre']),
) {};

export class UpdateProductDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    nombre?: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    description?: string;

    @IsNumber()
    @IsNotEmpty()
    precio?:number;
    
    @IsNumber()
    @IsNotEmpty()
    stock?:number;

    @IsString()
    @IsNotEmpty()
    origen?:string;

    @IsString()
    @IsNotEmpty()
    @IsOctal()
    image?: string;
    
};