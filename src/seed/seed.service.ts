import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
import { BRAND_SEED } from './data/brands.seed';
import { CARS_SEED } from './data/cars.seed';

//Las seed funcionan como una manera de asegurarse que la data sea cargada, también sirve como un backup si es que la información fue perdida
@Injectable()
export class SeedService {

  constructor(
    private readonly carsService: CarsService,
    private readonly brandService: BrandsService
  ){}


  populateDB(){
    // CARS_SEED
    // BRAND_SEED
    this.carsService.fillCarsWithSeedData(CARS_SEED);
    this.brandService.fillBrandWithSeedData(BRAND_SEED);
    return 'Seed ejecutada correctamente'
  }
}
