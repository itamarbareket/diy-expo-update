import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsIn } from 'class-validator';

export class ManifestHeaderQueryDTO {
  @IsDefined()
  @IsIn(['ios', 'android'])
  @Expose({ name: 'expo-platform' })
  @Transform(({ obj }) => obj['expo-platform'] ?? obj['platform'])
  expoPlatform: string;

  @IsDefined()
  @Expose({ name: 'expo-runtime-version' })
  @Transform(({ obj }) => obj['expo-runtime-version'] ?? obj['runtime-version'])
  expoRuntimeVersion: string;
}
