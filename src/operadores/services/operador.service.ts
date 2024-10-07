import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ProductosService } from 'src/productos/services/productos.service';
import { Pedido } from '../entitis/pedido.entities';
import { Operador } from '../entitis/operador.entities';
import { Client } from 'pg';


@Injectable()
export class OperadorService {
    constructor(
        private readonly productService:ProductosService,
        @Inject('PG') private clientPg:Client
    ){};
    
    private operadores:Operador[] = [
        {
            id: 1,
            email: 'emai@correo.com.ar',
            password: '47801',
            role: 'admin',
        },
        {
            id: 2,
            email: 'emai2@correo.com.ar',
            password: '34859739',
            role: 'regular',
        },
        {
            id: 3,
            email: 'emai3@correo.com.ar',
            password: '1231231',
            role: 'user',
        },
    ];

    findAll(){
        return this.operadores;
    };

    findOne( id:number ){
        const operadorFound = this.operadores.find((operador) => operador.id === id);
        if(!operadorFound) {
            new NotFoundException( `El producto con el id: ${id} no existe.` )
        }
        return  operadorFound;
    }

    getOrders( id:number ):Pedido { 
        const operador = this.findOne(id);
        
        if(!operador) {
            throw new NotFoundException( `El Operador con el id: ${id} no existe.` )
        };

        return {            
            date: new Date(),
            operador, 
            products: this.productService.getAllProduct(),
        };
    };
};
