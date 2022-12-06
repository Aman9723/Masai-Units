const { Router } = require('express');
const studentRouter = Router();

studentRouter.get('/', async (req: Request, res: Response) => {
    const studentList = await StudentModel.find();
    return res.send(studentList);
});

studentRouter.post('/:id', async (req, res) => {
    const { name, age, studentcode } = req.body;
    const { message } = await createStudent({ name, age, studentcode });
    if (message != 'OK') {
        return res.send('Student creaation failed');
    }
    return res.send('student creation successfully');
});

studentRouter.patch('/:id', () => {});

studentRouter.put('/:id', () => {});

studentRouter.delete('/:id', () => {});

studentRouter.get('/:id', () => {});

studentRouter.get('/byage/', () => {});

module.exports = Router;
