import { Test, TestingModule } from '@nestjs/testing';
import { AssetsLambdaController } from './assets-lambda.controller';
import { AssetsLambdaService } from './assets-lambda.service';

describe('AssetsLambdaController', () => {
  let assetsLambdaController: AssetsLambdaController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AssetsLambdaController],
      providers: [AssetsLambdaService],
    }).compile();

    assetsLambdaController = app.get<AssetsLambdaController>(AssetsLambdaController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(assetsLambdaController.getHello()).toBe('Hello World!');
    });
  });
});
