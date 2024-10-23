import { InjectRepository } from '@nestjs/typeorm';
import { Comprador } from '../entitis/comprador.entities';
import { Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCompradorDto, UpdateCompradorDto } from '../dto/comprador.dto';

@Injectable()
export class CompradorService {

    constructor(
        @InjectRepository(Comprador) private compradorRepo: Repository<Comprador>,
    ){};

    async findAll(){
        return await this.compradorRepo.find();
    };

    async findOne( id:number ){
        const compradorFound = await this.compradorRepo.findOne(id);
        if(!compradorFound) {
            new NotFoundException( `El comprador con el id: ${id} no existe.` )
        };
        return compradorFound;
    };

    async create( data:CreateCompradorDto  ){
        const newComprador = await this.compradorRepo.create(data);
        return await this.compradorRepo.save(newComprador);
    };

    async update(id: number, changes:UpdateCompradorDto ){
        const compradorFound = await this.compradorRepo.findOne(id);
        const updComp = this.compradorRepo.merge(compradorFound, changes);
        return this.compradorRepo.save(updComp);
    };

    remove(id:number){
        return this.compradorRepo.delete(id);
    };

};
