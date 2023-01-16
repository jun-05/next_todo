import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { tasksAPI } from '../api/tasksAPI';

export function useTaksList() {
  const { data: session } = useSession();
  const data = useQuery(['taskList', session?.user.uid], tasksAPI.getList);

  return data;
}
