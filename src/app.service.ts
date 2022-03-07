import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}
  getHello(): string {
    return this.configService.get('DATABASE_USER'); // process.env.DATABASE_USER와 동일
  }
}
