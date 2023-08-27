import { ManifestService } from '@app/manifest';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly appService: ManifestService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello('server');
  }
}
