import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  afiliation: {
    type: String,
    required: false,
  },
});

const documentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  shortTitle: {
    type: String,
    required: false,
  },
  authors: [authorSchema],
  university: {
    type: String,
    required: false,
  },
  course: {
    type: String,
    required: false,
  },
  profesor: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  authorNote: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: true,
    enum: ['Estudiante', 'Profesional'],
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Document', documentSchema);
const finalSchema = mongoose.model('Document');

export default finalSchema;
