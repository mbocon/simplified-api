const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();


require('dotenv').config();

const usersRouter = require('./routes/api/users');
const budgetsRouter = require('./routes/api/budgets')


require('./config/database');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());


app.use('/api/users', usersRouter);
app.use('/api/budgets', budgetsRouter);
// app.use('/api/exercises', require('./routes/api/exercises'));
// app.use('/api/todos', require('./routes/api/todos'));
// app.use('/api/journals', require('./routes/api/journals'));

const port = process.env.PORT || 3001;
	
app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});