import { Readable } from 'stream';

export interface PutFileRequest {
  key: string;
  metadata: Record<string, string>;
  body: string | Uint8Array | Buffer | Readable;
}

export interface GetFileMetadataRequest {
  key: string;
}

export interface GetFileContentsRequest {
  key: string;
}

export interface StorageInterface {
  putFile(params: PutFileRequest): Promise<void>;
  getFileMetadata(
    params: GetFileMetadataRequest,
  ): Promise<Record<string, string>>;
  getFileContents(params: GetFileContentsRequest): Promise<Readable>;
}
