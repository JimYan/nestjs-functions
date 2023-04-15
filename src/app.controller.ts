import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DemoService } from './demo.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly demoService: DemoService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/test')
  test(): string {
    return 'test url';
  }

  @Get('/test2')
  test2(): string {
    return 'test url2';
  }

  @Get('/test3')
  async test3() {
    const info = await this.demoService.DemoServiceStub.FindAccount({
      source: '1',
      id: 2,
    }).toPromise();
    console.log(info);
    return info;
  }
}
