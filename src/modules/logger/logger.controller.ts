import { Controller, Get, Inject } from '@nestjs/common';

@Controller('')
export class LoggerController {
  private readonly aliasedLoggerService: any;
  constructor(@Inject('AliasedLoggerService') aliasedLoggerService: any) {
    this.aliasedLoggerService = aliasedLoggerService;
  }

  @Get('useExisting')
  async useExisting() {
    return this.aliasedLoggerService;
  }
}
