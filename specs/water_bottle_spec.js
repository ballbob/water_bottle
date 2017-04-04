var assert = require('assert');
var WaterBottle = require('../water_bottle.js');

describe('Water Bottle', function() {

  it('should be empty at start', function(){
    var bottle = new WaterBottle();
    assert.strictEqual(0,bottle.volume);
  })

  it('should fill when fill function used', function(){
    var bottle = new WaterBottle();
    bottle.fill();
    assert.strictEqual(100,bottle.volume);
  })

})