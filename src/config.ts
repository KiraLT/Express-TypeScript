import { promisify } from 'util'
import { readFile } from 'fs'

import { merge } from './helpers/object'

export class ConfigError extends Error {}

export interface Config {
    environment: 'production' | 'development'
    trustProxy: boolean
    host: string
    port: number
}

export const defaultConfig: Config = {
    environment: 'production',
    trustProxy: false,
    host: '0.0.0.0',
    port: 3000
}

export async function readConfig(path: string | undefined): Promise<Config> {
    try {
        return merge(
            defaultConfig,
            path ? JSON.parse(await promisify(readFile)(path, { encoding: 'utf8' })) : {}
        )
    } catch (err) {
        throw new ConfigError(`Configuration error: ${err}`)
    }
}
