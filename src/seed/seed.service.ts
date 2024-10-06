import { Injectable } from '@nestjs/common';
import { PRODUCT_SEED } from './data/product.seed';
import { ProductosService } from 'src/productos/services/productos.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly productService:ProductosService
  ){}

  findAll() {
    this.productService.fillProductWhitSeedData(PRODUCT_SEED);
    return ` seed execute `;
  }
}
