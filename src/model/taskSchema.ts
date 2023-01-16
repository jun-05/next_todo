import { Schema, model,models } from 'mongoose';

const taskSchema = new Schema({
    iconName: String,
    taskType: String,
    title: String,
    place: String || null,
    note: String,
    dueTime: Date,
    urgent: Number,
    done:Boolean,
  user: {
    uid: String,
    username: String,
  },
  publishedDate: {
    type: Date,
    default: Date.now, 
  },
});
const Tasks = models.task ||model('task', taskSchema);

export default Tasks;
