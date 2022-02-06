const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

// middleware

app.use(express.json());

// routes
app.get('/hello', (req, res) => {
  res.send('Task Manager App');
});

app.use('/api/v1/tasks', tasks);

// app.get('/api/v1/tasks')      // 모든 tasks를 get
// app.post('/api/v1/tasks')     // 새로운 task를 만듦
// app.get('/api/v1/tasks/:id')  // task 하나만 get
// app.patch('/api/v1/tasks/:id')  // update task
// app.delete('/api/v1/tasks/:id') // delete task

const port = 3000;

app.listen(port, console.log(`server is listening on port ${port}...`));
