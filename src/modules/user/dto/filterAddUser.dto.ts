import {IsString, IsInt, IsEmail, IsNotEmpty} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class FilterAddUserDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  username: string;

  @IsString()
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  password: string;
}
