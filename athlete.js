var Athlete = function(){
  this.hydration = 100;
  this.distanceCovered = 0;

  this.run = function(distance){
    this.distanceCovered = this.distanceCovered + distance;
    this.hydration = this.hydration - distance;
  }
}

module.exports = Athlete;