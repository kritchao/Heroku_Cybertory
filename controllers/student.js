const db = require('../models/index')

const getAllStudents = async (req, res) => {
    try {
        const allStudents = await db.student.findAll();
        res.status(200).send(allStudents);
    } catch (error) {
        console.log(error)
    }

}

const getStudentbyId = async (req, res) => {
    try {
        const student = await db.student.findOne({ where: { id: req.params.id } })
        res.status(200).send(student)
    } catch (error) {
        console.log(error)
    }
}

const register = async (req, res) => {
    try {
        const { firstname, lastname, email, department, subject } = req.body
        await db.student.create({
            firstname: firstname,
            lastname: lastname,
            email: email,
            department: department,
            subject: subject
        });
        res.status(201).send({ message: "register successful." })
    } catch (error) {
        console.log(error)
    }
}
const deleteStudent = async (req, res) => {
    try {
        const targetId = await db.student.findOne({where: {id:req.params.id}});
        await targetId.destroy();
        res.status(204).send();
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllStudents,
    register,
    getStudentbyId,
    deleteStudent
}