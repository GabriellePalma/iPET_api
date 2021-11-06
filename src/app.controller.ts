import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
<<<<<<< HEAD
    return this.appService.getHello()
=======
    return this.appService.getHello();
>>>>>>> 8c933c92aa55237d2eb12225b1e404f3eeee9bdb
  }

  @Get('objeto')
  getObject(): any {
    return this.appService.getObject()
<<<<<<< HEAD
    
  }

=======
  }
>>>>>>> 8c933c92aa55237d2eb12225b1e404f3eeee9bdb
}
