import { Router } from 'express';

const router = new Router();

router.get('/', (request, response) => {
  return response.json({
    status: 'Online',
  });
});

export default router;
