import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('index')
@Controller()
export class AppController {
  constructor( private readonly appService: AppService ) {}

  @ApiOperation({ summary: 'Index de la aplicación' })
  @Get()
  getHello(): string {
    return this.appService.getHello();
  };

  @Get()
  getUseFactory(){
    return this.appService.getUseFactory();
  };

};