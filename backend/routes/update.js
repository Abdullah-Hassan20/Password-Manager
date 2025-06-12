import express from 'express';
import User from '../models/user.js';

const router = express.Router();

router.put('/update/:id', async (req, res) => {
  const appname=req.body.appname;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  try {
    const result = await User.findByIdAndUpdate(req.params.id,
      {
        appname,
        username,
        email,
        password,
      },
      { new: true }
    );

    if (result) {
      res.json({ message: '✅ User updated successfully' });
    } else {
      res.status(404).json({ message: '❌ User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: '❌ Server error during update', error });
  }
});

export default router