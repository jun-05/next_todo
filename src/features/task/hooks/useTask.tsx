import { useMutation, useQuery } from '@tanstack/react-query';
import { taskAPI } from '../api/taskAPI';
import { task } from '../type/TaskType';

export function useTask() {
  const addMutation = useMutation({
    mutationFn: taskAPI.createTask,
    onError: err => {
      alert(err + '발생');
    },
    onSuccess: () => {
      alert('글이 저장되었습니다.');
    },
    onSettled: () => {
      return <div>loading...</div>;
    },
  });

  const updateMutation = useMutation({
    mutationFn: taskAPI.updateTask,
    onError: err => {
      alert(err + '발생');
    },
    onSuccess: () => {
      alert('글이 수정 되었습니다.');
    },
    onSettled: () => {
      return <div>loading...</div>;
    },
  });

  const deleteMutation = useMutation({
    mutationFn: taskAPI.deleteTask,
    onError: err => {
      alert(err + '발생');
    },
    onSuccess: () => {
      alert('글이 삭제 되었습니다.');
    },
    onSettled: () => {
      return <div>loading...</div>;
    },
  });

  return { addMutation, updateMutation, deleteMutation };
}

export function useGetTask(_id: string) {
  const data = useQuery(['task', _id], () => taskAPI.getTask(_id), {
    enabled: true,
    onError: e => alert(e),
    select: (data): task => data?.data,
  });

  return data;
}
