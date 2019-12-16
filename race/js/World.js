class World {
  width = 0
  height = 0

  viewport = null
  player = null
  obstacle = null

  constructor(window, w = window.width, h = window.height) {
    this.width = Math.min(window.innerWidth, w)
    this.height = Infinity

    this.setViewportFor(window)
    this.player = new Player(30, 30)
    this.obstacle = new Obstacle(20, 20)
  }

  setViewportFor(window) {
    this.viewport = new Viewport(
      Math.min(window.innerWidth, this.width),
      Math.min(window.innerHeight, this.height)
      )
  }

}