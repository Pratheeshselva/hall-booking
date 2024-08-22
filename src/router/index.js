import express from 'express'
import roomroute from './room.route.js'

const router = express.Router()

router.use('/room', roomroute )


export default router