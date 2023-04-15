import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import { http } from '@google-cloud/functions-framework';

const server = express();

export const createNestServer = async (expressInstance) => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );
  app.enableCors();
  return app.init();
};

createNestServer(server)
  .then((v) => {
    console.log(v);
    // if (environment.production) {
    //   console.log('🚀 Starting production server...');
    // } else {
    //   Logger.log(
    //     `🚀 Starting development server on http://localhost:${
    //       process.env.PORT || 3333
    //     }`,
    //   );
    //   v.listen(process.env.PORT || 3333);
    // }
  })
  .catch((err) => console.error('Nest broken', err));

exports.server = server;
