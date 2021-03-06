//PRINTER
var listener = require('./grammar/BracketsDestroyerListener.js');
var expressionUtils = require('./grammar-utils.js').expressionUtils;

var ExpressionPrinter = function() {
    listener.BracketsDestroyerListener.call(this); // inherit default listener
    return this;
};

// inherit default listener
ExpressionPrinter.prototype = Object.create(listener.BracketsDestroyerListener.prototype);
ExpressionPrinter.prototype.constructor = ExpressionPrinter;

ExpressionPrinter.prototype.out = '';

ExpressionPrinter.prototype.enterExprGroup = function(ctx) {
    if (ctx.picked) {
        this.out = this.out + '<span class="picked-brackets"><span class="picked-bracket-item">' + ctx.children[0].getText() + '</span>';
    } else {
        this.out = this.out + ctx.children[0].getText();
    }
};

ExpressionPrinter.prototype.exitExprGroup = function(ctx) {
    if (ctx.picked) {
        this.out = this.out + '<span class="picked-bracket-item">' + ctx.children[2].getText() + '</span></span>';
    } else {
        this.out = this.out + ctx.children[2].getText();
    }
};


ExpressionPrinter.prototype.enterFirstSign = function(ctx) {
    this.out = this.out + ctx.children[0].getText();
};

ExpressionPrinter.prototype.enterSecondSign = function(ctx) {
    var symbol = ctx.children[0].getText();
    this.out = this.out + symbol;
};

ExpressionPrinter.prototype.enterElement = function(ctx) {
    this.out = this.out + ctx.children[0].getText();
};

ExpressionPrinter.prototype.enterNegativeExpr = function (ctx) {
    this.out = this.out + '-';
};

ExpressionPrinter.prototype.enterFunctionElement = function(ctx) {
    this.out = this.out + ctx.children[0].getText() + '(';
};

ExpressionPrinter.prototype.exitFunctionElement = function(ctx) {
    this.out = this.out + ')';
};

exports.printer = ExpressionPrinter;