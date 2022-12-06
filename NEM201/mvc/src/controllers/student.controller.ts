const StudentModel = require('../models/student.model');

async function createStudent({ name, age, studentcode }) {
    const student = new StudentModel({ name, age, studentcode });
    if (age > 28) {
        return { msg: 'NOT OK', desc: 'student above age 28 are not allowed' };
    }
    await student.save();
    return {
        message: 'OK',
        desc: 'student created successfully',
    };
}

module.exports = { createStudent };
