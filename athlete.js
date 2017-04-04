var Athlete = function(){
  this.hydration = 100;
  this.distanceCovered = 0;
  }

Athlete.prototype = {
  run: function(distance){
    if (this.hydration < distance){
      this.distanceCovered = this.distanceCovered;
      this.hydration = this.hydration;
    }else{
    this.distanceCovered = this.distanceCovered + distance;
    this.hydration = this.hydration - distance;
    }
  }
}

module.exports = Athlete;