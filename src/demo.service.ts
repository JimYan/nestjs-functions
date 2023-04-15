/* eslint-disable */
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import * as grpc from '@grpc/grpc-js';
import { join } from 'path';

@Injectable()
export class DemoService implements OnModuleInit {
  public DemoServiceStub!: any;

  onModuleInit() {
    const DemoServiceClient = ClientProxyFactory.create({
      transport: Transport.GRPC,
      options: {
        package: 'demo',
        url: 'test-functions-grpc-ghri5ivvvq-df.a.run.app:443',
        // url: '127.0.0.1:8081',
        protoPath: join(__dirname, './demo.proto'),
        credentials: grpc.credentials.createSsl(),
      },
    });
    this.DemoServiceStub = DemoServiceClient.getService('DemoService');
  }
}
