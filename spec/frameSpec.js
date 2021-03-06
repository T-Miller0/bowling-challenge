describe('frame', function () {
  var frame;

  beforeEach(function() {
    frame = new Frame
  });

  describe('add roll', function() {
    it('stores roll', function() {
      frame.addRoll(4)
      expect(frame.rolls).toEqual([4])
    });
    it('rolls a strike', function() {
      frame.addRoll(10)
      expect(frame.rolls).toEqual([10])
      expect(frame.frameOver).toEqual(true)
    });
    it('throws error if roll is too high', function() {
      expect(function() { frame.addRoll(21);}).toThrow()
    });
  });
  describe('strike', function() {
    it('should return a strike', function() {
      frame.isStrike(10)
      expect(frame.isStrike(10)).toEqual(true)
    });
    it('false, is not a strike', function() {
      expect(frame.isStrike(4)).toEqual(false)
    });
  });
  // describe('spare', function() {
  //   it('should return a spare', function() {
  //     frame.addRoll(6)
  //     frame.addRoll(4)
  //     expect(frame.isSpare()).toEqual(true)
  //   });
  //   it('false, is not a spare', function() {
  //     frame.addRoll(6)
  //     frame.addRoll(1)
  //     expect(frame.isSpare()).toEqual(false)
  //   });
  // });

  describe('is frame over', function() {
    it('sends rolls at end of frame', function() {
      frame.addRoll(10)
      expect(frame.isFrameOver()).toEqual(true)
    });
    it('sends off rolls if end of frame', function() {
      frame.addRoll(5)
      frame.addRoll(5)
      expect(frame.isFrameOver()).toEqual(true)
    });
    it('frame continues', function() {
      frame.addRoll(5)
      expect(frame.isFrameOver()).toEqual(false)
    });
  });
  describe('resetFrame', function() {
    it('adds score to game', function() {
      frame.resetFrame()
      expect(frame.rolls).toEqual([]);
      expect(frame.maxPins).toEqual(10);
    });
  });
});
