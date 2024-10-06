import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { OperadorService } from '../services/operador.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Operador')
@Controller('operador')
export class OperadorController {
    constructor( private readonly operadorService:OperadorService ){}

    @ApiOperation({ summary: 'Obtener lista de operadores.' })
    @Get()
    findAll(){
        return this.operadorService.findAll()
    }

    @ApiOperation({ summary: 'Obtener un operador por ID.' })
    @Get(':id')
    get( @Param('id', ParseIntPipe) id:number ){
        return this.operadorService.findOne(id);
    };

    @ApiOperation({ summary: 'Obtener un pedidos por id de orden.' })
    @Get(':id/pedidos')
    getOreder( @Param('id', ParseIntPipe ) id:number ){
        return this.operadorService.getOrders(id);
    };
};
