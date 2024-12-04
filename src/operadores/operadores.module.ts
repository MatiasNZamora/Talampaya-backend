import { Module } from '@nestjs/common';

import { PedidosController } from './controllers/pedidos.controller';
import { PedidosService } from './services/pedidos.service';

import { CompradorController } from './controllers/comprador.controller';
import { CompradorService } from './services/comprador.service';

import { OperadorController } from './controllers/operador.controller';
import { OperadorService } from './services/operador.service';

import { ProductosModule } from 'src/productos/productos.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Comprador } from './entitis/comprador.entities';
import { Operador } from './entitis/operador.entities';

@Module({
    imports:[ProductosModule, TypeOrmModule.forFeature([Operador, Comprador])],
    controllers: [PedidosController, CompradorController, OperadorController],
    providers: [CompradorService, PedidosService, OperadorService],
})
export class OperadoresModule {}
