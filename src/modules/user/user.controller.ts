import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FilterAddUserDto } from './dto/filterAddUser.dto';

@Controller('')
export class UserController {
  private readonly con: any;
  constructor(@Inject('CONNECTION') connection: any) {
    console.log('useValue => User controller constructor:');
    this.con = connection;
  }

  @ApiTags('User')
  @Get('useValue')
  useValue() {
    return this.con;
  }

  @ApiTags('User')
  @Post('addUser')
  addUse(@Body() body: FilterAddUserDto) {
    return body;
  }
}
