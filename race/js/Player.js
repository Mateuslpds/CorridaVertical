class Player extends Element {

  score = 0;

  constructor(width, height) {
    super(110, 100, width, height);
  }

  style() {
    return {
      width: this.width,
      height: this.height
    }
  }
}