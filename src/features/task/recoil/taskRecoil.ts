import { atom } from "recoil";

const taskItemState = atom({
    key: 'taskItemState', 
    default: {
        iconName:'GiPencilBrush',
        showIconList:false,
    }, 
  });

export default taskItemState