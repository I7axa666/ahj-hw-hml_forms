import Popover from './popover/popover';

const btnWrapper = document.querySelector('.button-wrapper');
const popover = new Popover(btnWrapper);
const btn = btnWrapper.querySelector('.btn');

btn.addEventListener('click', () => {
  popover.insert();
});
