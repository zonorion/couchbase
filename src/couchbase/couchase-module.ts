import { DynamicModule, Global, Module, Provider } from '@nestjs/common';
import { COUCHBASE_CONNECTION, COUCHBASE_CONNECT_OPTIONS } from '../consts';
import { CouchbaseConnectAsyncOptions } from './couchbase-async-options';
import { CouchbaseConnectOptions } from './couchbase-connect-options';
import { CouchbaseOptionsFactory } from './couchbase-options-factory';
import { CouchbaseService } from './couchbase-service';

export const connectionFactory = {
  provide: COUCHBASE_CONNECTION,
  useFactory: async (couchbaseService) => couchbaseService.connect(),
  inject: [CouchbaseService],
};

@Global()
@Module({})
export class CouchbaseModule {
  public static register(
    connectOptions: CouchbaseConnectOptions,
  ): DynamicModule {
    return {
      module: CouchbaseModule,
      providers: [
        {
          provide: COUCHBASE_CONNECT_OPTIONS,
          useValue: connectOptions,
        },
        connectionFactory,
        CouchbaseService,
      ],
      exports: [CouchbaseService, connectionFactory],
    };
  }

  public static registerAsync(
    connectOptions: CouchbaseConnectAsyncOptions,
  ): DynamicModule {
    const allImports = [...new Set([].concat(connectOptions.imports))];
    return {
      module: CouchbaseModule,
      imports: connectOptions.imports || [],
      providers: [
        this.createConnectAsyncProviders(connectOptions),
        connectionFactory,
        CouchbaseService,
      ],
      exports: [CouchbaseService, connectionFactory],
    };
  }

  private static createConnectAsyncProviders(
    options: CouchbaseConnectAsyncOptions,
  ): Provider {
    if (options.useFactory) {
      return {
        provide: COUCHBASE_CONNECT_OPTIONS,
        useFactory: options.useFactory,
        inject: options.inject || [],
      };
    }
    // For useClass and useExisting...
    return {
      provide: COUCHBASE_CONNECT_OPTIONS,
      useFactory: async (optionsFactory: CouchbaseOptionsFactory) =>
        await optionsFactory.createCouchbaseConnectOptions(),
      inject: [options.useExisting || options.useClass],
    };
  }
}
