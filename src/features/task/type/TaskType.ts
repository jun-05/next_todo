export type task = {
  id?:number;
  iconName: string;
  taskType: string,
  title: string;
  place: string;
  note: string;
  dueTime: string;
  urgent: number;
  done?:boolean;
};
