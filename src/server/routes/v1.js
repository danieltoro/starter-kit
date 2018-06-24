/*
*
* *** API Routes file ***
*
* Created by Daniel Toro <d.toro@outlook.com>
*
*/

// Importing Routes files
import test from './test';

export default app => {
  app.use('/api/test', test);
};
