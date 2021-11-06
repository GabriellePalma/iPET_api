import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';
import { ServicoModule } from './servico/servico.module';

@Module({
  imports: [
    AuthModule,
    ServicoModule
  ],
=======

@Module({
  imports: [],
>>>>>>> 8c933c92aa55237d2eb12225b1e404f3eeee9bdb
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
