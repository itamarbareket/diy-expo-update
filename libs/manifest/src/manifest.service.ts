import { StorageService } from '@app/storage';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ManifestService {
  constructor(private readonly storageService: StorageService) {}

  async getHello(from: string): Promise<string> {
    const metadata = await this.storageService.getFileMetadata({
      key: 'unitel2.png',
    });

    return `Hello from ${JSON.stringify(metadata)} and ${from}!`;
  }
}
