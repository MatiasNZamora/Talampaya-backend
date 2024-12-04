import { Injectable, NotFoundException } from '@nestjs/common';
import { productDto, UpdateProductDto } from 'src/productos/dto/products.dto';
import { Producto } from 'src/productos/entitis/producto.entities';
// import { v4 as uuid } from 'uuid';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductosService { 
    constructor(
        @InjectRepository(Producto) private productRepo:Repository<Producto>
    ){}

    getAllProduct(){
        return this.productRepo.find();
    };

    getProductById( id:number ) {
        const productFound = this.productRepo.findOne({id});
        
        if(!productFound) {
            return new NotFoundException( `El producto con el id: ${id} no existe.` )
        };

        return productFound;
    };
    
    createPorduct( data:productDto ){
        const newPorduct = this.productRepo.create(data);
        return this.productRepo.save(newPorduct);
    };

    async updateProduct( id:number, updateFinelds: UpdateProductDto ){
        // const product = this.getProductById(id); // busco el producto
        // const update = Object.assign( product, updateFinelds ); // remplazo los valores de los productos por los que ingresan en el "uploads"
        // this.products.map( product => product.id === id ? update : product ); //con el ternario evaluo el id y remplazo valores de ser correcto.
        
        const product = await this.productRepo.findOne({id})
        this.productRepo.merge(product, updateFinelds); // combino el producto con los campos actualizados.
        return this.productRepo.save(product);
    };

    deleteProduct( id:number ){
        if(!id) {
            return new NotFoundException(`El producto con el id: ${id} no existe.`)
        }
        return this.productRepo.delete({id});
    };

    fillProductWhitSeedData( products:Producto[] ){
        // this.products = products;
        // this.productRepo.save(products)
    };

};
