'use strict';

var Bob = function() {
  var silence = function(saying) {
    return saying.trim() === '';
  };

  var shouting = function(saying) {
    return saying.toUpperCase() === saying;
  };

  var question = function(saying) {
    var lastLetterIndex = saying.length - 1

    return saying[lastLetterIndex] === '?'
  };

  this.hey = function(saying) {
    if (silence(saying)) {
      return 'Fine. Be that way!';
    } else if (shouting(saying)) {
      return 'Woah, chill out!';
    } else if (question(saying)) {
      return 'Sure.';
    } else {
      return 'Whatever.';
    };
  };

  this.isTeenager = function(saying) {
    return true;
  };

  this.isAdult = function(saying) {
    return !this.isTeenager();
  };
};

module.exports = Bob;
