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

FUNCTION_NAME
    :   'sin'
    |   'cos'
    |   'tg'
    |   'lg'
    |   'ln'
    ;

NUMBER
    :   [0-9]+
    ;

VAR
    :   [a-z]+
    ;

PLUS
    :   '+';

MINUS
    :   '-';

MULTIPLY
    :   '*';

DIVIDE
    :   '/';

firstSign
    :   (MULTIPLY|DIVIDE)
    ;

secondSign
    :   (PLUS|MINUS)
    ;

exprGroup
    :   '(' complexExpr ')'
    ;

functionElement
    :   FUNCTION_NAME '(' complexExpr ')'
    ;

element
    :   VAR
    |   NUMBER
    ;