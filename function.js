/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.createNestServer = void 0;
const core_1 = require('@nestjs/core');
const platform_express_1 = require('@nestjs/platform-express');
const app_module_1 = require('./dist/app.module');
const express = require('express');
const server = express();
const createNestServer = async (expressInstance) => {
  const app = await core_1.NestFactory.create(
    app_module_1.AppModule,
    new platform_express_1.ExpressAdapter(expressInstance),
  );
  return app.init();
};
exports.createNestServer = createNestServer;
(0, exports.createNestServer)(server)
  .then((v) => console.log('Nest Ready'))
  .catch((err) => console.error('Nest broken', err));
exports.myfunction = server;
//# sourceMappingURL=index.js.map
