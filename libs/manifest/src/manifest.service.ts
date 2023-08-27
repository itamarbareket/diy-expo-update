import { Injectable } from '@nestjs/common';

@Injectable()
export class ManifestService {
  getHello(from: string): string {
    return `Hello from ${from}!`;
  }
}
