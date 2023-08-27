import { Injectable, NotImplementedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3Interface } from './s3.service';
import {
  GetFileContentsRequest,
  GetFileMetadataRequest,
  PutFileRequest,
  StorageInterface,
} from './storage.interface';

@Injectable()
export class StorageService {
  private storageInterface: StorageInterface;

  constructor(private config: ConfigService) {
    const storageType = config.get<string>('common.storage.type');

    switch (storageType) {
      case 's3':
        this.storageInterface = new S3Interface(config);
        break;
      default:
        throw new NotImplementedException(
          `No storage handler for type ${storageType} implemented`,
        );
    }
  }

  putFile(params: PutFileRequest) {
    return this.storageInterface.putFile(params);
  }

  getFileMetadata(params: GetFileMetadataRequest) {
    return this.storageInterface.getFileMetadata(params);
  }

  getFileContents(params: GetFileContentsRequest) {
    return this.storageInterface.getFileContents(params);
  }
}
