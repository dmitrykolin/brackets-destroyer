//ANALYZER
var listener = require('./grammar/BracketsDestroyerListener.js');
var expressionUtils = require('./grammar-utils.js').expressionUtils;

var Analyzer = function() {
    listener.BracketsDestroyerListener.call(this); // inherit default listener
    return this;
};

// inherit default listener
Analyzer.prototype = Object.create(listener.BracketsDestroyerListener.prototype);
Analyzer.prototype.constructor = Analyzer;

Analyzer.prototype.enterMathExpr = function(ctx) {
    this.pickedBrackets = false;
};

//exprGroup always has parents like: complexExpr>atomicExpr>exprGroup
Analyzer.prototype.enterExprGroup = function(ctx) {
    ctx.isGrouping = true;
    if (!expressionUtils.isHiddenElement(ctx) && !this.pickedBrackets) {

        var c1ComplexExpr = ctx.children[1];
        if (c1ComplexExpr.children.length === 1 && (expressionUtils.isAtomicExpr(c1ComplexExpr.children[0]))) {
            console.log('removeBrackets (condition 0)');
            ctx.removeBrackets = true;
            ctx.picked = true;
        } else {
            //analyze group
            var p1AtomicExpr = ctx.parentCtx;
            var p2 = p1AtomicExpr.parentCtx;

            if (expressionUtils.isNegativeExpr(p2)) {
                var p2NegativeExpr = p2;
                //negative
                //example: -(5), so we need do opposite inside brackets and remove brackets
                console.log('removeBrackets (condition 1)');
                p2NegativeExpr.toOpposite = true;
                ctx.toOpposite = true;
                ctx.removeBrackets = false;
                ctx.picked = true;
            } else  if (expressionUtils.isComplexExpr(p2)) {
                var p2ComplexExpr = p2;

                var p3 = p2ComplexExpr.parentCtx;
                if (expressionUtils.isMathExpr(p3)) {
                    //example: (5), so we could remove brackets
                    console.log('removeBrackets (condition 2)');
                    ctx.removeBrackets = true;
                    ctx.picked = true;
                } else if (expressionUtils.isComplexExpr(p3)) {
                    var p3ComplexExpr = p3;
                    var complexExprChildrenCount = p3ComplexExpr.children.length;

                    if (complexExprChildrenCount == 1) {
                        //atomic
                        //example: ((5)), so we could remove brackets
                        console.log('removeBrackets (condition 3)');
                        ctx.removeBrackets = true;
                        ctx.picked = true;
                    } else if (complexExprChildrenCount == 3) {
                        var symbolExpr = p3ComplexExpr.children[1];
                        var symbolText = symbolExpr.getText();
                        var isLeftElement = p3ComplexExpr.children[0] === p2ComplexExpr;

                        if (expressionUtils.isFirstSign(symbolExpr)) {
                            var additionalElement;
                            var additionalData = {};
                            if (isLeftElement) {
                                //example: (1)*2
                                additionalElement = p3ComplexExpr.children[2];
                                additionalData.left = false;
                            } else {
                                //example: 1*(2)
                                additionalElement = p3ComplexExpr.children[0];
                                additionalData.left = true;
                            }
                            additionalData.expression = additionalElement.getText();
                            additionalData.symbol = symbolText;

                            ctx.children[1].additionalData = additionalData;
                            console.log('removeBrackets (condition 7)');
                            symbolExpr.isHidden = true;
                            additionalElement.isHidden = true;
                            ctx.isHidden = false;
                            ctx.removeBrackets = false;
                            ctx.picked = true;
                        } else if (expressionUtils.isSecondSign(symbolExpr)) {
                            if (symbolText === '+') {
                                //example: 1+(2), so we could remove brackets
                                console.log('removeBrackets (condition 6)');
                                ctx.removeBrackets = true;
                                ctx.picked = true;
                            } else if (symbolText === '-') {
                                if (isLeftElement) {
                                    //example: (1)-2, so we need remove brackets
                                    console.log('removeBrackets (condition 4)');
                                    ctx.removeBrackets = true;
                                    ctx.picked = true;
                                } else {
                                    //example: 1-(2), so we need to do opposite inside brackets and then remove brackets
                                    console.log('removeBrackets (condition 5)');
                                    if (!expressionUtils.isNegativeExpr(ctx.children[1].children[0])) {
                                        p3ComplexExpr.children[1].isHidden = true;
                                        p3ComplexExpr.children[1].toOpposite = true;
                                    } else {
                                        p3ComplexExpr.children[1].isHidden = false;
                                        p3ComplexExpr.children[1].toOpposite = true;
                                    }
                                    ctx.toOpposite = true;
                                    ctx.removeBrackets = true;
                                    ctx.picked = true;
                                }
                            } else {
                                ctx.removeBrackets = false;
                                console.warn('unsupported');
                            }
                        } else {
                            ctx.removeBrackets = false;
                            console.warn('unsupported');
                        }
                    } else {
                        ctx.removeBrackets = false;
                        console.warn('unsupported');
                    }
                } else {
                    ctx.removeBrackets = false;
                    console.warn('unsupported');
                }
            } else {
                ctx.removeBrackets = false;
                console.warn('unsupported');
            }
        }

        if (ctx.picked) {
            this.pickedBrackets = true;
        }
    }
};

Analyzer.prototype.enterFunctionElement = function(ctx) {
    ctx.isGrouping = true;
};

exports.analyzer = Analyzer;