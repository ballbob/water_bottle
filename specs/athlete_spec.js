var assert = require('assert');
var WaterBottle = require('../water_bottle.js');
var Athlete = require('../athlete.js')

describe('Athlete', function(){
  it('should start with hydration at 100',function(){

    var athlete = new Athlete();

    assert.strictEqual(100,athlete.hydration);
  })

  it('should start having covered no distance', function(){

    var athlete = new Athlete();
    assert.strictEqual(0,athlete.distanceCovered);

  })

  it('should run, decreasing hydration and increasing distance covered', function(){

    var athlete = new Athlete();
    athlete.run(2);

    assert.strictEqual(98, athlete.hydration);
    assert.strictEqual(2,athlete.distanceCovered);
  })

  // it('should not run if too dehydrated to travel that distance',function(){
    
  // })
})