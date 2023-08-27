import { ManifestService } from '@app/manifest';
import { Controller, Get } from '@nestjs/common';
import { RequestHeaderOrQuery } from 'decorators/request-header-query.decorator copy';
import { RequestHeader } from 'decorators/request-header.decorator';
import { ManifestHeaderQueryDTO } from 'dtos/manifest-header-query';
import { ManifestHeaderDTO } from 'dtos/manifest-header.dto';

@Controller()
export class ManifestLambdaController {
  constructor(private readonly manifestService: ManifestService) {}

  @Get('/api/manifest')
  getManifest(
    @RequestHeader()
    headers: ManifestHeaderDTO,
    @RequestHeaderOrQuery()
    headersOrQuery: ManifestHeaderQueryDTO,
  ): string {
    console.log(headers);
    console.log(headersOrQuery);
    return this.manifestService.getHello('lambda');
  }
}
