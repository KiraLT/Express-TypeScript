import { Router } from 'express'

export function getHelloRouter(): Router {
    return Router().get('/', async (_req, res) => {
        res.json({
            message: 'Hello world',
        })
    })
}