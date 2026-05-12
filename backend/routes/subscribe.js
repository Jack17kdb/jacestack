import express from 'express';
import Subscriber from '../models/Subscriber.js';
import { sendWelcomeEmail } from '../services/brevo.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { email } = req.body;

  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  try {
    const existing = await Subscriber.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.status(409).json({ error: 'Already subscribed.' });
    }

    const subscriber = await Subscriber.create({ email: email.toLowerCase() });

    try {
      await sendWelcomeEmail(email);
      subscriber.welcomeEmailSent = true;
      await subscriber.save();
    } catch (emailErr) {
      console.error('Welcome email failed:', emailErr.message);
    }

    return res.status(201).json({ message: 'Subscribed! Check your inbox for the kit.' });
  } catch (err) {
    console.error('Subscribe error:', err.message);
    return res.status(500).json({ error: 'Server error. Please try again.' });
  }
});

export default router;
