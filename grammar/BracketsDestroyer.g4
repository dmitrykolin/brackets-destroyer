grammar BracketsDestroyer;

mathExpr
    :   (complexExpr NEWLINE)*
    |   complexExpr
    ;

NEWLINE
    :   [\r\n]+
    ;

complexExpr
    :   complexExpr firstSign complexExpr
    |   complexExpr secondSign complexExpr
    |   negativeExpr
    |   atomicExpr
    ;

    negativeExpr
    :   MINUS atomicExpr
    ;

atomicExpr
    :   functionElement
    |   exprGroup
    |   element
    ;

firstSign
    :   (MULTIPLY|DIVIDE)
    ;

MULTIPLY
    :   '*';

DIVIDE
    :   '/';


secondSign
    :   (PLUS|MINUS)
    ;

PLUS
    :   '+';

MINUS
    :   '-';

exprGroup
    :   '(' complexExpr ')'
    ;

functionElement
    :   FUNCTION_NAME '(' complexExpr ')'
    ;

FUNCTION_NAME
    :   [a-z]+
    ;

element
    :   NUMBER
    |   VARIABLE
    ;

NUMBER
    :   [0-9]+
    ;

VARIABLE
    :   [a-z]+
    ;