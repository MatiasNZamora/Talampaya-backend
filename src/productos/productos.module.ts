import { Module } from '@nestjs/common';
import { FabricantesController } from './controllers/fabricantes.controller';
import { ProductosController } from './controllers/productos.controller';
import { ProductosService } from './services/productos.service';
import { FabricantesService } from './services/fabricantes.service';

@Module({
    controllers: [ FabricantesController, ProductosController],
    providers: [ProductosService, FabricantesService ],
    exports:[ProductosService]
})
export class ProductosModule {
    
};
