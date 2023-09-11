import { Module } from '@nestjs/common';
import { ManifestLambdaController } from './manifest-lambda.controller';
import { ManifestModule } from '@app/manifest';
import { ConfigModule } from '@nestjs/config';
import configuration from 'config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    ManifestModule,
  ],
  controllers: [ManifestLambdaController],
  providers: [],
})
export class ManifestLambdaModule {}
