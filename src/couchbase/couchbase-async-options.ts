import { ModuleMetadata, Type } from '@nestjs/common'
import { CouchbaseConnectOptions } from './couchbase-connect-options'
import { CouchbaseOptionsFactory } from './couchbase-options-factory'

export interface CouchbaseConnectAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
    inject?: any[]
    useExisting?: Type<CouchbaseOptionsFactory>
    useClass?: Type<CouchbaseOptionsFactory>
    useFactory?: (...args: any[]) => Promise<CouchbaseConnectOptions> | CouchbaseConnectOptions
}
