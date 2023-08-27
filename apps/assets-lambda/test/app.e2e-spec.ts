import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AssetsLambdaModule } from '../src/assets-lambda.module';

describe('AssetsLambdaController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AssetsLambdaModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request
      .default(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
