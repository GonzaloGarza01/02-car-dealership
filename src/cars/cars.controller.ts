import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {
  constructor(
    private readonly carsService: CarsService
  ) {}

  //Metodo GET, al hacer la petición es lo primero que busca
  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  //Metodo GET para cuando la petición tenga adicionalmente /id
  //Los parametros que reciba en la url siempre son de tipo string, si es necesario se deben cambiar
  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    console.log({id});
    return this.carsService.findById(id);
  }

  //Crear un recurso
  @Post()
  createCar( @Body() createCarDto: CreateCarDto ){
    return this.carsService.create(createCarDto);
  }

  //Actualizar un recurso
  @Patch(':id')
  updateCar( 
    @Param('id', ParseUUIDPipe ) id: string, 
    @Body() updateCarDto: UpdateCarDto ) 
  {
    return this.carsService.update( id, updateCarDto );
  }

  //Borar un recurso
  @Delete(':id')
  deleteCar( @Param('id', ParseUUIDPipe) id: string ){
    return this.carsService.delete(id);
  }
}
