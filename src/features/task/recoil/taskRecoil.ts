import { atom } from 'recoil';

const taskItemState = atom({
  key: 'taskItemState',
  default: {
    iconName: 'GiPencilBrush',
    showIconList: false,
    done: false,
  },
});

export default taskItemState;
