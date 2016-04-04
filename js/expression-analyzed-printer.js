//PRINTER
var listener = require('js/grammar/BracketsDestroyerListener.js');
var expressionUtils = require('js/grammar-utils.js');

var ExpressionPrinter = function() {
    listener.BracketsDestroyerListener.call(this); // inherit default listener
    return this;
};

// inherit default listener
ExpressionPrinter.prototype = Object.create(listener.BracketsDestroyerListener.prototype);
ExpressionPrinter.prototype.constructor = ExpressionPrinter;

ExpressionPrinter.prototype.out = '';

ExpressionPrinter.prototype.enterFirstSign = function(ctx) {
    if (!expressionUtils.isHiddenElement(ctx)) {
        this.out = this.out + ctx.children[0].getText();
    }
};

ExpressionPrinter.prototype.enterSecondSign = function(ctx) {
    if (!expressionUtils.isHiddenElement(ctx)) {
        var symbol = ctx.children[0].getText();
        if (ctx.toOpposite) {
            if (symbol === '-') {
                symbol = '+';
            } else {
                symbol = '-';
            }
        }
        this.out = this.out + symbol;
    }
};

ExpressionPrinter.prototype.enterExprGroup = function(ctx) {
    if (!expressionUtils.isHiddenElement(ctx)) {
        if (!ctx.removeBrackets) {
            this.out = this.out + ctx.children[0].getText();
        }
        if (ctx.toOpposite) {
            ctx.children[1].toOpposite = true;
        }
        if (ctx.additionalData) {
            ctx.children[1].additionalData = ctx.additionalData;
        }
    }
};

ExpressionPrinter.prototype.exitExprGroup = function(ctx) {
    if (!expressionUtils.isHiddenElement(ctx)) {
        if (!ctx.removeBrackets) {
            this.out = this.out + ctx.children[2].getText();
        }
    }
};

ExpressionPrinter.prototype.enterElement = function(ctx) {
    if (!expressionUtils.isHiddenElement(ctx)) {
        if (ctx.toOpposite) {
            this.out = this.out + '-';
        }

        this.out = this.out + ctx.children[0].getText();
    }
};

ExpressionPrinter.prototype.enterComplexExpr = function(ctx) {
    if (!expressionUtils.isHiddenElement(ctx)) {
        if (ctx.toOpposite) {
            if (ctx.children.length === 1) {
                ctx.children[0].toOpposite = true;
            } else {
                if (expressionUtils.isSecondSign(ctx.children[1])) {
                    ctx.children[0].toOpposite = true;
                    if (ctx.children[1].getText() === '+') {
                        ctx.children[1].isHidden = true;
                        ctx.children[2].toOpposite = true;
                    } else {
                        ctx.children[1].toOpposite = true;
                        ctx.children[1].isHidden = false;
                        ctx.children[2].toOpposite = false;
                    }
                } else {
                    ctx.children[0].toOpposite = true;
                }
            }
        } else {
            if (ctx.additionalData && ctx.additionalData.expression && ctx.additionalData.expression.length > 0) {
                var additionalData = ctx.additionalData;

                if (ctx.children.length === 1) {
                    ctx.children[0].additionalData = additionalData;
                } else {
                    if (expressionUtils.isSecondSign(ctx.children[1])) {
                        ctx.children[0].additionalData = ctx.additionalData;
                        ctx.children[2].additionalData = ctx.additionalData;
                    } else {
                        if (ctx.additionalData.left) {
                            ctx.children[0].additionalData = ctx.additionalData;
                        } else {
                            ctx.children[2].additionalData = ctx.additionalData;
                        }
                    }
                }
            }
        }
    }
};

ExpressionPrinter.prototype.enterNegativeExpr = function (ctx) {
    if (!expressionUtils.isHiddenElement(ctx)) {
        if (!ctx.toOpposite) {
            this.out = this.out + '-';
        }

        if (ctx.additionalData) {
            if (ctx.additionalData.left) {
                this.out = this.out + ctx.additionalData.expression + ctx.additionalData.symbol;
            }
        }
    }
};

ExpressionPrinter.prototype.exitNegativeExpr = function (ctx) {
    if (!expressionUtils.isHiddenElement(ctx)) {
        if (ctx.additionalData) {
            if (!ctx.additionalData.left) {
                this.out = this.out + ctx.additionalData.symbol + ctx.additionalData.expression;
            }
        }
    }
};

ExpressionPrinter.prototype.enterAtomicExpr = function (ctx) {
   if (!expressionUtils.isHiddenElement(ctx)) {
       if (ctx.toOpposite) {
           this.out = this.out + '-';
       }

        if (ctx.additionalData) {
            if (ctx.additionalData.left) {
                this.out = this.out + ctx.additionalData.expression + ctx.additionalData.symbol;
            }
        }
   }
};

ExpressionPrinter.prototype.exitAtomicExpr = function (ctx) {
   if (!expressionUtils.isHiddenElement(ctx)) {
        if (ctx.additionalData) {
            if (!ctx.additionalData.left) {
                this.out = this.out + ctx.additionalData.symbol + ctx.additionalData.expression;
            }
        }
   }
};


ExpressionPrinter.prototype.enterFunctionElement = function(ctx) {
    if (!expressionUtils.isHiddenElement(ctx)) {
        if (ctx.toOpposite) {
            this.out = this.out + '-';
        }
        this.out = this.out + ctx.children[0].getText() + '(';
    }
};

ExpressionPrinter.prototype.exitFunctionElement = function(ctx) {
    if (!expressionUtils.isHiddenElement(ctx)) {
        this.out = this.out + ')';
    }
};

exports = ExpressionPrinter;