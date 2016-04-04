// Generated from D:/Projects/Math/antlr_gr/BracketsDestoyer/grammar\BracketsDestroyer.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var BracketsDestroyerListener = require('./BracketsDestroyerListener').BracketsDestroyerListener;
var BracketsDestroyerVisitor = require('./BracketsDestroyerVisitor').BracketsDestroyerVisitor;

var grammarFileName = "BracketsDestroyer.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\fI\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004\b",
    "\t\b\u0004\t\t\t\u0004\n\t\n\u0003\u0002\u0003\u0002\u0003\u0002\u0007",
    "\u0002\u0018\n\u0002\f\u0002\u000e\u0002\u001b\u000b\u0002\u0003\u0002",
    "\u0005\u0002\u001e\n\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0005",
    "\u0003#\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003-\n\u0003\f\u0003",
    "\u000e\u00030\u000b\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0005\u00058\n\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0002\u0003",
    "\u0004\u000b\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0002\u0005\u0003",
    "\u0002\u0006\u0007\u0003\u0002\b\t\u0003\u0002\u000b\fF\u0002\u001d",
    "\u0003\u0002\u0002\u0002\u0004\"\u0003\u0002\u0002\u0002\u00061\u0003",
    "\u0002\u0002\u0002\b7\u0003\u0002\u0002\u0002\n9\u0003\u0002\u0002\u0002",
    "\f;\u0003\u0002\u0002\u0002\u000e=\u0003\u0002\u0002\u0002\u0010A\u0003",
    "\u0002\u0002\u0002\u0012F\u0003\u0002\u0002\u0002\u0014\u0015\u0005",
    "\u0004\u0003\u0002\u0015\u0016\u0007\u0005\u0002\u0002\u0016\u0018\u0003",
    "\u0002\u0002\u0002\u0017\u0014\u0003\u0002\u0002\u0002\u0018\u001b\u0003",
    "\u0002\u0002\u0002\u0019\u0017\u0003\u0002\u0002\u0002\u0019\u001a\u0003",
    "\u0002\u0002\u0002\u001a\u001e\u0003\u0002\u0002\u0002\u001b\u0019\u0003",
    "\u0002\u0002\u0002\u001c\u001e\u0005\u0004\u0003\u0002\u001d\u0019\u0003",
    "\u0002\u0002\u0002\u001d\u001c\u0003\u0002\u0002\u0002\u001e\u0003\u0003",
    "\u0002\u0002\u0002\u001f \b\u0003\u0001\u0002 #\u0005\u0006\u0004\u0002",
    "!#\u0005\b\u0005\u0002\"\u001f\u0003\u0002\u0002\u0002\"!\u0003\u0002",
    "\u0002\u0002#.\u0003\u0002\u0002\u0002$%\f\u0006\u0002\u0002%&\u0005",
    "\n\u0006\u0002&\'\u0005\u0004\u0003\u0007\'-\u0003\u0002\u0002\u0002",
    "()\f\u0005\u0002\u0002)*\u0005\f\u0007\u0002*+\u0005\u0004\u0003\u0006",
    "+-\u0003\u0002\u0002\u0002,$\u0003\u0002\u0002\u0002,(\u0003\u0002\u0002",
    "\u0002-0\u0003\u0002\u0002\u0002.,\u0003\u0002\u0002\u0002./\u0003\u0002",
    "\u0002\u0002/\u0005\u0003\u0002\u0002\u00020.\u0003\u0002\u0002\u0002",
    "12\u0007\t\u0002\u000223\u0005\b\u0005\u00023\u0007\u0003\u0002\u0002",
    "\u000248\u0005\u0010\t\u000258\u0005\u000e\b\u000268\u0005\u0012\n\u0002",
    "74\u0003\u0002\u0002\u000275\u0003\u0002\u0002\u000276\u0003\u0002\u0002",
    "\u00028\t\u0003\u0002\u0002\u00029:\t\u0002\u0002\u0002:\u000b\u0003",
    "\u0002\u0002\u0002;<\t\u0003\u0002\u0002<\r\u0003\u0002\u0002\u0002",
    "=>\u0007\u0003\u0002\u0002>?\u0005\u0004\u0003\u0002?@\u0007\u0004\u0002",
    "\u0002@\u000f\u0003\u0002\u0002\u0002AB\u0007\n\u0002\u0002BC\u0007",
    "\u0003\u0002\u0002CD\u0005\u0004\u0003\u0002DE\u0007\u0004\u0002\u0002",
    "E\u0011\u0003\u0002\u0002\u0002FG\t\u0004\u0002\u0002G\u0013\u0003\u0002",
    "\u0002\u0002\b\u0019\u001d\",.7"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'('", "')'", 'null', "'*'", "'/'", "'+'", 
                     "'-'" ];

var symbolicNames = [ 'null', 'null', 'null', "NEWLINE", "MULTIPLY", "DIVIDE", 
                      "PLUS", "MINUS", "FUNCTION_NAME", "NUMBER", "VARIABLE" ];

var ruleNames =  [ "mathExpr", "complexExpr", "negativeExpr", "atomicExpr", 
                   "firstSign", "secondSign", "exprGroup", "functionElement", 
                   "element" ];

function BracketsDestroyerParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

BracketsDestroyerParser.prototype = Object.create(antlr4.Parser.prototype);
BracketsDestroyerParser.prototype.constructor = BracketsDestroyerParser;

Object.defineProperty(BracketsDestroyerParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

BracketsDestroyerParser.EOF = antlr4.Token.EOF;
BracketsDestroyerParser.T__0 = 1;
BracketsDestroyerParser.T__1 = 2;
BracketsDestroyerParser.NEWLINE = 3;
BracketsDestroyerParser.MULTIPLY = 4;
BracketsDestroyerParser.DIVIDE = 5;
BracketsDestroyerParser.PLUS = 6;
BracketsDestroyerParser.MINUS = 7;
BracketsDestroyerParser.FUNCTION_NAME = 8;
BracketsDestroyerParser.NUMBER = 9;
BracketsDestroyerParser.VARIABLE = 10;

BracketsDestroyerParser.RULE_mathExpr = 0;
BracketsDestroyerParser.RULE_complexExpr = 1;
BracketsDestroyerParser.RULE_negativeExpr = 2;
BracketsDestroyerParser.RULE_atomicExpr = 3;
BracketsDestroyerParser.RULE_firstSign = 4;
BracketsDestroyerParser.RULE_secondSign = 5;
BracketsDestroyerParser.RULE_exprGroup = 6;
BracketsDestroyerParser.RULE_functionElement = 7;
BracketsDestroyerParser.RULE_element = 8;

function MathExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BracketsDestroyerParser.RULE_mathExpr;
    return this;
}

MathExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MathExprContext.prototype.constructor = MathExprContext;

MathExprContext.prototype.complexExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ComplexExprContext);
    } else {
        return this.getTypedRuleContext(ComplexExprContext,i);
    }
};

MathExprContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BracketsDestroyerParser.NEWLINE);
    } else {
        return this.getToken(BracketsDestroyerParser.NEWLINE, i);
    }
};


MathExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof BracketsDestroyerListener ) {
        listener.enterMathExpr(this);
	}
};

MathExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof BracketsDestroyerListener ) {
        listener.exitMathExpr(this);
	}
};

MathExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BracketsDestroyerVisitor ) {
        return visitor.visitMathExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BracketsDestroyerParser.MathExprContext = MathExprContext;

BracketsDestroyerParser.prototype.mathExpr = function() {

    var localctx = new MathExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, BracketsDestroyerParser.RULE_mathExpr);
    var _la = 0; // Token type
    try {
        this.state = 27;
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 23;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BracketsDestroyerParser.T__0) | (1 << BracketsDestroyerParser.MINUS) | (1 << BracketsDestroyerParser.FUNCTION_NAME) | (1 << BracketsDestroyerParser.NUMBER) | (1 << BracketsDestroyerParser.VARIABLE))) !== 0)) {
                this.state = 18;
                this.complexExpr(0);
                this.state = 19;
                this.match(BracketsDestroyerParser.NEWLINE);
                this.state = 25;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 26;
            this.complexExpr(0);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ComplexExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BracketsDestroyerParser.RULE_complexExpr;
    return this;
}

ComplexExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ComplexExprContext.prototype.constructor = ComplexExprContext;

ComplexExprContext.prototype.negativeExpr = function() {
    return this.getTypedRuleContext(NegativeExprContext,0);
};

ComplexExprContext.prototype.atomicExpr = function() {
    return this.getTypedRuleContext(AtomicExprContext,0);
};

ComplexExprContext.prototype.complexExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ComplexExprContext);
    } else {
        return this.getTypedRuleContext(ComplexExprContext,i);
    }
};

ComplexExprContext.prototype.firstSign = function() {
    return this.getTypedRuleContext(FirstSignContext,0);
};

ComplexExprContext.prototype.secondSign = function() {
    return this.getTypedRuleContext(SecondSignContext,0);
};

ComplexExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof BracketsDestroyerListener ) {
        listener.enterComplexExpr(this);
	}
};

ComplexExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof BracketsDestroyerListener ) {
        listener.exitComplexExpr(this);
	}
};

ComplexExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BracketsDestroyerVisitor ) {
        return visitor.visitComplexExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



BracketsDestroyerParser.prototype.complexExpr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ComplexExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 2;
    this.enterRecursionRule(localctx, 2, BracketsDestroyerParser.RULE_complexExpr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 32;
        switch(this._input.LA(1)) {
        case BracketsDestroyerParser.MINUS:
            this.state = 30;
            this.negativeExpr();
            break;
        case BracketsDestroyerParser.T__0:
        case BracketsDestroyerParser.FUNCTION_NAME:
        case BracketsDestroyerParser.NUMBER:
        case BracketsDestroyerParser.VARIABLE:
            this.state = 31;
            this.atomicExpr();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 44;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 42;
                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ComplexExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, BracketsDestroyerParser.RULE_complexExpr);
                    this.state = 34;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 35;
                    this.firstSign();
                    this.state = 36;
                    this.complexExpr(5);
                    break;

                case 2:
                    localctx = new ComplexExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, BracketsDestroyerParser.RULE_complexExpr);
                    this.state = 38;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 39;
                    this.secondSign();
                    this.state = 40;
                    this.complexExpr(4);
                    break;

                } 
            }
            this.state = 46;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function NegativeExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BracketsDestroyerParser.RULE_negativeExpr;
    return this;
}

NegativeExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NegativeExprContext.prototype.constructor = NegativeExprContext;

NegativeExprContext.prototype.MINUS = function() {
    return this.getToken(BracketsDestroyerParser.MINUS, 0);
};

NegativeExprContext.prototype.atomicExpr = function() {
    return this.getTypedRuleContext(AtomicExprContext,0);
};

NegativeExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof BracketsDestroyerListener ) {
        listener.enterNegativeExpr(this);
	}
};

NegativeExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof BracketsDestroyerListener ) {
        listener.exitNegativeExpr(this);
	}
};

NegativeExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BracketsDestroyerVisitor ) {
        return visitor.visitNegativeExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BracketsDestroyerParser.NegativeExprContext = NegativeExprContext;

BracketsDestroyerParser.prototype.negativeExpr = function() {

    var localctx = new NegativeExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, BracketsDestroyerParser.RULE_negativeExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 47;
        this.match(BracketsDestroyerParser.MINUS);
        this.state = 48;
        this.atomicExpr();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AtomicExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BracketsDestroyerParser.RULE_atomicExpr;
    return this;
}

AtomicExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AtomicExprContext.prototype.constructor = AtomicExprContext;

AtomicExprContext.prototype.functionElement = function() {
    return this.getTypedRuleContext(FunctionElementContext,0);
};

AtomicExprContext.prototype.exprGroup = function() {
    return this.getTypedRuleContext(ExprGroupContext,0);
};

AtomicExprContext.prototype.element = function() {
    return this.getTypedRuleContext(ElementContext,0);
};

AtomicExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof BracketsDestroyerListener ) {
        listener.enterAtomicExpr(this);
	}
};

AtomicExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof BracketsDestroyerListener ) {
        listener.exitAtomicExpr(this);
	}
};

AtomicExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BracketsDestroyerVisitor ) {
        return visitor.visitAtomicExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BracketsDestroyerParser.AtomicExprContext = AtomicExprContext;

BracketsDestroyerParser.prototype.atomicExpr = function() {

    var localctx = new AtomicExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, BracketsDestroyerParser.RULE_atomicExpr);
    try {
        this.state = 53;
        switch(this._input.LA(1)) {
        case BracketsDestroyerParser.FUNCTION_NAME:
            this.enterOuterAlt(localctx, 1);
            this.state = 50;
            this.functionElement();
            break;
        case BracketsDestroyerParser.T__0:
            this.enterOuterAlt(localctx, 2);
            this.state = 51;
            this.exprGroup();
            break;
        case BracketsDestroyerParser.NUMBER:
        case BracketsDestroyerParser.VARIABLE:
            this.enterOuterAlt(localctx, 3);
            this.state = 52;
            this.element();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FirstSignContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BracketsDestroyerParser.RULE_firstSign;
    return this;
}

FirstSignContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FirstSignContext.prototype.constructor = FirstSignContext;

FirstSignContext.prototype.MULTIPLY = function() {
    return this.getToken(BracketsDestroyerParser.MULTIPLY, 0);
};

FirstSignContext.prototype.DIVIDE = function() {
    return this.getToken(BracketsDestroyerParser.DIVIDE, 0);
};

FirstSignContext.prototype.enterRule = function(listener) {
    if(listener instanceof BracketsDestroyerListener ) {
        listener.enterFirstSign(this);
	}
};

FirstSignContext.prototype.exitRule = function(listener) {
    if(listener instanceof BracketsDestroyerListener ) {
        listener.exitFirstSign(this);
	}
};

FirstSignContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BracketsDestroyerVisitor ) {
        return visitor.visitFirstSign(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BracketsDestroyerParser.FirstSignContext = FirstSignContext;

BracketsDestroyerParser.prototype.firstSign = function() {

    var localctx = new FirstSignContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, BracketsDestroyerParser.RULE_firstSign);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 55;
        _la = this._input.LA(1);
        if(!(_la===BracketsDestroyerParser.MULTIPLY || _la===BracketsDestroyerParser.DIVIDE)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SecondSignContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BracketsDestroyerParser.RULE_secondSign;
    return this;
}

SecondSignContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SecondSignContext.prototype.constructor = SecondSignContext;

SecondSignContext.prototype.PLUS = function() {
    return this.getToken(BracketsDestroyerParser.PLUS, 0);
};

SecondSignContext.prototype.MINUS = function() {
    return this.getToken(BracketsDestroyerParser.MINUS, 0);
};

SecondSignContext.prototype.enterRule = function(listener) {
    if(listener instanceof BracketsDestroyerListener ) {
        listener.enterSecondSign(this);
	}
};

SecondSignContext.prototype.exitRule = function(listener) {
    if(listener instanceof BracketsDestroyerListener ) {
        listener.exitSecondSign(this);
	}
};

SecondSignContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BracketsDestroyerVisitor ) {
        return visitor.visitSecondSign(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BracketsDestroyerParser.SecondSignContext = SecondSignContext;

BracketsDestroyerParser.prototype.secondSign = function() {

    var localctx = new SecondSignContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, BracketsDestroyerParser.RULE_secondSign);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 57;
        _la = this._input.LA(1);
        if(!(_la===BracketsDestroyerParser.PLUS || _la===BracketsDestroyerParser.MINUS)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprGroupContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BracketsDestroyerParser.RULE_exprGroup;
    return this;
}

ExprGroupContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprGroupContext.prototype.constructor = ExprGroupContext;

ExprGroupContext.prototype.complexExpr = function() {
    return this.getTypedRuleContext(ComplexExprContext,0);
};

ExprGroupContext.prototype.enterRule = function(listener) {
    if(listener instanceof BracketsDestroyerListener ) {
        listener.enterExprGroup(this);
	}
};

ExprGroupContext.prototype.exitRule = function(listener) {
    if(listener instanceof BracketsDestroyerListener ) {
        listener.exitExprGroup(this);
	}
};

ExprGroupContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BracketsDestroyerVisitor ) {
        return visitor.visitExprGroup(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BracketsDestroyerParser.ExprGroupContext = ExprGroupContext;

BracketsDestroyerParser.prototype.exprGroup = function() {

    var localctx = new ExprGroupContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, BracketsDestroyerParser.RULE_exprGroup);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 59;
        this.match(BracketsDestroyerParser.T__0);
        this.state = 60;
        this.complexExpr(0);
        this.state = 61;
        this.match(BracketsDestroyerParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionElementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BracketsDestroyerParser.RULE_functionElement;
    return this;
}

FunctionElementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionElementContext.prototype.constructor = FunctionElementContext;

FunctionElementContext.prototype.FUNCTION_NAME = function() {
    return this.getToken(BracketsDestroyerParser.FUNCTION_NAME, 0);
};

FunctionElementContext.prototype.complexExpr = function() {
    return this.getTypedRuleContext(ComplexExprContext,0);
};

FunctionElementContext.prototype.enterRule = function(listener) {
    if(listener instanceof BracketsDestroyerListener ) {
        listener.enterFunctionElement(this);
	}
};

FunctionElementContext.prototype.exitRule = function(listener) {
    if(listener instanceof BracketsDestroyerListener ) {
        listener.exitFunctionElement(this);
	}
};

FunctionElementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BracketsDestroyerVisitor ) {
        return visitor.visitFunctionElement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BracketsDestroyerParser.FunctionElementContext = FunctionElementContext;

BracketsDestroyerParser.prototype.functionElement = function() {

    var localctx = new FunctionElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, BracketsDestroyerParser.RULE_functionElement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 63;
        this.match(BracketsDestroyerParser.FUNCTION_NAME);
        this.state = 64;
        this.match(BracketsDestroyerParser.T__0);
        this.state = 65;
        this.complexExpr(0);
        this.state = 66;
        this.match(BracketsDestroyerParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ElementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BracketsDestroyerParser.RULE_element;
    return this;
}

ElementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementContext.prototype.constructor = ElementContext;

ElementContext.prototype.NUMBER = function() {
    return this.getToken(BracketsDestroyerParser.NUMBER, 0);
};

ElementContext.prototype.VARIABLE = function() {
    return this.getToken(BracketsDestroyerParser.VARIABLE, 0);
};

ElementContext.prototype.enterRule = function(listener) {
    if(listener instanceof BracketsDestroyerListener ) {
        listener.enterElement(this);
	}
};

ElementContext.prototype.exitRule = function(listener) {
    if(listener instanceof BracketsDestroyerListener ) {
        listener.exitElement(this);
	}
};

ElementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BracketsDestroyerVisitor ) {
        return visitor.visitElement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BracketsDestroyerParser.ElementContext = ElementContext;

BracketsDestroyerParser.prototype.element = function() {

    var localctx = new ElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, BracketsDestroyerParser.RULE_element);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 68;
        _la = this._input.LA(1);
        if(!(_la===BracketsDestroyerParser.NUMBER || _la===BracketsDestroyerParser.VARIABLE)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


BracketsDestroyerParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 1:
			return this.complexExpr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

BracketsDestroyerParser.prototype.complexExpr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 4);
		case 1:
			return this.precpred(this._ctx, 3);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.BracketsDestroyerParser = BracketsDestroyerParser;
