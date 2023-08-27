import { Readable } from 'stream';
import {
  GetFileContentsRequest,
  GetFileMetadataRequest,
  PutFileRequest,
  StorageInterface,
} from './storage.interface';
import { ConfigService } from '@nestjs/config';

export class S3Interface implements StorageInterface {
  constructor(private config: ConfigService) {}
  putFile(params: PutFileRequest): Promise<void> {
    throw new Error('Method not implemented.');
  }
  getFileMetadata(
    params: GetFileMetadataRequest,
  ): Promise<Record<string, string>> {
    throw new Error('Method not implemented.');
  }
  getFileContents(params: GetFileContentsRequest): Promise<Readable> {
    throw new Error('Method not implemented.');
  }
}
