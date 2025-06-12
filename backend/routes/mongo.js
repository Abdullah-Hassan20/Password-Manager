import express from 'express';
import User from '../models/user.js';

const router = express.Router();

router.get('/mongo_data', async (req, res) => {
  try {
    const all_users = await User.find(); // fetch all users
    res.json(all_users);
  } catch (error) {
    res.json({ message: '❌ Failed to fetch users', error });
  }
});

export default router