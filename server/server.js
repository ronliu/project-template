const express = require('express');
const path = require('path');

const app = express();

// require routers
const apiRouter = require('./routes/api.js');

// parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// route handlers
app.use('/api', apiRouter);

// unknown route handler
app.use('*', (req, res) => {
  return res.status(404).send('404 Not Found');
});

// global error handler
app.use((err, req, res, next) => {
  const defaultError = {
    log: 'Express caught an unknown middleware error',
    status: 500,
    message: 'Internal Server Error',
  };
  
  const { log, status, message } = Object.assign({}, defaultError, err);

  console.log(log);
  return res.status(status).send(message);
});

// start server
app.listen(PORT=3000, () => {
  console.log(`Server listening on port ${PORT}!`);
});

module.exports = app;