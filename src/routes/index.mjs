import { Router } from 'express'
import rootRouter from './root.mjs'
import usersRouter from './users.mjs'
import articlesRouter from './articles.mjs'
import basicAuth from '../utils/basicAuth.mjs'
import errorHandler from '../utils/error.mjs'

const router = Router()

router.use('/', errorHandler, rootRouter)
router.use('/users', basicAuth, errorHandler, usersRouter)
router.use('/articles', basicAuth, errorHandler, articlesRouter)
router.use('*', (req, res) => res.status(404).end('Not found'))

export default router
