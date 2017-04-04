var assert = require('assert');
var WaterBottle = require('../water_bottle.js');
var Athlete = require('../athlete.js')

describe('Athlete', function(){
  var bottle;
  var athlete;

  beforeEach(function(){
    bottle = new WaterBottle();
    athlete = new Athlete();
  })

  it('should start with hydration at 100',function(){
    assert.strictEqual(100,athlete.hydration);
  })

  it('should start having covered no distance', function(){
    assert.strictEqual(0,athlete.distanceCovered);

  })

  it('should run, decreasing hydration and increasing distance covered', function(){
    athlete.run(2);

    assert.strictEqual(98, athlete.hydration);
    assert.strictEqual(2,athlete.distanceCovered);
  })

  it('should not run any further if too dehydrated to travel that distance',function(){
    athlete.run(100);
    athlete.run(10);

    assert.strictEqual(100,athlete.distanceCovered);
  })

  it('should be able to drink the water bottle', function(){
    athlete.run(100);
    athlete.drink(bottle);

    assert.strictEqual(100,athlete.hydration);
    assert.strictEqual(0,bottle.volume);
  })

})