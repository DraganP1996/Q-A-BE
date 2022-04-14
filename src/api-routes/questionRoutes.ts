import express from 'express';
import QuestionsController from '../controllers/questionsCtrl';

const questionRouter = express.Router();
const { list, add, remove, edit } = QuestionsController;

// GET questions/list
questionRouter.get('/list', async(req, res, next) => {
    try {
        const result = await list();

        return res.status(200).json(result);
    } catch(err) {
        next(err)
    }
});

// PUT questions/add
questionRouter.put('/add', async(req, res, next) => {
    try {
        const result = await add(req.body);

        return res.status(200).json(result);
    } catch(err) {
        next(err)
    }
});

// DELETE questions/delete
questionRouter.delete('/delete/:id', async(req, res, next) => {
    try {
        const { id } = req.params;
        const result = await remove(id);

        return res.status(200).json(result);
    } catch(err) {
        next(err)
    }
});

// POST questions/edit
questionRouter.post('/edit', async(req, res, next) => {
    try {
        const result = await edit(req.body);

        return res.status(200).json(result);
    } catch(err) {
        next(err)
    }
});


export default questionRouter;
