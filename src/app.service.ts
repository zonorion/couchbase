import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { CouchbaseRepository } from './couchbase.repo';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(
    @Inject(CouchbaseRepository) private readonly cbRepo: CouchbaseRepository,
  ) {}
  onModuleInit() {
    setTimeout(async () => {
      this.cbRepo.test();
    }, 10000);
  }
  getHello(): string {
    return 'Hello World!';
  }

  async testCouchbase() {}
}
