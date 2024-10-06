import { Module } from '@nestjs/common';
import { PedidosController } from './controllers/pedidos.controller';
import { CompradorController } from './controllers/comprador.controller';
import { CompradorService } from './services/comprador.service';
import { PedidosService } from './services/pedidos.service';
import { OperadorService } from './services/operador.service';
import { OperadorController } from './controllers/operador.controller';
import { ProductosModule } from 'src/productos/productos.module';

@Module({
    controllers: [PedidosController, CompradorController, OperadorController],
    providers: [CompradorService, PedidosService, OperadorService],
    imports:[ProductosModule]
})
export class OperadoresModule {}
