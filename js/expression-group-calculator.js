//PRINTER
var listener = require('js/grammar/BracketsDestroyerListener.js');
var expressionUtils = require('js/grammar-utils.js');

var groupCalculator = function() {
    listener.BracketsDestroyerListener.call(this); // inherit default listener
    return this;
};

groupCalculator.prototype = Object.create(listener.BracketsDestroyerListener.prototype);
groupCalculator.prototype.constructor = groupCalculator;

groupCalculator.prototype.enterMathExpr = function(ctx) {
    this.count = 0;
};

groupCalculator.prototype.enterExprGroup = function(ctx) {
    this.count++;
};

exports = groupCalculator;