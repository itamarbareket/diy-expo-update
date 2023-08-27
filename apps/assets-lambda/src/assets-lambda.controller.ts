import { Controller, Get } from '@nestjs/common';
import { AssetsLambdaService } from './assets-lambda.service';

@Controller()
export class AssetsLambdaController {
  constructor(private readonly assetsLambdaService: AssetsLambdaService) {}

  @Get()
  getHello(): string {
    return this.assetsLambdaService.getHello();
  }
}
