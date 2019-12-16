class Obstacle extends Element {

  carPosition = [110, 280 ,450, 620];

  constructor(width, height) {
    super(110, 1100, width, height);
  }

  style() {
    return {
      width: this.width,
      height: this.height
    }
  }
}