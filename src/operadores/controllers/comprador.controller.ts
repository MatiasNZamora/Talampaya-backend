import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CompradorService } from '../services/comprador.service';
import { CreateCompradorDto, UpdateCompradorDto } from '../dto/comprador.dto';

@ApiTags('Comprador')
@Controller('comprador')
export class CompradorController {
    constructor( private readonly compradorService:CompradorService ){}

    @ApiOperation({ summary: 'Obtener lista de compradores.' })
    @Get()
    findAll(){
        return this.compradorService.findAll();
    }

    @ApiOperation({ summary: 'Obtener un Comprador por su ID.' })
    @Get(':id')
    findOne( @Param('id', ParseIntPipe) id:number ){
        return this.compradorService.findOne(id);
    };

    @ApiOperation({ summary: 'Recibe la data y crea el nuevo Comprador.' })
    @Post()
    create(@Body() data:CreateCompradorDto ){
        console.log(data);
        return this.compradorService.create( data );
    };

    @ApiOperation({ summary: 'Actualiza la informacion de un Comprador.' })
    @Patch(':id')
    updateOperador(@Param('id', ParseIntPipe) id:number, @Body() updateFields:UpdateCompradorDto ){
        return this.compradorService.update(id, updateFields);
    };

    @ApiOperation({ summary: 'Elmina un Comprador.' })
    @Delete(':id')
    deleteOperador(@Param('id', ParseIntPipe) id:number){
        this.compradorService.remove(id);
    };
    
};

//? agrege el ParseIntPipe en los que requerian el id para que en caso de enviarlo como string me lo cambie.