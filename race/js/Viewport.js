class Viewport {
  x = 0;
  y = 0;
  width = 0;
  height = 0;

  constructor(w, h) {
    this.width = w;
    this.height = h;
  }

  style() {
    return `width: ${this.width}px, height: ${this.height}px`;
  }

  styleFor(element) {
    let style = element.style()
    style.left = element.x - this.x
    style.top = this.height - element.height - (element.y - this.y)

    style.left += 'px'
    style.top += 'px'
    style.width += 'px'
    style.height += 'px'

    if (element.width == Infinity) {
      style.left = 0
      style.width = '100%'
    }
    if (element.height == Infinity) {
      style.top = 0
      style.height = '100%'
    }
    return style;
  }
}