import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getJson()  {
    return this.appService.getJson();
  }

  @Get('/getBydate')
  getByPrimeDate()  {
    return this.appService.getByPrimeDate();
  }
}
