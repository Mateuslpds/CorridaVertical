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

})