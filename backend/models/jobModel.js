import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    company: {
        type: String,
        required: true,
      },
    location: {
      type: String,
      required: true,
    },
   type: {
      type: String,
      enum: ['Full-time', 'Part-time', 'Contract', 'Temporary', 'Internship'],
    },
    description: {
      type: String,
      required: true,
    },
    requirements: {
      type: String, // Array of strings to list requirements,
      required: true,
    },
    salary: {
      type: String, // Can store salary as a range (e.g., "50,000 - 70,000")
      required: true,
    },
    applicationDeadline: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  }
);

const Job = mongoose.model('Job', jobSchema);

export default Job;
