import { Module } from '@nestjs/common';
import { AssetsLambdaController } from './assets-lambda.controller';
import { AssetsLambdaService } from './assets-lambda.service';

@Module({
  imports: [],
  controllers: [AssetsLambdaController],
  providers: [AssetsLambdaService],
})
export class AssetsLambdaModule {}
