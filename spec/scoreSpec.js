describe('Score', function() {

  var score;

  beforeEach(function() {
    score = new Score();
  });

  it('shows number of pins knocked down up to 10', function() {
    expect(score.pins(4)).toEqual(4);
  });
  it('keeps track of users score', function() {
    score.pins(8)
    score.pins(2)
    expect(score.total(10)).toEqual(10)
  })
});
