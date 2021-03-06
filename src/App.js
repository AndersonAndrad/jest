import express from 'express';
import cors from 'cors';

import routes from './routes';

class App {
  constructor() {
    this.server = express();

    this.middleware();
    this.router();
  }

  middleware() {
    this.server.use(express.json());
  }

  router() {
    this.server.use(routes);
  }
}

export default new App();
