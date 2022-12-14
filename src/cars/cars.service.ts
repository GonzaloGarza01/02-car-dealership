import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid'
import { CreateCarDto, UpdateCarDto } from './dto/index';

@Injectable()
export class CarsService {

  private cars: Car[] = [
    // {
    //   id: uuid(),
    //   brand: 'Toyota',
    //   model: 'Corolla',
    // },
    // {
    //   id: uuid(),
    //   brand: 'Honda',
    //   model: 'Civic',
    // },
    // {
    //   id: uuid(),
    //   brand: 'Jeep',
    //   model: 'Cherokee',
    // },
  ];

  findAll(){
    return this.cars;
  }
  
  findById( id: string ){
    const car = this.cars.find( car => car.id === id);
    if( !car ){
      throw new NotFoundException(`Car with id ${id} not found`);
    }
    return car;
  }

  create( createCarDto: CreateCarDto){
    // const car: Car = {
    //   id: uuid(),
    //   brand: createCarDto.brand,
    //   model: createCarDto.model,
    // }
    const car : Car = {
      id: uuid(),
      ...createCarDto //operador spread
    }
    this.cars.push( car );
    return car
  }

  update( id:string, updateCarDto: UpdateCarDto ){
    let carDB = this.findById(id);

    if( updateCarDto.id && updateCarDto.id !== id )
      throw new BadRequestException(`Car id is not valid inside body`);
            
    this.cars = this.cars.map( car =>{
      if (car.id === id){
        carDB = { ...carDB, ...updateCarDto, id,}
        return carDB;
      }
      
      return car;
    })

    return carDB;
  }

  delete( id: string){
    const car = this.findById(id);
    this.cars = this.cars.filter( car => car.id !== id); //Regresa todos los carros cuyo ID sea diferente al que trajo el metodo
    return;
  }
  
  fillCarsWithSeedData( cars: Car[]){
    this.cars = cars;
  }

}
