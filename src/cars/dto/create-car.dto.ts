import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCarDto {
  @IsString({ message: `the brand must be on the existing brands` })
  @IsNotEmpty()
  readonly brand: string;

  @IsString()
  @IsNotEmpty()
  readonly model: string;
}
