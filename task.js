const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    status: { type: String, required: true, enum: ['To-Do', 'In Progress', 'Under Review', 'Completed'] },
    priority: { type: String, enum: ['Low', 'Medium', 'Urgent'] },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  });
  
  const Task = mongoose.model('Task', taskSchema);
  