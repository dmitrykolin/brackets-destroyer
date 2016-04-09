// Generated from D:/Projects/Math/brackets-destroyer/grammar\BracketsDestroyer.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\f@\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0006\u0004\u001d\n",
    "\u0004\r\u0004\u000e\u0004\u001e\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005-\n\u0005\u0003\u0006",
    "\u0006\u00060\n\u0006\r\u0006\u000e\u00061\u0003\u0007\u0006\u00075",
    "\n\u0007\r\u0007\u000e\u00076\u0003\b\u0003\b\u0003\t\u0003\t\u0003",
    "\n\u0003\n\u0003\u000b\u0003\u000b\u0002\u0002\f\u0003\u0003\u0005\u0004",
    "\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015",
    "\f\u0003\u0002\u0005\u0004\u0002\f\f\u000f\u000f\u0003\u00022;\u0003",
    "\u0002c|F\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002",
    "\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002",
    "\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002",
    "\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002",
    "\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002",
    "\u0002\u0002\u0003\u0017\u0003\u0002\u0002\u0002\u0005\u0019\u0003\u0002",
    "\u0002\u0002\u0007\u001c\u0003\u0002\u0002\u0002\t,\u0003\u0002\u0002",
    "\u0002\u000b/\u0003\u0002\u0002\u0002\r4\u0003\u0002\u0002\u0002\u000f",
    "8\u0003\u0002\u0002\u0002\u0011:\u0003\u0002\u0002\u0002\u0013<\u0003",
    "\u0002\u0002\u0002\u0015>\u0003\u0002\u0002\u0002\u0017\u0018\u0007",
    "*\u0002\u0002\u0018\u0004\u0003\u0002\u0002\u0002\u0019\u001a\u0007",
    "+\u0002\u0002\u001a\u0006\u0003\u0002\u0002\u0002\u001b\u001d\t\u0002",
    "\u0002\u0002\u001c\u001b\u0003\u0002\u0002\u0002\u001d\u001e\u0003\u0002",
    "\u0002\u0002\u001e\u001c\u0003\u0002\u0002\u0002\u001e\u001f\u0003\u0002",
    "\u0002\u0002\u001f\b\u0003\u0002\u0002\u0002 !\u0007u\u0002\u0002!\"",
    "\u0007k\u0002\u0002\"-\u0007p\u0002\u0002#$\u0007e\u0002\u0002$%\u0007",
    "q\u0002\u0002%-\u0007u\u0002\u0002&\'\u0007v\u0002\u0002\'-\u0007i\u0002",
    "\u0002()\u0007n\u0002\u0002)-\u0007i\u0002\u0002*+\u0007n\u0002\u0002",
    "+-\u0007p\u0002\u0002, \u0003\u0002\u0002\u0002,#\u0003\u0002\u0002",
    "\u0002,&\u0003\u0002\u0002\u0002,(\u0003\u0002\u0002\u0002,*\u0003\u0002",
    "\u0002\u0002-\n\u0003\u0002\u0002\u0002.0\t\u0003\u0002\u0002/.\u0003",
    "\u0002\u0002\u000201\u0003\u0002\u0002\u00021/\u0003\u0002\u0002\u0002",
    "12\u0003\u0002\u0002\u00022\f\u0003\u0002\u0002\u000235\t\u0004\u0002",
    "\u000243\u0003\u0002\u0002\u000256\u0003\u0002\u0002\u000264\u0003\u0002",
    "\u0002\u000267\u0003\u0002\u0002\u00027\u000e\u0003\u0002\u0002\u0002",
    "89\u0007-\u0002\u00029\u0010\u0003\u0002\u0002\u0002:;\u0007/\u0002",
    "\u0002;\u0012\u0003\u0002\u0002\u0002<=\u0007,\u0002\u0002=\u0014\u0003",
    "\u0002\u0002\u0002>?\u00071\u0002\u0002?\u0016\u0003\u0002\u0002\u0002",
    "\u0007\u0002\u001e,16\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function BracketsDestroyerLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

BracketsDestroyerLexer.prototype = Object.create(antlr4.Lexer.prototype);
BracketsDestroyerLexer.prototype.constructor = BracketsDestroyerLexer;

BracketsDestroyerLexer.EOF = antlr4.Token.EOF;
BracketsDestroyerLexer.T__0 = 1;
BracketsDestroyerLexer.T__1 = 2;
BracketsDestroyerLexer.NEWLINE = 3;
BracketsDestroyerLexer.FUNCTION_NAME = 4;
BracketsDestroyerLexer.NUMBER = 5;
BracketsDestroyerLexer.VAR = 6;
BracketsDestroyerLexer.PLUS = 7;
BracketsDestroyerLexer.MINUS = 8;
BracketsDestroyerLexer.MULTIPLY = 9;
BracketsDestroyerLexer.DIVIDE = 10;


BracketsDestroyerLexer.modeNames = [ "DEFAULT_MODE" ];

BracketsDestroyerLexer.literalNames = [ 'null', "'('", "')'", 'null', 'null', 
                                        'null', 'null', "'+'", "'-'", "'*'", 
                                        "'/'" ];

BracketsDestroyerLexer.symbolicNames = [ 'null', 'null', 'null', "NEWLINE", 
                                         "FUNCTION_NAME", "NUMBER", "VAR", 
                                         "PLUS", "MINUS", "MULTIPLY", "DIVIDE" ];

BracketsDestroyerLexer.ruleNames = [ "T__0", "T__1", "NEWLINE", "FUNCTION_NAME", 
                                     "NUMBER", "VAR", "PLUS", "MINUS", "MULTIPLY", 
                                     "DIVIDE" ];

BracketsDestroyerLexer.grammarFileName = "BracketsDestroyer.g4";



exports.BracketsDestroyerLexer = BracketsDestroyerLexer;

