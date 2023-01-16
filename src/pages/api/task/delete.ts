import connectMongo from '../../../database/conn';
import { NextApiRequest, NextApiResponse } from 'next';
import { task } from '../../../features/task/type/TaskType';
import { getSession } from 'next-auth/react';
import { ObjectId } from 'mongodb'
import Tasks from './../../../model/taskSchema';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  connectMongo().catch(error => res.json({ error: 'Connection Failed...!' }));

  // only post method is accepted
  if (req.method === 'DELETE') {
    const session = await getSession({ req });
    if (!session) return res.status(401).json({ message: 'session is not valid...!' });
    const {uid} = session.user
    const _id = Array.isArray(req.query.id) ? req.query.id[0] : req.query.id ||''

    const data = await Tasks.deleteOne({ $and: [{'user.uid':uid},{'_id':new ObjectId(_id)}]});

    return res.status(200).json(data);
  } else {
    return res.status(500).json({ message: 'HTTP method not valid only DELETE Accepted' });
  }
}
