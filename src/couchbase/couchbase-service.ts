import { Inject, Injectable } from '@nestjs/common';
import { Ottoman } from 'ottoman';
import { COUCHBASE_CONNECT_OPTIONS } from '../consts';

interface ICouchbaseService {
  connect(): Promise<any>;
}

@Injectable()
export class CouchbaseService implements ICouchbaseService {
  private couchbaseClient;

  constructor(
    @Inject(COUCHBASE_CONNECT_OPTIONS) private couchbaseConnectOptions,
  ) {}

  async connect(): Promise<any> {
    if (!this.couchbaseClient) {
      const ottoman = new Ottoman();
      this.couchbaseClient = await ottoman.connect(
        this.couchbaseConnectOptions,
      );
    }
    return this.couchbaseClient;
  }
}
