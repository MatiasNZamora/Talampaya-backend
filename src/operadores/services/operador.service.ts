import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ProductosService } from 'src/productos/services/productos.service';

import { Pedido } from '../entitis/pedido.entities';
import { Client } from 'pg';

import { InjectRepository } from '@nestjs/typeorm';
import { Operador } from '../entitis/operador.entities';
import { Repository } from 'typeorm';
import { CreateOperadorDto, UpdateOperadorDto } from '../dto/operadores.dto';
import { CompradorService } from './comprador.service';


@Injectable()
export class OperadorService {
    constructor(
        private readonly productService:ProductosService,
        @Inject('PG') private clientPg:Client,
        @InjectRepository(Operador) private operadorRepo: Repository<Operador>,
        private compradorService: CompradorService,
    ){};

    async findAll(){
        return await this.operadorRepo.find({
            relations: ['comprador'],
        });
    };

    async findOne( id:number ){
        const operadorFound = await this.operadorRepo.findOne(id, {
            relations: ['comprador'],
        });
        if(!operadorFound) {
            new NotFoundException( `El producto con el id: ${id} no existe.` )
        }
        return  operadorFound;
    };

    async create( data:CreateOperadorDto  ){
        const newOperador = await this.operadorRepo.create(data);
        if(data.compradorId){
            const comprador = await this.compradorService.findOne(data.compradorId);
            newOperador.comprador = comprador;
        };
        return await this.operadorRepo.save(newOperador);
    };

    async update(id: number, changes:UpdateOperadorDto ){
        const operadorFound = await this.operadorRepo.findOne(id);
        const updOperad = this.operadorRepo.merge(operadorFound, changes);
        return this.operadorRepo.save(updOperad);
    };

    remove(id:number){
        return this.operadorRepo.delete(id);
    };


    async getOrders( id:number ) { 
        const operador = this.findOne(id);
        
        if(!operador) {
            throw new NotFoundException( `El Operador con el id: ${id} no existe.` )
        };

        return {            
            date: new Date(),
            operador, 
            products: await this.productService.getAllProduct(),
        };
    };
};

//TODO: mejorar la validacion de existencia del usuario.