import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

const getEnv = async () => {
  // const response = await axios.get('/비밀키요청');
  // return response.data;
}; /* 외부로부터 받은 비밀키를 process.env로 생성할 수 있음 */

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, load: [getEnv] })],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
