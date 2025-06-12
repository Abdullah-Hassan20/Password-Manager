import express from 'express';
import createUser from './form.js';
import getUsers from './mongo.js';
import deleteUser from './delete.js';
import updateUser from './update.js';

const router = express.Router();

router.use(createUser);
router.use(getUsers);
router.use(deleteUser);
router.use(updateUser);

export default router;
