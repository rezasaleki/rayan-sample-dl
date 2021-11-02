import { Controller, Get, Inject } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";

@Controller('')
export class LoggerController {
  private readonly aliasedLoggerService: any;
  constructor(@Inject('AliasedLoggerService') aliasedLoggerService: any) {
    console.log('useExisting => Logger controller constructor:');
    this.aliasedLoggerService = aliasedLoggerService;
  }
  @ApiTags('Logger')
  @Get('useExisting')
  async useExisting() {
    console.log('useFactory => Project controller constructor:');
    return this.aliasedLoggerService;
  }
}
