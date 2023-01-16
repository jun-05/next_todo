import connectMongo from '../../../database/conn';
import { NextApiRequest, NextApiResponse } from 'next';
import { task } from '../../../features/task/type/TaskType';
import { getSession } from 'next-auth/react';
import Task from '../../../model/taskSchema';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  connectMongo().catch(error => res.json({ error: 'Connection Failed...!' }));

  // only post method is accepted
  if (req.method === 'POST') {
    if (!req.body) return res.status(404).json({ error: "Don't have form data...!" });

    const session = await getSession({ req });
    if (!session) return res.status(401).json({ message: 'session is not valid...!' });

    const { uid, name } = session.user;

    const { dueTime, iconName, note, place, taskType, title, urgent }: task = req.body;
    Task.create(
      {
        dueTime,
        iconName,
        note,
        place,
        taskType,
        title,
        urgent,
        done: false,
        user: { uid, username: name },
      },
      function (err: any, data: any) {
        if (err) return res.status(404).json({ err });
        return res.status(201).json(data);
      }
    );
  } else {
    return res.status(500).json({ message: 'HTTP method not valid only POST Accepted' });
  }
}
