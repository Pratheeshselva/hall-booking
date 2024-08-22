import express from 'express'
import roomController from '../controller/room.controller.js'

const router = express.Router()


router.post('/createroom', roomController.createroom)
router.post('/bookroom', roomController.bookroom)
router.get('/roombookingdetails', roomController.roombookingdetails)
router.get('/customerbookingdetails', roomController.customerbookingdetails)
router.get('/customerbookfrequency', roomController.customerbookfrequency)

export default router