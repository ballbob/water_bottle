var assert = require('assert');
var WaterBottle = require('../water_bottle.js');

describe('Water Bottle', function() {
  var bottle;

  beforeEach(function(){
    bottle = new WaterBottle();
  })

  it('should be empty at start', function(){
    assert.strictEqual(0,bottle.volume);
  })

  it('should fill when fill function used', function(){
    bottle.fill();
    assert.strictEqual(100,bottle.volume);
  })

  it('should go down by 10 when drink function used',function(){
    bottle.fill();
    bottle.drink();
    assert.strictEqual(90,bottle.volume);
  })

  it('should empty when empty function used',function(){
    bottle.fill();
    bottle.empty();
    assert.strictEqual(0,bottle.volume);
  })

  it('should not go below 0',function(){
    bottle.empty();
    bottle.drink();
    assert.strictEqual(0,bottle.volume);
  })

})