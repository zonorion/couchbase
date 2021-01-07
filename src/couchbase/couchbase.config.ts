import { registerAs } from '@nestjs/config'

export default registerAs('couchbase', () => ({
    connectionString: process.env.CB_ENDPOINT,
    username: process.env.CB_USER,
    password: process.env.CB_PASSWORD,
    bucketName: process.env.CB_BUCKET,
}))
