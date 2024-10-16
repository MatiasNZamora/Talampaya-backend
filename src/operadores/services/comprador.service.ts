import { InjectRepository } from '@nestjs/typeorm';
import { Comprador } from '../entitis/comprador.entities';
import { Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CompradorService {

    constructor(
        @InjectRepository(Comprador) private compradorRepo: Repository<Comprador>,
    ){};

    async finAll(){
        return await this.compradorRepo.find();
    };

    async findOne( id:number ){
        const compradorFound = await this.compradorRepo.findOne(id);
        if(!compradorFound) {
            new NotFoundException( `El comprador con el id: ${id} no existe.` )
        };
        return compradorFound;
    };

    //TODO: AGREGAR CreateCompradorDto
    async create( data  ){
        const newComprador = await this.compradorRepo.create(data);
        return await this.compradorRepo.save(newComprador);
    };

    //TODO: AGREGAR UpdateCompradorDto

    async update(id: number, changes ){
        const compradorFound = await this.compradorRepo.findOne(id);
        const updComp = this.compradorRepo.merge(compradorFound, changes);
        return this.compradorRepo.save(updComp);
    };

    remove(id:number){
        return this.compradorRepo.delete(id);
    };



};
