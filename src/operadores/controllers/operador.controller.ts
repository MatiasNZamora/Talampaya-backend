import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { OperadorService } from '../services/operador.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreateOperadorDto, UpdateOperadorDto } from '../dto/operadores.dto';

@ApiTags('Operador')
@Controller('operador')
export class OperadorController {
    
    constructor( private readonly operadorService:OperadorService ){}

    @ApiOperation({ summary: 'Obtener lista de operadores.' })
    @Get()
    findAll(){
        return this.operadorService.findAll();
    }

    @ApiOperation({ summary: 'Obtener un operador por su ID.' })
    @Get(':id')
    findOne( @Param('id', ParseIntPipe) id:number ){
        return this.operadorService.findOne(id);
    };

    @ApiOperation({ summary: 'Recibe la data y crea el nuevo Operador.' })
    @Post()
    create(@Body() data:CreateOperadorDto ){
        console.log(data);
        return this.operadorService.create( data );
    };

    @ApiOperation({ summary: 'Actualiza la informacion de un Operador.' })
    @Patch(':id')
    updateOperador(@Param('id', ParseIntPipe ) id:number, @Body() updateFields:UpdateOperadorDto ){
        return this.operadorService.update(id, updateFields);
    };

    @ApiOperation({ summary: 'Elmina un Operador.' })
    @Delete(':id')
    deleteOperador(@Param('id', ParseIntPipe) id:number){
        this.operadorService.remove(id);
    }

    @ApiOperation({ summary: 'Obtener un pedidos por id de orden.' })
    @Get(':id/pedidos')
    getOreder( @Param('id', ParseIntPipe ) id:number ){
        return this.operadorService.getOrders(id);
    };

};

//? agrege el ParseIntPipe en los que requerian el id para que en caso de enviarlo como string me lo cambie
