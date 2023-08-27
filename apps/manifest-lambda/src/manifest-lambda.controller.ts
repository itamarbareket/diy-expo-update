import { ManifestService } from '@app/manifest';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class ManifestLambdaController {
  constructor(private readonly manifestLambdaService: ManifestService) {}

  @Get()
  getHello(): string {
    return this.manifestLambdaService.getHello('lambda');
  }
}
