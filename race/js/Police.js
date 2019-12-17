class Police extends Element {

  policePosition = [110, 280 ,450, 620];

  constructor(width, height) {
    super(110, 1600, width, height);
  }

  style() {
    return {
      width: this.width,
      height: this.height
    }
  }
}