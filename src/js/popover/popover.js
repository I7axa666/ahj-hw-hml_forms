export default class Popover {
  constructor(element) {
    this.element = element;
    this.insert = this.insert.bind(this);
  }

  static get markup() {
    return `
      
      <div class="title">
            Popover title
      </div>
      <span>
            Vivamus sagittis 
      </span>
      <div class="arrow"></div>
      `;
  }

  insert() {
    if (this.element.querySelector('.popover-body')) {
      this.element.querySelector('.popover-body').remove();
    } else {
      const btnElement = this.element.querySelector('.btn');
      const popoverBody = document.createElement('div');
      popoverBody.classList.add('popover-body');
      popoverBody.innerHTML = Popover.markup;
      this.element.insertBefore(popoverBody, btnElement);
    }
  }
}
