import connectMongo from '../../../database/conn';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import Tasks from '../../../model/taskSchema';
import { ObjectId } from 'mongodb'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  connectMongo().catch(error => res.json({ error: 'Connection Failed...!' }));
  // only get method is accepted
  if (req.method === 'GET') {
    const session = await getSession({ req });
    if (!session) return res.status(401).json({ message: 'session is not valid...!' });
    const {uid} = session.user;
    const _id = Array.isArray(req.query.id) ? req.query.id[0] : req.query.id ||''
    const data = await Tasks.findOne({ $and: [{'user.uid':uid},{'_id':new ObjectId(_id)} ] })
  
    return res.status(201).json(data);
  } else {
    return res.status(500).json({ message: 'HTTP method not valid only GET Accepted' });
  }
}
