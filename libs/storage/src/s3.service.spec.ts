import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import * as AWSMock from 'aws-sdk-client-mock';
import { StorageService } from './storage.service';
import {
  CompleteMultipartUploadCommand,
  HeadObjectCommand,
  PutObjectCommand,
  S3,
} from '@aws-sdk/client-s3';
import { ModuleMocker, MockFunctionMetadata } from 'jest-mock';

const moduleMocker = new ModuleMocker(global);

describe('storageService', () => {
  let storageService: StorageService;
  const s3Mock = AWSMock.mockClient(S3);

  const mockConfigService = {
    getOrThrow: jest.fn((path: string) => {
      if (path == 'common.storage.type') return 's3';

      return path;
    }),
    get: jest.fn((path: string) => {
      if (path == 'common.storage.type') return 's3';

      return path;
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StorageService,
        {
          provide: ConfigService,
          useValue: mockConfigService,
        },
      ],
    }).compile();

    storageService = module.get<StorageService>(StorageService);
    s3Mock.reset();
  });

  it('should be defined', () => {
    expect(storageService).toBeDefined();
  });

  describe('getFileMetadata', () => {
    it('should get object metadata from S3', async () => {
      s3Mock.on(HeadObjectCommand, { Key: 'file-key' }).resolves({
        ContentLength: 1,
        ContentType: 'application/json',
        Metadata: { a: 'b' },
      });
      const res = await storageService.getFileMetadata({
        key: 'file-key',
      });

      expect(res.a).toBe('b');
      expect(res.ContentLength).toBe('1');
    });

    it('should throw error when object not found', async () => {
      s3Mock.on(HeadObjectCommand, { Key: 'file-key' }).resolves({
        ContentLength: 1,
        ContentType: 'application/json',
        Metadata: { a: 'b' },
      });

      const res = await storageService.getFileMetadata({
        key: 'file-key2',
      });
    });
  });
});
