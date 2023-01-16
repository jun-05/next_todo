export type task = {
  _id?: string;
  iconName: string;
  taskType: string;
  title: string;
  place: string;
  note: string;
  dueTime: string;
  urgent: number;
  done?: boolean;
};
