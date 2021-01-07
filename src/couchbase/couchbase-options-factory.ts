import { CouchbaseConnectOptions } from './couchbase-connect-options'

export interface CouchbaseOptionsFactory {
    createCouchbaseConnectOptions(): Promise<CouchbaseConnectOptions> | CouchbaseConnectOptions
}
