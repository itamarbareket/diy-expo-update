import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
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
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
