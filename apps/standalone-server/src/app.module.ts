import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ManifestModule } from '@app/manifest';

@Module({
  imports: [ManifestModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
