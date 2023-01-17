import { atom } from 'recoil';

const navItemState = atom({
  key: 'navToggle',
  default: {
    showNav: false,
  },
});

export default navItemState;
