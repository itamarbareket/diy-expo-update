import { Test, TestingModule } from '@nestjs/testing';
import { ManifestLambdaController } from './manifest-lambda.controller';
import { ManifestLambdaService } from './manifest-lambda.service';

describe('ManifestLambdaController', () => {
  let manifestLambdaController: ManifestLambdaController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ManifestLambdaController],
      providers: [ManifestLambdaService],
    }).compile();

    manifestLambdaController = app.get<ManifestLambdaController>(ManifestLambdaController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(manifestLambdaController.getHello()).toBe('Hello World!');
    });
  });
});
