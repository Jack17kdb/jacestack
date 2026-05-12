import mongoose from 'mongoose';

const subscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Invalid email format'],
  },
  subscribedAt: {
    type: Date,
    default: Date.now,
  },
  welcomeEmailSent: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model('Subscriber', subscriberSchema);
