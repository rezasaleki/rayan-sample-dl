import { Controller, Get, Inject } from '@nestjs/common';

@Controller('')
export class ProjectController {
  private readonly configFactory: any;
  constructor(@Inject('CONFIG') configFactory: any) {
    this.configFactory = configFactory;
  }

  @Get('useFactory')
  async useExisting() {
    return this.configFactory;
  }
}
