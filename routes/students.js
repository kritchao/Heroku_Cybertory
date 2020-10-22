const express = require('express')
const router = express.Router();
const Controller = require('../controllers/student')

router.get('/students', Controller.getAllStudents)
router.post('/register', Controller.register)
router.get('/student/:id', Controller.getStudentbyId)
router.delete('/student/:id', Controller.deleteStudent)



module.exports = router;