import { Injectable, NotFoundException } from '@nestjs/common';
import { productDto, UpdateProductDto } from 'src/productos/dto/products.dto';
import { Producto } from 'src/productos/entitis/producto.entities';
import { v4 as uuid } from 'uuid';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductosService { 
    constructor(
        @InjectRepository(Producto) private productRepo:Repository<Producto>
    ){}

    // array de productos
    private products: Producto[] = [
        {
            id:1,
            nombre: "tv",
            description: 'televisor para el hogar',
            precio: 350.000,
            stock: 20,
            origen:"china",
            image: "https://www.lg.com/ar/images/televisores/md06198536/gallery/D-02.jpg",
        },
        {
            id:2,
            nombre: "Auriculares JBL",
            description: 'Los mejores auriculares del mercado',
            precio: 150.000,
            stock: 5,
            origen:"Brasil",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfjfJxH-8F1CI07Jq7R_0_vgsbAsw76mPY1Q&s",
        },
        {
            id:3,
            nombre: "Notebook acer",
            description: 'quieres codear aqui esta tu maquina',
            precio: 1050.000,
            stock: 10,
            origen:"Taiwan",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFQ31gX73I6yPtT4YKEHH2bhbXN6QPUYoGWQ&s",
        },
    ];


    getAllProduct(){
        return this.productRepo.find();
    };

    getProductById( id:number ) {
        const productFound = this.productRepo.findOneBy({id});
        
        if(!productFound) {
            return new NotFoundException( `El producto con el id: ${id} no existe.` )
        }

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
        
        const product  = await this.productRepo.findOneBy({id})
        this.productRepo.merge(product, updateFinelds); // combino el producto con los campos actualizados.
        return this.productRepo.save(product);
    };


    deleteProduct( id:number ){
        
        if(!this.products) {
            return new NotFoundException(`El producto con el id: ${id} no existe.`)
        }
        return this.productRepo.delete({id});
    };


    fillProductWhitSeedData( products:Producto[] ){
        this.products = products;
        this.productRepo.save(products)
    };


};

