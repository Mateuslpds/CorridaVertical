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
  methods: {
    keyup: function(evt) {
      this.player.x = this.player.x
    },
    keydown: function(evt) {
      if (evt.keyCode == 37 && this.playerposition > 0) {
        this.player.x -= 170
        this.playerposition--
      }
      else if (evt.keyCode == 39 && this.playerposition < 3) {
        this.player.x += 170
        this.playerposition++
      }
    },
    gameLogic() {

     $('#game').animate({
       'background-position-y': '-200000%'
     }, 2000000, 'linear');

   },
 })