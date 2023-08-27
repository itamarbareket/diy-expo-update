import { Module } from '@nestjs/common';
import { ManifestLambdaController } from './manifest-lambda.controller';
import { ManifestModule } from '@app/manifest';

@Module({
  imports: [ManifestModule],
  controllers: [ManifestLambdaController],
  providers: [],
})
export class ManifestLambdaModule {}
