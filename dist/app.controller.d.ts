import { AppService } from './app.service';
import { DemoService } from './demo.service';
export declare class AppController {
    private readonly appService;
    private readonly demoService;
    constructor(appService: AppService, demoService: DemoService);
    getHello(): string;
    test(): string;
    test2(): string;
    test3(): Promise<any>;
}
