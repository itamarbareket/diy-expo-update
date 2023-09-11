import { Readable } from 'stream';
import {
  GetFileContentsRequest,
  GetFileMetadataRequest,
  PutFileRequest,
  StorageInterface,
} from './storage.interface';
import { ConfigService } from '@nestjs/config';
import {
  S3,
  HeadObjectCommand,
  GetObjectCommand,
  NotFound,
} from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';
import { NotFoundException } from '@nestjs/common';

export class S3Interface implements StorageInterface {
  private s3BucketName;
  private client: S3;
  constructor(config: ConfigService) {
    this.s3BucketName = config.getOrThrow<string>('common.storage.mountPoint');
    this.client = new S3({});
  }

  async putFile(params: PutFileRequest): Promise<void> {
    const upload = new Upload({
      client: this.client,
      params: {
        Bucket: this.s3BucketName,
        Key: params.key,
        Body: params.body,
        Metadata: params.metadata,
      },
    });

    const res = await upload.done();
    console.log(res);
  }
  async getFileMetadata(
    params: GetFileMetadataRequest,
  ): Promise<Record<string, string>> {
    try {
      const response = await this.client.send(
        new HeadObjectCommand({
          Key: params.key,
          Bucket: this.s3BucketName,
        }),
      );

      return {
        ContentType: response?.ContentType,
        ContentLength: response?.ContentLength.toFixed(0),
        ...response?.Metadata,
      };
    } catch (e) {
      if (e instanceof NotFound) {
        throw new NotFoundException(`Unable to find ${params.key}`);
      }

      throw e;
    }
  }

  async getFileContents(params: GetFileContentsRequest): Promise<Readable> {
    try {
      const response = await this.client.send(
        new GetObjectCommand({
          Key: params.key,
          Bucket: this.s3BucketName,
        }),
      );

      return response.Body as Readable;
    } catch (e) {
      if (e instanceof NotFound) {
        throw new NotFoundException(`Unable to find ${params.key}`);
      }

      throw e;
    }
  }
}
