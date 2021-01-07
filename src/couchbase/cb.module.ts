import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CouchbaseRepository } from '../couchbase.repo';
import { CouchbaseModule } from './couchase-module';
import couchbaseConfig from './couchbase.config';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [couchbaseConfig] }),
    CouchbaseModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => config.get('couchbase'),
    }),
  ],
  providers: [CouchbaseRepository],
  exports: [CouchbaseRepository],
})
export class CbModule {}
