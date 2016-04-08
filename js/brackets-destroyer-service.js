var bdLexer = require('./grammar/BracketsDestroyerLexer.js');
var bdParser = require('./grammar/BracketsDestroyerParser.js');
var bdVisitor = require('./grammar/BracketsDestroyerVisitor.js');
var antlr4 = require('antlr4/index.js');

var expressionUtils = require('./grammar-utils.js').expressionUtils;
var expressionPickedBracketsPrinter = require('./expression-picked-brackets-printer.js').printer;
var expressionAnalyzedPrinter = require('./expression-analyzed-printer.js').analyzer;
var expressionAnalyzer = require('./expression-analyzer.js').analyzer;
var groupCalculator = require('./expression-group-calculator.js').groupCalculator;

var service = {
    version: "1.0.0",
    data: {
        progress: 0,
        groupCount: 0,
        initialExpression: "",
        currentExpression: "",
        expressionPhases: [],
        done: false,
        error: false,
        errorText: null
    },
    calculator: new groupCalculator(),
    calculateGroupCount: function (tree) {
        antlr4.tree.ParseTreeWalker.DEFAULT.walk(this.calculator, tree);
        return this.calculator.count;
    },
    tree: null,
    initialize: function (expression) {
        console.log('initialize expression with: ' + expression);
        var simplifiedExpression = expressionUtils.simplifyExpression(expression);

        this.data.initialExpression = expression;
        this.data.currentExpression = simplifiedExpression;
        this.data.expressionPhases = [{text: simplifiedExpression}];

        var initialized = this.initializeParser(this.data.currentExpression);
        if (!initialized) {
            this.data.done = false;
            this.data.error = true;
            this.data.errorText = "parsing error";
        } else {
            this.data.error = false;
            this.data.errorText = null;

            this.data.groupCount = this.calculateGroupCount(this.tree);

            if (this.data.groupCount > 0) {
                this.data.progress = 0;
                this.data.done = false;
            } else {
                this.data.progress = 100;
                this.data.done = true;
            }
        }
    },
    initializeParser: function (expression) {
        this.tree = null;

        var chars = new antlr4.InputStream(expression);
        var lexer = new bdLexer.BracketsDestroyerLexer(chars);
        var tokens  = new antlr4.CommonTokenStream(lexer);
        var parser = new bdParser.BracketsDestroyerParser(tokens);

        parser.buildParseTrees = true;
        try {
            this.tree = parser.mathExpr();
            if (this.tree.parser._syntaxErrors && this.tree.parser._syntaxErrors > 0) {
                console.log("exception while parsing expression");
                return false;
            }
            return true;
        } catch (parseError) {
            console.log("exception while parsing expression");
            console.log(parseError);
            return false;
        }
    },
    breakBrackets: function () {
        if (this.data.done) {
            console.log("complete");
        } else {
            var initialized = this.initializeParser(this.data.currentExpression);
            if (!initialized) {
                this.data.done = false;
                this.data.error = true;
                this.data.errorText = "parsing error";
            } else {
                this.data.error = false;
                this.data.errorText = null;

                var analyzer = new expressionAnalyzer();
                var analyzedPrinter = new expressionAnalyzedPrinter();
                var pickedBracketsPrinter = new expressionPickedBracketsPrinter();

                this.tree.pickedBrackets = false;

                antlr4.tree.ParseTreeWalker.DEFAULT.walk(analyzer, this.tree);
                antlr4.tree.ParseTreeWalker.DEFAULT.walk(pickedBracketsPrinter, this.tree);
                if (this.data.expressionPhases.length > 0) {
                    var el = this.data.expressionPhases[this.data.expressionPhases.length-1];
                    el.pickedBracketsView = pickedBracketsPrinter.out;
                }
                antlr4.tree.ParseTreeWalker.DEFAULT.walk(analyzedPrinter, this.tree);

                var newExpression = analyzedPrinter.out;
                if (this.initializeParser(newExpression)) {
                    var groupCount = this.calculateGroupCount(this.tree);
                    if (groupCount === 0) {
                        //finished
                        this.data.done = true;
                        this.data.progress = 100;
                        this.data.currentExpression = newExpression;
                        this.data.expressionPhases.push({text: newExpression});
                    } else if (groupCount > 0 && this.data.currentExpression === newExpression) {
                        this.data.error = true;
                        this.data.errorText = "analyzing error";
                    } else {
                        this.data.currentExpression = newExpression;
                        this.data.expressionPhases.push({text: newExpression});
                    }
                } else {
                    this.data.done = false;
                    this.data.error = true;
                    this.data.errorText = "parsing error";
                }
            }
        }
    }
};

exports.service = service;