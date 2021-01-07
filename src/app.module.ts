import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CbModule } from './couchbase/cb.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: ['.env'] }),
    CbModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
