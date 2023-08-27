import { Injectable } from '@nestjs/common';

@Injectable()
export class AssetsLambdaService {
  getHello(): string {
    return 'Hello World!';
  }
}
