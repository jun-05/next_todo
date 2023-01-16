import connectMongo from '../../../database/conn';
import { NextApiRequest, NextApiResponse } from 'next';
import { task } from '../../../features/task/type/TaskType';
import { getSession } from 'next-auth/react';
import { ObjectId } from 'mongodb'
import Tasks from './../../../model/taskSchema';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  connectMongo().catch(error => res.json({ error: 'Connection Failed...!' }));

  // only post method is accepted
  if (req.method === 'PATCH') {
    if (!req.body) return res.status(404).json({ error: "Don't have form data...!" });

    const session = await getSession({ req });
    if (!session) return res.status(401).json({ message: 'session is not valid...!' });

    const {uid} = session.user
    const { _id,dueTime,iconName,note,place,taskType,title,urgent,done} : task = req.body;

    const data = await Tasks.updateOne(
        { $and: [{'user.uid':uid},{'_id':new ObjectId(_id)} ] },  {
            dueTime,iconName,note,place,taskType,title,urgent,done}
    );

    return res.status(200).json(data);
  } else {
    return res.status(500).json({ message: 'HTTP method not valid only PATCH Accepted' });
  }
}
