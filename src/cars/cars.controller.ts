import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';

@Controller('cars')
export class CarsController {
  cars: Car[] = [
    {
      id: uuid(),
      brand: 'ferrari',
      model: 'ferreri',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civi',
    },
  ];
  constructor(private readonly carsService: CarsService) {}

  @Post()
  create(@Body() createCarDto: CreateCarDto) {
    console.log(
      '🚀 ~ file: cars.controller.ts:36 ~ CarsController ~ create ~ createCarDto:',
      typeof createCarDto,
      createCarDto,
    );
    return this.carsService.create(createCarDto);
  }

  @Get()
  findAll() {
    return this.carsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDto: UpdateCarDto,
  ) {
    console.log('🚀 ~ file: cars.controller.ts:49 ~ CarsController ~ id:', id);
    return this.carsService.update(id, updateCarDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.remove(id);
  }
}
