import express from 'express';
import User from '../models/user.js';

const router = express.Router();

router.post('/form_data',async (req, res) => {  
  const appname=req.body.appname;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  try {
    const newUser = new User({ appname, username, email, password });
    await newUser.save(); 

    res.json({ message: `✅ ${appname} data saved successfully` });
  } catch (error) {
    res.json({ message: `❌ Error in saving ${appname} data`});
  }
});

export default router