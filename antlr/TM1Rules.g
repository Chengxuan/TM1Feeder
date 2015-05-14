grammar TM1Rules;

options { 
	output=AST;
	language=JavaScript;
}
tokens { 
	RULE_FILE; RULES; RULE_DEF; PRAGMA; FEEDER_DEF; LEVEL_EXPR; N_LEVEL; C_LEVEL; S_LEVEL;
	AREA_DEFN; AREA_SCOPE; AREA_ITEM_SET; 
	FUNCTION; EXPR_LIST;
	CONTINUE; STET; FEEDERS; SKIPCHECK; UNDEFVALS; FEEDSTRINGS; 
	STRING; IDENTIFIER; NUMBER; BANG_IDENTIFIER;	
} // imaginary tokens

ruleFile  : rules feeders? -> ^(RULE_FILE ^(RULES rules) ^(FEEDERS feeders?)) ;
rules : (pragma | ruleDef)* ;
feeders : kwFeeders! ';'! feederDef* ;
pragma : pragmaItem ';' -> ^(PRAGMA pragmaItem);
pragmaItem : kwSkipcheck | kwUndefvals | kwFeedstrings ;

ruleDef : areaDefn '=' ruleBody -> ^(RULE_DEF areaDefn ruleBody);
ruleBody : expr ';'! | levelExpr+ ;
levelExpr : level ':' expr ';' -> ^(LEVEL_EXPR level expr);

level : ('N'|'n') -> ^(N_LEVEL)
	  | ('S'|'s') -> ^(S_LEVEL)
	  | ('C'|'c') -> ^(C_LEVEL)
	  ;

feederDef : areaDefn '=>' exprList ';' -> ^(FEEDER_DEF areaDefn exprList) ; 

expr : expr7 ;
expr7 : expr6 ('%'^ expr6)* ;
expr6 : expr5 ('&'^ expr5)* ;
expr5 : expr4 (
		 '='^ expr4 |  '<>'^ expr4 |  '>'^ expr4 |  '<'^ expr4 |  '<='^ expr4 |  '>='^ expr4 |
		'@='^ expr4 | '@<>'^ expr4 | '@>'^ expr4 | '@<'^ expr4 | '@<='^ expr4 | '@>='^ expr4
	)?;
expr4 : expr3 ('+'^ expr3 | '-'^ expr3 | '|'^ expr3)* ;
expr3 : expr2 ('*'^ expr2 | '/'^ expr2 | '\\'^ expr2)* ;
expr2 : expr1 ('^'^ expr2)? ;
expr1 : '+'^ expr1 | '-'^ expr1 | '~'^ expr1 | expr0 ;
expr0 : number | string | bang_identifier | '('! expr ')'! | function | areaDefn | kwContinue | kwStet ;

function : identifier '(' exprList? ')' -> ^(FUNCTION identifier exprList?);


areaDefn : '[' areaScopedItems? ']' -> ^(AREA_DEFN areaScopedItems?) ;
areaScopedItems : areaScopedItem (','! areaScopedItem)* ;
areaScopedItem : 
	  areaScope ':' areaItemBody -> ^(AREA_SCOPE areaScope areaItemBody)
	| areaItemBody 
	;
areaItemBody : string | areaItemSet ;
areaScope : identifier | string ;
areaItemSet : '{' strings? '}' -> ^(AREA_ITEM_SET strings?) ;

exprList : exprs -> ^(EXPR_LIST exprs);
exprs : expr (','! expr)* ;
strings : string (','! string)* ;

//==========================================================================

kwContinue : T_CONTINUE -> ^(CONTINUE) ;
kwStet : T_STET -> ^(STET) ;
kwFeeders : T_FEEDERS -> ^(FEEDERS) ;
kwSkipcheck : T_SKIPCHECK -> ^(SKIPCHECK) ;
kwUndefvals : T_UNDEFVALS -> ^(UNDEFVALS) ;
kwFeedstrings : T_FEEDSTRINGS -> ^(FEEDSTRINGS) ;

identifier : T_IDENTIFIER -> ^(IDENTIFIER T_IDENTIFIER) ;
bang_identifier : T_BANG_IDENTIFIER -> ^(BANG_IDENTIFIER T_BANG_IDENTIFIER) ;
number : T_NUMBER -> ^(NUMBER T_NUMBER) ;
string : T_STRING -> ^(STRING T_STRING) ; 

//==========================================================================

T_CONTINUE : ('C'|'c')('O'|'o')('N'|'n')('T'|'t')('I'|'i')('N'|'n')('U'|'u')('E'|'e') ;
T_STET : ('S'|'s')('T'|'t')('E'|'e')('T'|'t') ;
T_FEEDERS : ('F'|'f')('E'|'e')('E'|'e')('D'|'d')('E'|'e')('R'|'r')('S'|'s') ;
T_SKIPCHECK : ('S'|'s')('K'|'k')('I'|'i')('P'|'p')('C'|'c')('H'|'h')('E'|'e')('C'|'c')('K'|'k') ;
T_UNDEFVALS : ('U'|'u')('N'|'n')('D'|'d')('E'|'e')('F'|'f')('V'|'v')('A'|'a')('L'|'l')('S'|'s') ;
T_FEEDSTRINGS : ('F'|'f')('E'|'e')('E'|'e')('D'|'d')('S'|'s')('T'|'t')('R'|'r')('I'|'i')('N'|'n')('G'|'g')('S'|'s') ;

T_IDENTIFIER : ('a'..'z' | 'A'..'Z' | '_')+ ;         
T_BANG_IDENTIFIER : '!' ~(')'|','|';'|'|'|'@'|'\\'|'/'|':'|'*'|'?'|'"'|'<'|'>')+ ;
T_NUMBER : ('0'..'9')* ('.' ('0'..'9')*)? (('e'|'E') ('+'|'-')? ('0'..'9')*)? ;
T_STRING : '\'' ('\'\''|~'\'')* '\'' ;

//COMMENT : '#' ~('\n')* { $channel=HIDDEN; } ; // skip comments
//WS:(' '|'\t'|'\r'|'\n')+{ $channel=HIDDEN; } ; // skip spaces, tabs, newlines

