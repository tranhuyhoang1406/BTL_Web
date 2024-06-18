const express=require("express")
const router=express.Router()
const courseController=require('../app/controllers/CourseController')

router.get('/create', courseController.show)
router.post('/store', courseController.store)
router.get('/:slug', courseController.index)

module.exports=router
