import { Module } from '@nestjs/common';
import { ManifestService } from './manifest.service';
import { StorageModule } from '@app/storage';

@Module({
  providers: [ManifestService],
  imports: [StorageModule],
  exports: [ManifestService],
})
export class ManifestModule {}
