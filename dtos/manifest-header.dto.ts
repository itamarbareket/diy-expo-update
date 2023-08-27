import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsIn, IsOptional, IsString } from 'class-validator';

export class ManifestHeaderDTO {
  @IsDefined()
  @IsIn([1, '0'])
  @Expose({ name: 'expo-protocol-version' })
  @Transform(({ value }) => parseInt(value, 10), { toClassOnly: true })
  expoProtocolVersion: number;

  @IsOptional()
  @Expose({ name: 'expo-current-update-id' })
  expoCurrentUpdateId?: string;

  @IsOptional()
  @IsString()
  @Expose({ name: 'expo-expect-signature' })
  expoExpectSignature?: string;

  @IsOptional()
  @IsString()
  @Expose({ name: 'expo-embedded-update-id' })
  expoEmbeddedUpdateId?: string;
}
