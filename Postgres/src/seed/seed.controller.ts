import { Controller, Get } from '@nestjs/common';
import { SeedService } from './seed.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Seed')
@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @ApiOperation({ summary: 'Cargar los datos de la semilla En este caso Productos y Operadores.' })
  @Get()
  findAll() {
    return this.seedService.findAll();
  }
}
