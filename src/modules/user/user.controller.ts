import { Controller, Get, Inject } from '@nestjs/common';

@Controller('')
export class UserController {
  private readonly con: any;
  constructor(@Inject('CONNECTION') connection: any) {
    this.con = connection;
  }

  @Get('useValue')
  useValue() {
    return this.con;
  }
}
