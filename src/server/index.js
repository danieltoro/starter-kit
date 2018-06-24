/*
*
* *** Server Setup ***
*
* Created by Daniel Toro <d.toro@outlook.com>
*
*/

// NPM Dependencies
import express from 'express';
import chalk from 'chalk';
// import open from 'open';
import morgan from 'morgan';
// import path from 'path';

// Import API Routes file
import api from './routes/v1';

// Express instance
const app = express();

const PORT = 3000;

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// API Middleware
api(app);

// Static files

// Starting the Server
app.listen(PORT, err => {
  if (!err) {
    console.log(
      chalk.blue.bold(`
      Yep, it's working! 🍺
      ------------
      Server running on port: ${PORT}
      ------------
      Env: ${process.env.NODE_ENV}
      `),
    );
    // open(`http://localhost:${PORT}`);
  } else {
    console.log(
      chalk.red(`
      Cannot run! 😱
      ---
      Error: ${err}
      `),
    );
  }
});
