import express, { Express } from 'express'
import cors from 'cors'
import { Logger, createLogger, transports } from 'winston'
import YAML from 'yamljs'
import { resolve } from 'path'
import swaggerUi from 'swagger-ui-express'

import { Config, readConfig } from './config'
import { getHelloRouter } from './routes/hello'

function createApp(config: Config, logger: Logger): Express {
    logger.info(`Starting app in ${config.environment} environment`)

    const app = express()
    app.use(cors())
    app.use(express.json())

    if (config.environment === 'development') {
        const swaggerDocument = YAML.load(resolve(__dirname, '../swagger.yaml'))
        app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
    }

    if (config.trustProxy) {
        logger.info('Enabling proxy support')
        app.set('trust proxy', true)
    }

    return app
}

export async function setup(configFile?: string): Promise<void> {
    const config = await readConfig(configFile)
    const logger = createLogger({
        transports: [
            new transports.Console({
                handleExceptions: true,
            })
        ]
    })
    const app = createApp(config, logger)

    app.use(getHelloRouter())

    app.listen(config.port, config.host, () => {
        logger.info(`Listening on ${config.host}:${config.port}`)

        if (config.environment === 'development') {
            logger.info(`* Website on http://127.0.0.1:${config.port}`)
            logger.info(`* Docs on http://127.0.0.1:${config.port}/api-docs`)
        }
    })
}
