import { Controller, Delete, Get, Patch, Post, Body, Param } from '@nestjs/common';
import { productDto, UpdateProductDto } from 'src/productos/dto/products.dto';
import { ProductosService } from 'src/productos/services/productos.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Productos')
@Controller('/productos')
export class ProductosController {
    constructor( private productosService:ProductosService ){}

    @ApiOperation({ summary: 'Obtener lista de productos.' })
    @Get()
    findAll(){
        return this.productosService.getAllProduct();
    };

    @ApiOperation({ summary: 'Obtener un producto por ID.' })
    @Get('/:id')
    findOne( @Param('id') id:number ){
        return this.productosService.getProductById(id);
    };

    @ApiOperation({ summary: 'Crear un producto.' })
    @Post()
    createProduct( @Body() product: productDto ){
        
        console.log(product);
        return this.productosService.createPorduct( product );
    };

    @ApiOperation({ summary: 'Actualizar un producto.' })
    @Patch(':id')
    updateProduct( @Param('id') id:number, @Body() updateFields: UpdateProductDto ){
        return this.productosService.updateProduct(id, updateFields );
    };

    @ApiOperation({ summary: 'Borrar un producto.' })
    @Delete(':id')
    deleteProduct( @Param('id') id:number ){
        this.productosService.deleteProduct(id);
    };


}
