import mongoose from 'mongoose';

const familySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    unique: true,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  settings: {
    theme: {
      type: String,
      default: 'light',
    },
    language: {
      type: String,
      default: 'en',
    },
  },
}, {
  timestamps: true,
});

export default mongoose.model('Family', familySchema);
