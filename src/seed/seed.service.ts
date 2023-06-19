import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brand.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandService: BrandsService,
  ) {}

  populateDB() {
    this.carsService.carsWithSeedData(CARS_SEED);
    this.brandService.brandWithSeedData(BRANDS_SEED);
    return `seed DONE!`;
  }
}
