import Express from 'express';
import questionRouter from './api-routes/questionRoutes';
import Morgan from 'morgan';
import basicErrorMiddleware from './middlewares/basicErrorMiddleware';
import mongooseErrorsMiddleware from './middlewares/mongooseErrorsMiddleware';
import cors from 'cors';
import { Server } from 'http';
import io from 'socket.io';

const app: Express.Application = Express();
const port = 8080 || process.env.PORT;
const http = new Server(app);

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(Morgan('tiny'));
app.use(cors())

app.use('/questions', questionRouter);
app.use(mongooseErrorsMiddleware);
app.use(basicErrorMiddleware);

io.listen(http);

http.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

io(http).on("connection", socket => {
  socket.on('lockEditForQuestion', id => {
    socket.broadcast.emit('sendLockedId', id);
  });

  socket.on('unlockEditForQuestion', id => {
    socket.broadcast.emit('sendUnlockedId', id);
  });
});