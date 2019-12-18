let world = new World(window)

let game = new Vue({
  el: '#game',
  data: {
    world: world,
    player: world.player,
    obstacle: world.obstacle,
    police: world.police,
    viewport: world.viewport,
    frequency: 50,
    playerposition: 0
  },
  mounted: function() {
    this.$el.focus()
    setInterval(this.loop, 1000 / this.frequency)
    this.obstacle.x = this.obstacle.carPosition[Math.floor(Math.random()*this.obstacle.carPosition.length)]
    this.police.x = this.police.policePosition[Math.floor(Math.random()*this.police.policePosition.length)]
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
   loop() {
    this.gameLogic()
    if (this.player.score < 1000) {
      this.player.score+=1;
      this.obstacle.y -= 20;
      this.police.y -= 20;
    }
    else if (this.player.score < 5000) {
      this.player.score+=2;
      this.obstacle.y -= 25;
      this.police.y -= 25;
    }
    else if(this.player.score < 10000){
      this.player.score+=3;
      this.obstacle.y -= 30;
      this.police.y -= 30;
    }
    else{
      this.player.score+=5;
      this.obstacle.y -= 40;
      this.police.y -= 40;
    }
    if (this.player.y >= (this.obstacle.y - 80) && this.player.x == this.obstacle.x ) {
      if (this.player.y < this.obstacle.y + 80) {
        window.alert("Você perdeu :( \nScore:"+(this.player.score));
        location.reload();
      }
    }
    if (this.player.y >= (this.police.y - 80) && this.player.x == this.police.x ) {
      if (this.player.y < this.police.y + 80) {
        window.alert("Você perdeu :( \nScore:"+(this.player.score));
        location.reload();
      }
    }


    if (this.player.y > (this.obstacle.y + 150) && this.player.y > (this.police.y + 150)) {
      this.obstacle.y = 1150
      this.police.y = 1650
      this.obstacle.x = this.obstacle.carPosition[Math.floor(Math.random()*this.obstacle.carPosition.length)]
      this.police.x = this.police.policePosition[Math.floor(Math.random()*this.police.policePosition.length)]
    }
      //this.obstacle.y -= 30
    }
  }
})