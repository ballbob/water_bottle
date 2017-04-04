var WaterBottle = function(){
  this.volume = 0;
}

WaterBottle.prototype = {
  
  fill: function(){
    this.volume = 100;
  },

  drink: function(){
    if (this.volume < 11){
      this.volume = 0;
    }else{
    this.volume = (this.volume-10);}
  },

  empty: function(){
    this.volume = 0;
  }

}

module.exports = WaterBottle;