import path from 'path'
import dotenv from 'dotenv'
import { generateApi } from 'swagger-typescript-api'

const envConfig = dotenv.config()

const outputDir = path.resolve(process.cwd(), './src/api/hulk-buster')

const env = envConfig.parsed!

/* NOTE: all fields are optional expect one of `output`, `url`, `spec` */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
generateApi({
  url: env.VITE_HULK_BUSTER_SWAGGER_URL as string,
  templates: path.resolve(__dirname, './templates'),
  name: 'Api.ts',
  output: outputDir,
  modular: false,
  axios: true,
  routeTypes: true,
  httpClientType: 'axios', // or "fetch"
  unwrapResponseData: true,
})
