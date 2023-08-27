import { Module } from '@nestjs/common';
import { ManifestLambdaController } from './manifest-lambda.controller';
import { ManifestModule } from '@app/manifest';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ManifestModule,
  ],
  controllers: [ManifestLambdaController],
  providers: [],
})
export class ManifestLambdaModule {}
