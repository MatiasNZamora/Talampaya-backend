import { Module } from '@nestjs/common';
import { FabricantesController } from './controllers/fabricantes.controller';
import { ProductosController } from './controllers/productos.controller';
import { ProductosService } from './services/productos.service';
import { FabricantesService } from './services/fabricantes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './entitis/producto.entities';
import { CategoriaController } from './controllers/categoria.controller';

@Module({
    imports:[TypeOrmModule.forFeature([Producto])], // resive la entidad 
    controllers: [ FabricantesController, ProductosController, CategoriaController ],
    providers: [ProductosService, FabricantesService, FabricantesService ],
    exports:[ProductosService]
})

export class ProductosModule {};
