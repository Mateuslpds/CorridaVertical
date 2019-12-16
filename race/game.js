let world = new World(window)

let game = new Vue({
  el: '#game',
  data: {
    world: world,
    player: world.player,
    obstacle: world.obstacle,
    viewport: world.viewport,
    frequency: 50,
    playerposition: 0
  },
  mounted: function() {
    this.$el.focus()
    setInterval(this.loop, 1000 / this.frequency)
    this.obstacle.x = this.obstacle.carPosition[Math.floor(Math.random()*this.obstacle.carPosition.length)]
  },

})