 var Score = function() {
this.maxPins = 10;
this.userScore = 0;
this.scoreTurn = 0;
};

Score.prototype.pins = function(number) {
  if (number > this.maxPins) {
    return Error('Bowl attempt invalid');
  } else { (this.userScore += this.scoreTurn)
    return this.scoreTurn = number;
  };
}
Score.prototype.total = function() {
  return (this.userScore += this.scoreTurn)
};
