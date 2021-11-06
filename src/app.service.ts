import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getObject(): any{
    let objeto = {
      id: 1,
<<<<<<< HEAD
      nome: "Gabi"
=======
      nome: "Leandro"
>>>>>>> 8c933c92aa55237d2eb12225b1e404f3eeee9bdb
    }
    return objeto
  }
}
