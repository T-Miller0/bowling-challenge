function Frame() {
  this.rolls = [];
  this.maxPins = 10;
  this.frameOver = false;
}

Frame.prototype.addRoll = function(num) {
  if (num > this.maxPins) {
    throw new Error('Invalid roll')
  }
  if (this.isStrike(num)) {
    this.rolls.push(num)
  } else {
  this.rolls.push(num);
  };
};

Frame.prototype.isStrike = function(num) {
  if (this.rolls.length === 0 && num === this.maxPins) {
    this.frameOver = true
    return true
  };
  return false
};

Frame.prototype.isFrameOver = function () {
  if(this.rolls[0] === 10 || this.rolls.length === 2) {
    return true
  };
  return false
};

Frame.prototype.resetFrame = function () {
  this.rolls = []
  this.maxPins = 10
};
// Frame.prototype.isSpare = function() {
//   if (this.rolls.length === 2) {
//     let total = this.rolls[0] + this.rolls[1]
//    if(total === this.maxPins) {
//     this.frameOver = true
//     return true
//   };
//   return false
// };
// };
