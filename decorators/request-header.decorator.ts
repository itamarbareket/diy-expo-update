// import { createParamDecorator, ExecutionContext } from '@nestjs/common';
// import { ClassConstructor, plainToInstance } from 'class-transformer';
// import { validateOrReject } from 'class-validator';

// export const RequestHeader = createParamDecorator(
//   async (value: ClassConstructor<any>, ctx: ExecutionContext) => {
//     // extract headers
//     const headers = ctx.switchToHttp().getRequest().headers;

//     // Convert headers to DTO object
//     const dto = plainToInstance(value, headers, {
//       excludeExtraneousValues: true,
//     });

//     // Validate
//     await validateOrReject(dto);

//     // return header dto object
//     return dto;
//   },
// );
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const RequestHeader = createParamDecorator(
  async (property: string | number | symbol, ctx: ExecutionContext) => {
    const headers = ctx.switchToHttp().getRequest().headers;

    if (
      typeof property === 'string' ||
      typeof property === 'number' ||
      typeof property === 'symbol'
    ) {
      return headers[property];
    }

    return headers;
  },
);
