// Generated from D:/Projects/Math/antlr_gr/BracketsDestoyer/grammar\BracketsDestroyer.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by BracketsDestroyerParser.

function BracketsDestroyerVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

BracketsDestroyerVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
BracketsDestroyerVisitor.prototype.constructor = BracketsDestroyerVisitor;

// Visit a parse tree produced by BracketsDestroyerParser#mathExpr.
BracketsDestroyerVisitor.prototype.visitMathExpr = function(ctx) {
};


// Visit a parse tree produced by BracketsDestroyerParser#complexExpr.
BracketsDestroyerVisitor.prototype.visitComplexExpr = function(ctx) {
};


// Visit a parse tree produced by BracketsDestroyerParser#negativeExpr.
BracketsDestroyerVisitor.prototype.visitNegativeExpr = function(ctx) {
};


// Visit a parse tree produced by BracketsDestroyerParser#atomicExpr.
BracketsDestroyerVisitor.prototype.visitAtomicExpr = function(ctx) {
};


// Visit a parse tree produced by BracketsDestroyerParser#firstSign.
BracketsDestroyerVisitor.prototype.visitFirstSign = function(ctx) {
};


// Visit a parse tree produced by BracketsDestroyerParser#secondSign.
BracketsDestroyerVisitor.prototype.visitSecondSign = function(ctx) {
};


// Visit a parse tree produced by BracketsDestroyerParser#exprGroup.
BracketsDestroyerVisitor.prototype.visitExprGroup = function(ctx) {
};


// Visit a parse tree produced by BracketsDestroyerParser#functionElement.
BracketsDestroyerVisitor.prototype.visitFunctionElement = function(ctx) {
};


// Visit a parse tree produced by BracketsDestroyerParser#element.
BracketsDestroyerVisitor.prototype.visitElement = function(ctx) {
};



exports.BracketsDestroyerVisitor = BracketsDestroyerVisitor;