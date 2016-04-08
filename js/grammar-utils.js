var expressionUtils = {
    simplifyExpression: function (expression) {
        return expression.replace(/ /g,'');
    },
    isContextTypeOf: function(ctx, elementName) {
        return ctx.constructor.name === elementName;
    },
    isMathExpr: function(ctx) {
        return this.isContextTypeOf(ctx, "MathExprContext");
    },
    isExpr: function(ctx) {
        return this.isContextTypeOf(ctx, "ExprContext");
    },
    isFirstSign: function(ctx) {
        return this.isContextTypeOf(ctx, "FirstSignContext");
    },
    isSecondSign: function(ctx) {
        return this.isContextTypeOf(ctx, "SecondSignContext");
    },
    isExprGroup: function(ctx) {
        return this.isContextTypeOf(ctx, "ExprGroupContext");
    },
    isFunctionElement: function(ctx) {
        return this.isContextTypeOf(ctx, "FunctionElementContext");
    },
    isComplexExpr: function(ctx) {
        return this.isContextTypeOf(ctx, "ComplexExprContext");
    },
    isAtomicExpr: function(ctx) {
        return this.isContextTypeOf(ctx, "AtomicExprContext");
    },
    isNegativeExpr: function(ctx) {
        return this.isContextTypeOf(ctx, "NegativeExprContext");
    },
    findParentGroupingElement: function(ctx) {
        var parentCtx = ctx.parentCtx;
        while (parentCtx != null) {
            if (parentCtx.isGrouping) {
                return parentCtx;
            }
            parentCtx = parentCtx.parentCtx;
        }
    },
    isHiddenElement: function(ctx) {
        var element = ctx;
        while (element != null) {
            if (element.isHidden) {
                return true;
            }
            element = element.parentCtx;
        }
        return false;
    }
};
exports.expressionUtils = expressionUtils;