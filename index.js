const functions = require('@google-cloud/functions-framework');
const { server } = require('./dist/gcf');

functions.http('helloWorld', server);
