import { NestFactory } from '@nestjs/core';
import { AssetsLambdaModule } from './assets-lambda.module';
import serverlessExpress from '@vendia/serverless-express';
import { Callback, Context, Handler } from 'aws-lambda';

let server: Handler;

async function bootstrap(): Promise<Handler> {
  const app = await NestFactory.create(AssetsLambdaModule);
  await app.init();

  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessExpress({ app: expressApp });
}

const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  server = server ?? (await bootstrap());
  return server(event, context, callback);
};

export { handler };
