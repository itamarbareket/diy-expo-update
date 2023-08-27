import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ManifestModule } from '@app/manifest';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ManifestModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
