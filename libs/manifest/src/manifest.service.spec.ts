import { Test, TestingModule } from '@nestjs/testing';
import { ManifestService } from './manifest.service';
import { StorageModule, StorageService } from '@app/storage';
import { ConfigModule } from '@nestjs/config';

describe('ManifestService', () => {
  let service: ManifestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ManifestService,
        {
          provide: StorageService,
          useValue: {},
        },
      ],
      imports: [ConfigModule.forRoot()],
    }).compile();

    service = module.get<ManifestService>(ManifestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
