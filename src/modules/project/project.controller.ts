import { Controller, Get, Inject } from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";

@Controller('')
export class ProjectController {
  private readonly configFactory: any;
  constructor(@Inject('CONFIG') configFactory: any) {
    console.log('useFactory => Project controller constructor:');
    this.configFactory = configFactory;
  }

  @ApiTags('Project')
  @Get('useFactory')
  async useExisting() {
    return this.configFactory;
  }
}
