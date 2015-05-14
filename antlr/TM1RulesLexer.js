// $ANTLR 3.3 Nov 30, 2010 12:50:56 TM1Rules.g 2015-05-14 13:28:48

var TM1RulesLexer = function(input, state) {
// alternate constructor @todo
// public TM1RulesLexer(CharStream input)
// public TM1RulesLexer(CharStream input, RecognizerSharedState state) {
    if (!state) {
        state = new org.antlr.runtime.RecognizerSharedState();
    }

    (function(){
    }).call(this);

    this.dfa10 = new TM1RulesLexer.DFA10(this);
    TM1RulesLexer.superclass.constructor.call(this, input, state);


};

org.antlr.lang.augmentObject(TM1RulesLexer, {
    EOF: -1,
    T__38: 38,
    T__39: 39,
    T__40: 40,
    T__41: 41,
    T__42: 42,
    T__43: 43,
    T__44: 44,
    T__45: 45,
    T__46: 46,
    T__47: 47,
    T__48: 48,
    T__49: 49,
    T__50: 50,
    T__51: 51,
    T__52: 52,
    T__53: 53,
    T__54: 54,
    T__55: 55,
    T__56: 56,
    T__57: 57,
    T__58: 58,
    T__59: 59,
    T__60: 60,
    T__61: 61,
    T__62: 62,
    T__63: 63,
    T__64: 64,
    T__65: 65,
    T__66: 66,
    T__67: 67,
    T__68: 68,
    T__69: 69,
    T__70: 70,
    T__71: 71,
    T__72: 72,
    T__73: 73,
    T__74: 74,
    T__75: 75,
    RULE_FILE: 4,
    RULES: 5,
    RULE_DEF: 6,
    PRAGMA: 7,
    FEEDER_DEF: 8,
    LEVEL_EXPR: 9,
    N_LEVEL: 10,
    C_LEVEL: 11,
    S_LEVEL: 12,
    AREA_DEFN: 13,
    AREA_SCOPE: 14,
    AREA_ITEM_SET: 15,
    FUNCTION: 16,
    EXPR_LIST: 17,
    CONTINUE: 18,
    STET: 19,
    FEEDERS: 20,
    SKIPCHECK: 21,
    UNDEFVALS: 22,
    FEEDSTRINGS: 23,
    STRING: 24,
    IDENTIFIER: 25,
    NUMBER: 26,
    BANG_IDENTIFIER: 27,
    T_CONTINUE: 28,
    T_STET: 29,
    T_FEEDERS: 30,
    T_SKIPCHECK: 31,
    T_UNDEFVALS: 32,
    T_FEEDSTRINGS: 33,
    T_IDENTIFIER: 34,
    T_BANG_IDENTIFIER: 35,
    T_NUMBER: 36,
    T_STRING: 37
});

(function(){
var HIDDEN = org.antlr.runtime.Token.HIDDEN_CHANNEL,
    EOF = org.antlr.runtime.Token.EOF;
org.antlr.lang.extend(TM1RulesLexer, org.antlr.runtime.Lexer, {
    EOF : -1,
    T__38 : 38,
    T__39 : 39,
    T__40 : 40,
    T__41 : 41,
    T__42 : 42,
    T__43 : 43,
    T__44 : 44,
    T__45 : 45,
    T__46 : 46,
    T__47 : 47,
    T__48 : 48,
    T__49 : 49,
    T__50 : 50,
    T__51 : 51,
    T__52 : 52,
    T__53 : 53,
    T__54 : 54,
    T__55 : 55,
    T__56 : 56,
    T__57 : 57,
    T__58 : 58,
    T__59 : 59,
    T__60 : 60,
    T__61 : 61,
    T__62 : 62,
    T__63 : 63,
    T__64 : 64,
    T__65 : 65,
    T__66 : 66,
    T__67 : 67,
    T__68 : 68,
    T__69 : 69,
    T__70 : 70,
    T__71 : 71,
    T__72 : 72,
    T__73 : 73,
    T__74 : 74,
    T__75 : 75,
    RULE_FILE : 4,
    RULES : 5,
    RULE_DEF : 6,
    PRAGMA : 7,
    FEEDER_DEF : 8,
    LEVEL_EXPR : 9,
    N_LEVEL : 10,
    C_LEVEL : 11,
    S_LEVEL : 12,
    AREA_DEFN : 13,
    AREA_SCOPE : 14,
    AREA_ITEM_SET : 15,
    FUNCTION : 16,
    EXPR_LIST : 17,
    CONTINUE : 18,
    STET : 19,
    FEEDERS : 20,
    SKIPCHECK : 21,
    UNDEFVALS : 22,
    FEEDSTRINGS : 23,
    STRING : 24,
    IDENTIFIER : 25,
    NUMBER : 26,
    BANG_IDENTIFIER : 27,
    T_CONTINUE : 28,
    T_STET : 29,
    T_FEEDERS : 30,
    T_SKIPCHECK : 31,
    T_UNDEFVALS : 32,
    T_FEEDSTRINGS : 33,
    T_IDENTIFIER : 34,
    T_BANG_IDENTIFIER : 35,
    T_NUMBER : 36,
    T_STRING : 37,
    getGrammarFileName: function() { return "TM1Rules.g"; }
});
org.antlr.lang.augmentObject(TM1RulesLexer.prototype, {
    // $ANTLR start T__38
    mT__38: function()  {
        try {
            var _type = this.T__38;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TM1Rules.g:7:7: ( ';' )
            // TM1Rules.g:7:9: ';'
            this.match(';'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__38",

    // $ANTLR start T__39
    mT__39: function()  {
        try {
            var _type = this.T__39;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TM1Rules.g:8:7: ( '=' )
            // TM1Rules.g:8:9: '='
            this.match('='); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__39",

    // $ANTLR start T__40
    mT__40: function()  {
        try {
            var _type = this.T__40;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TM1Rules.g:9:7: ( ':' )
            // TM1Rules.g:9:9: ':'
            this.match(':'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__40",

    // $ANTLR start T__41
    mT__41: function()  {
        try {
            var _type = this.T__41;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TM1Rules.g:10:7: ( 'N' )
            // TM1Rules.g:10:9: 'N'
            this.match('N'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__41",

    // $ANTLR start T__42
    mT__42: function()  {
        try {
            var _type = this.T__42;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TM1Rules.g:11:7: ( 'n' )
            // TM1Rules.g:11:9: 'n'
            this.match('n'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__42",

    // $ANTLR start T__43
    mT__43: function()  {
        try {
            var _type = this.T__43;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TM1Rules.g:12:7: ( 'S' )
            // TM1Rules.g:12:9: 'S'
            this.match('S'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__43",

    // $ANTLR start T__44
    mT__44: function()  {
        try {
            var _type = this.T__44;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TM1Rules.g:13:7: ( 's' )
            // TM1Rules.g:13:9: 's'
            this.match('s'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__44",

    // $ANTLR start T__45
    mT__45: function()  {
        try {
            var _type = this.T__45;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TM1Rules.g:14:7: ( 'C' )
            // TM1Rules.g:14:9: 'C'
            this.match('C'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__45",

    // $ANTLR start T__46
    mT__46: function()  {
        try {
            var _type = this.T__46;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TM1Rules.g:15:7: ( 'c' )
            // TM1Rules.g:15:9: 'c'
            this.match('c'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__46",

    // $ANTLR start T__47
    mT__47: function()  {
        try {
            var _type = this.T__47;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TM1Rules.g:16:7: ( '=>' )
            // TM1Rules.g:16:9: '=>'
            this.match("=>"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__47",

    // $ANTLR start T__48
    mT__48: function()  {
        try {
            var _type = this.T__48;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TM1Rules.g:17:7: ( '%' )
            // TM1Rules.g:17:9: '%'
            this.match('%'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__48",

    // $ANTLR start T__49
    mT__49: function()  {
        try {
            var _type = this.T__49;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TM1Rules.g:18:7: ( '&' )
            // TM1Rules.g:18:9: '&'
            this.match('&'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__49",

    // $ANTLR start T__50
    mT__50: function()  {
        try {
            var _type = this.T__50;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TM1Rules.g:19:7: ( '<>' )
            // TM1Rules.g:19:9: '<>'
            this.match("<>"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__50",

    // $ANTLR start T__51
    mT__51: function()  {
        try {
            var _type = this.T__51;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TM1Rules.g:20:7: ( '>' )
            // TM1Rules.g:20:9: '>'
            this.match('>'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__51",

    // $ANTLR start T__52
    mT__52: function()  {
        try {
            var _type = this.T__52;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TM1Rules.g:21:7: ( '<' )
            // TM1Rules.g:21:9: '<'
            this.match('<'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__52",

    // $ANTLR start T__53
    mT__53: function()  {
        try {
            var _type = this.T__53;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TM1Rules.g:22:7: ( '<=' )
            // TM1Rules.g:22:9: '<='
            this.match("<="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__53",

    // $ANTLR start T__54
    mT__54: function()  {
        try {
            var _type = this.T__54;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TM1Rules.g:23:7: ( '>=' )
            // TM1Rules.g:23:9: '>='
            this.match(">="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__54",

    // $ANTLR start T__55
    mT__55: function()  {
        try {
            var _type = this.T__55;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TM1Rules.g:24:7: ( '@=' )
            // TM1Rules.g:24:9: '@='
            this.match("@="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__55",

    // $ANTLR start T__56
    mT__56: function()  {
        try {
            var _type = this.T__56;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TM1Rules.g:25:7: ( '@<>' )
            // TM1Rules.g:25:9: '@<>'
            this.match("@<>"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__56",

    // $ANTLR start T__57
    mT__57: function()  {
        try {
            var _type = this.T__57;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TM1Rules.g:26:7: ( '@>' )
            // TM1Rules.g:26:9: '@>'
            this.match("@>"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__57",

    // $ANTLR start T__58
    mT__58: function()  {
        try {
            var _type = this.T__58;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TM1Rules.g:27:7: ( '@<' )
            // TM1Rules.g:27:9: '@<'
            this.match("@<"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__58",

    // $ANTLR start T__59
    mT__59: function()  {
        try {
            var _type = this.T__59;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TM1Rules.g:28:7: ( '@<=' )
            // TM1Rules.g:28:9: '@<='
            this.match("@<="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__59",

    // $ANTLR start T__60
    mT__60: function()  {
        try {
            var _type = this.T__60;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TM1Rules.g:29:7: ( '@>=' )
            // TM1Rules.g:29:9: '@>='
            this.match("@>="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__60",

    // $ANTLR start T__61
    mT__61: function()  {
        try {
            var _type = this.T__61;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TM1Rules.g:30:7: ( '+' )
            // TM1Rules.g:30:9: '+'
            this.match('+'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__61",

    // $ANTLR start T__62
    mT__62: function()  {
        try {
            var _type = this.T__62;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TM1Rules.g:31:7: ( '-' )
            // TM1Rules.g:31:9: '-'
            this.match('-'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__62",

    // $ANTLR start T__63
    mT__63: function()  {
        try {
            var _type = this.T__63;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TM1Rules.g:32:7: ( '|' )
            // TM1Rules.g:32:9: '|'
            this.match('|'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__63",

    // $ANTLR start T__64
    mT__64: function()  {
        try {
            var _type = this.T__64;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TM1Rules.g:33:7: ( '*' )
            // TM1Rules.g:33:9: '*'
            this.match('*'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__64",

    // $ANTLR start T__65
    mT__65: function()  {
        try {
            var _type = this.T__65;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TM1Rules.g:34:7: ( '/' )
            // TM1Rules.g:34:9: '/'
            this.match('/'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__65",

    // $ANTLR start T__66
    mT__66: function()  {
        try {
            var _type = this.T__66;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TM1Rules.g:35:7: ( '\\\\' )
            // TM1Rules.g:35:9: '\\\\'
            this.match('\\'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__66",

    // $ANTLR start T__67
    mT__67: function()  {
        try {
            var _type = this.T__67;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TM1Rules.g:36:7: ( '^' )
            // TM1Rules.g:36:9: '^'
            this.match('^'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__67",

    // $ANTLR start T__68
    mT__68: function()  {
        try {
            var _type = this.T__68;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TM1Rules.g:37:7: ( '~' )
            // TM1Rules.g:37:9: '~'
            this.match('~'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__68",

    // $ANTLR start T__69
    mT__69: function()  {
        try {
            var _type = this.T__69;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TM1Rules.g:38:7: ( '(' )
            // TM1Rules.g:38:9: '('
            this.match('('); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__69",

    // $ANTLR start T__70
    mT__70: function()  {
        try {
            var _type = this.T__70;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TM1Rules.g:39:7: ( ')' )
            // TM1Rules.g:39:9: ')'
            this.match(')'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__70",

    // $ANTLR start T__71
    mT__71: function()  {
        try {
            var _type = this.T__71;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TM1Rules.g:40:7: ( '[' )
            // TM1Rules.g:40:9: '['
            this.match('['); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__71",

    // $ANTLR start T__72
    mT__72: function()  {
        try {
            var _type = this.T__72;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TM1Rules.g:41:7: ( ']' )
            // TM1Rules.g:41:9: ']'
            this.match(']'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__72",

    // $ANTLR start T__73
    mT__73: function()  {
        try {
            var _type = this.T__73;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TM1Rules.g:42:7: ( ',' )
            // TM1Rules.g:42:9: ','
            this.match(','); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__73",

    // $ANTLR start T__74
    mT__74: function()  {
        try {
            var _type = this.T__74;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TM1Rules.g:43:7: ( '{' )
            // TM1Rules.g:43:9: '{'
            this.match('{'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__74",

    // $ANTLR start T__75
    mT__75: function()  {
        try {
            var _type = this.T__75;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TM1Rules.g:44:7: ( '}' )
            // TM1Rules.g:44:9: '}'
            this.match('}'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__75",

    // $ANTLR start T_CONTINUE
    mT_CONTINUE: function()  {
        try {
            var _type = this.T_CONTINUE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TM1Rules.g:78:12: ( ( 'C' | 'c' ) ( 'O' | 'o' ) ( 'N' | 'n' ) ( 'T' | 't' ) ( 'I' | 'i' ) ( 'N' | 'n' ) ( 'U' | 'u' ) ( 'E' | 'e' ) )
            // TM1Rules.g:78:14: ( 'C' | 'c' ) ( 'O' | 'o' ) ( 'N' | 'n' ) ( 'T' | 't' ) ( 'I' | 'i' ) ( 'N' | 'n' ) ( 'U' | 'u' ) ( 'E' | 'e' )
            if ( this.input.LA(1)=='C'||this.input.LA(1)=='c' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            if ( this.input.LA(1)=='O'||this.input.LA(1)=='o' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            if ( this.input.LA(1)=='N'||this.input.LA(1)=='n' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            if ( this.input.LA(1)=='T'||this.input.LA(1)=='t' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            if ( this.input.LA(1)=='I'||this.input.LA(1)=='i' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            if ( this.input.LA(1)=='N'||this.input.LA(1)=='n' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            if ( this.input.LA(1)=='U'||this.input.LA(1)=='u' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            if ( this.input.LA(1)=='E'||this.input.LA(1)=='e' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T_CONTINUE",

    // $ANTLR start T_STET
    mT_STET: function()  {
        try {
            var _type = this.T_STET;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TM1Rules.g:79:8: ( ( 'S' | 's' ) ( 'T' | 't' ) ( 'E' | 'e' ) ( 'T' | 't' ) )
            // TM1Rules.g:79:10: ( 'S' | 's' ) ( 'T' | 't' ) ( 'E' | 'e' ) ( 'T' | 't' )
            if ( this.input.LA(1)=='S'||this.input.LA(1)=='s' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            if ( this.input.LA(1)=='T'||this.input.LA(1)=='t' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            if ( this.input.LA(1)=='E'||this.input.LA(1)=='e' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            if ( this.input.LA(1)=='T'||this.input.LA(1)=='t' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T_STET",

    // $ANTLR start T_FEEDERS
    mT_FEEDERS: function()  {
        try {
            var _type = this.T_FEEDERS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TM1Rules.g:80:11: ( ( 'F' | 'f' ) ( 'E' | 'e' ) ( 'E' | 'e' ) ( 'D' | 'd' ) ( 'E' | 'e' ) ( 'R' | 'r' ) ( 'S' | 's' ) )
            // TM1Rules.g:80:13: ( 'F' | 'f' ) ( 'E' | 'e' ) ( 'E' | 'e' ) ( 'D' | 'd' ) ( 'E' | 'e' ) ( 'R' | 'r' ) ( 'S' | 's' )
            if ( this.input.LA(1)=='F'||this.input.LA(1)=='f' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            if ( this.input.LA(1)=='E'||this.input.LA(1)=='e' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            if ( this.input.LA(1)=='E'||this.input.LA(1)=='e' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            if ( this.input.LA(1)=='D'||this.input.LA(1)=='d' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            if ( this.input.LA(1)=='E'||this.input.LA(1)=='e' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            if ( this.input.LA(1)=='R'||this.input.LA(1)=='r' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            if ( this.input.LA(1)=='S'||this.input.LA(1)=='s' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T_FEEDERS",

    // $ANTLR start T_SKIPCHECK
    mT_SKIPCHECK: function()  {
        try {
            var _type = this.T_SKIPCHECK;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TM1Rules.g:81:13: ( ( 'S' | 's' ) ( 'K' | 'k' ) ( 'I' | 'i' ) ( 'P' | 'p' ) ( 'C' | 'c' ) ( 'H' | 'h' ) ( 'E' | 'e' ) ( 'C' | 'c' ) ( 'K' | 'k' ) )
            // TM1Rules.g:81:15: ( 'S' | 's' ) ( 'K' | 'k' ) ( 'I' | 'i' ) ( 'P' | 'p' ) ( 'C' | 'c' ) ( 'H' | 'h' ) ( 'E' | 'e' ) ( 'C' | 'c' ) ( 'K' | 'k' )
            if ( this.input.LA(1)=='S'||this.input.LA(1)=='s' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            if ( this.input.LA(1)=='K'||this.input.LA(1)=='k' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            if ( this.input.LA(1)=='I'||this.input.LA(1)=='i' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            if ( this.input.LA(1)=='P'||this.input.LA(1)=='p' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            if ( this.input.LA(1)=='C'||this.input.LA(1)=='c' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            if ( this.input.LA(1)=='H'||this.input.LA(1)=='h' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            if ( this.input.LA(1)=='E'||this.input.LA(1)=='e' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            if ( this.input.LA(1)=='C'||this.input.LA(1)=='c' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            if ( this.input.LA(1)=='K'||this.input.LA(1)=='k' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T_SKIPCHECK",

    // $ANTLR start T_UNDEFVALS
    mT_UNDEFVALS: function()  {
        try {
            var _type = this.T_UNDEFVALS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TM1Rules.g:82:13: ( ( 'U' | 'u' ) ( 'N' | 'n' ) ( 'D' | 'd' ) ( 'E' | 'e' ) ( 'F' | 'f' ) ( 'V' | 'v' ) ( 'A' | 'a' ) ( 'L' | 'l' ) ( 'S' | 's' ) )
            // TM1Rules.g:82:15: ( 'U' | 'u' ) ( 'N' | 'n' ) ( 'D' | 'd' ) ( 'E' | 'e' ) ( 'F' | 'f' ) ( 'V' | 'v' ) ( 'A' | 'a' ) ( 'L' | 'l' ) ( 'S' | 's' )
            if ( this.input.LA(1)=='U'||this.input.LA(1)=='u' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            if ( this.input.LA(1)=='N'||this.input.LA(1)=='n' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            if ( this.input.LA(1)=='D'||this.input.LA(1)=='d' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            if ( this.input.LA(1)=='E'||this.input.LA(1)=='e' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            if ( this.input.LA(1)=='F'||this.input.LA(1)=='f' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            if ( this.input.LA(1)=='V'||this.input.LA(1)=='v' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            if ( this.input.LA(1)=='A'||this.input.LA(1)=='a' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            if ( this.input.LA(1)=='L'||this.input.LA(1)=='l' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            if ( this.input.LA(1)=='S'||this.input.LA(1)=='s' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T_UNDEFVALS",

    // $ANTLR start T_FEEDSTRINGS
    mT_FEEDSTRINGS: function()  {
        try {
            var _type = this.T_FEEDSTRINGS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TM1Rules.g:83:15: ( ( 'F' | 'f' ) ( 'E' | 'e' ) ( 'E' | 'e' ) ( 'D' | 'd' ) ( 'S' | 's' ) ( 'T' | 't' ) ( 'R' | 'r' ) ( 'I' | 'i' ) ( 'N' | 'n' ) ( 'G' | 'g' ) ( 'S' | 's' ) )
            // TM1Rules.g:83:17: ( 'F' | 'f' ) ( 'E' | 'e' ) ( 'E' | 'e' ) ( 'D' | 'd' ) ( 'S' | 's' ) ( 'T' | 't' ) ( 'R' | 'r' ) ( 'I' | 'i' ) ( 'N' | 'n' ) ( 'G' | 'g' ) ( 'S' | 's' )
            if ( this.input.LA(1)=='F'||this.input.LA(1)=='f' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            if ( this.input.LA(1)=='E'||this.input.LA(1)=='e' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            if ( this.input.LA(1)=='E'||this.input.LA(1)=='e' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            if ( this.input.LA(1)=='D'||this.input.LA(1)=='d' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            if ( this.input.LA(1)=='S'||this.input.LA(1)=='s' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            if ( this.input.LA(1)=='T'||this.input.LA(1)=='t' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            if ( this.input.LA(1)=='R'||this.input.LA(1)=='r' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            if ( this.input.LA(1)=='I'||this.input.LA(1)=='i' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            if ( this.input.LA(1)=='N'||this.input.LA(1)=='n' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            if ( this.input.LA(1)=='G'||this.input.LA(1)=='g' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            if ( this.input.LA(1)=='S'||this.input.LA(1)=='s' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T_FEEDSTRINGS",

    // $ANTLR start T_IDENTIFIER
    mT_IDENTIFIER: function()  {
        try {
            var _type = this.T_IDENTIFIER;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TM1Rules.g:85:14: ( ( 'a' .. 'z' | 'A' .. 'Z' | '_' )+ )
            // TM1Rules.g:85:16: ( 'a' .. 'z' | 'A' .. 'Z' | '_' )+
            // TM1Rules.g:85:16: ( 'a' .. 'z' | 'A' .. 'Z' | '_' )+
            var cnt1=0;
            loop1:
            do {
                var alt1=2;
                var LA1_0 = this.input.LA(1);

                if ( ((LA1_0>='A' && LA1_0<='Z')||LA1_0=='_'||(LA1_0>='a' && LA1_0<='z')) ) {
                    alt1=1;
                }


                switch (alt1) {
                case 1 :
                    // TM1Rules.g:
                    if ( (this.input.LA(1)>='A' && this.input.LA(1)<='Z')||this.input.LA(1)=='_'||(this.input.LA(1)>='a' && this.input.LA(1)<='z') ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

                default :
                    if ( cnt1 >= 1 ) {
                        break loop1;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(1, this.input);
                        throw eee;
                }
                cnt1++;
            } while (true);




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T_IDENTIFIER",

    // $ANTLR start T_BANG_IDENTIFIER
    mT_BANG_IDENTIFIER: function()  {
        try {
            var _type = this.T_BANG_IDENTIFIER;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TM1Rules.g:86:19: ( '!' (~ ( ')' | ',' | ';' | '|' | '@' | '\\\\' | '/' | ':' | '*' | '?' | '\"' | '<' | '>' ) )+ )
            // TM1Rules.g:86:21: '!' (~ ( ')' | ',' | ';' | '|' | '@' | '\\\\' | '/' | ':' | '*' | '?' | '\"' | '<' | '>' ) )+
            this.match('!'); 
            // TM1Rules.g:86:25: (~ ( ')' | ',' | ';' | '|' | '@' | '\\\\' | '/' | ':' | '*' | '?' | '\"' | '<' | '>' ) )+
            var cnt2=0;
            loop2:
            do {
                var alt2=2;
                var LA2_0 = this.input.LA(1);

                if ( ((LA2_0>='\u0000' && LA2_0<='!')||(LA2_0>='#' && LA2_0<='(')||LA2_0=='+'||(LA2_0>='-' && LA2_0<='.')||(LA2_0>='0' && LA2_0<='9')||LA2_0=='='||(LA2_0>='A' && LA2_0<='[')||(LA2_0>=']' && LA2_0<='{')||(LA2_0>='}' && LA2_0<='\uFFFF')) ) {
                    alt2=1;
                }


                switch (alt2) {
                case 1 :
                    // TM1Rules.g:86:25: ~ ( ')' | ',' | ';' | '|' | '@' | '\\\\' | '/' | ':' | '*' | '?' | '\"' | '<' | '>' )
                    if ( (this.input.LA(1)>='\u0000' && this.input.LA(1)<='!')||(this.input.LA(1)>='#' && this.input.LA(1)<='(')||this.input.LA(1)=='+'||(this.input.LA(1)>='-' && this.input.LA(1)<='.')||(this.input.LA(1)>='0' && this.input.LA(1)<='9')||this.input.LA(1)=='='||(this.input.LA(1)>='A' && this.input.LA(1)<='[')||(this.input.LA(1)>=']' && this.input.LA(1)<='{')||(this.input.LA(1)>='}' && this.input.LA(1)<='\uFFFF') ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

                default :
                    if ( cnt2 >= 1 ) {
                        break loop2;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(2, this.input);
                        throw eee;
                }
                cnt2++;
            } while (true);




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T_BANG_IDENTIFIER",

    // $ANTLR start T_NUMBER
    mT_NUMBER: function()  {
        try {
            var _type = this.T_NUMBER;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TM1Rules.g:87:10: ( ( '0' .. '9' )* ( '.' ( '0' .. '9' )* )? ( ( 'e' | 'E' ) ( '+' | '-' )? ( '0' .. '9' )* )? )
            // TM1Rules.g:87:12: ( '0' .. '9' )* ( '.' ( '0' .. '9' )* )? ( ( 'e' | 'E' ) ( '+' | '-' )? ( '0' .. '9' )* )?
            // TM1Rules.g:87:12: ( '0' .. '9' )*
            loop3:
            do {
                var alt3=2;
                var LA3_0 = this.input.LA(1);

                if ( ((LA3_0>='0' && LA3_0<='9')) ) {
                    alt3=1;
                }


                switch (alt3) {
                case 1 :
                    // TM1Rules.g:87:13: '0' .. '9'
                    this.matchRange('0','9'); 


                    break;

                default :
                    break loop3;
                }
            } while (true);

            // TM1Rules.g:87:24: ( '.' ( '0' .. '9' )* )?
            var alt5=2;
            var LA5_0 = this.input.LA(1);

            if ( (LA5_0=='.') ) {
                alt5=1;
            }
            switch (alt5) {
                case 1 :
                    // TM1Rules.g:87:25: '.' ( '0' .. '9' )*
                    this.match('.'); 
                    // TM1Rules.g:87:29: ( '0' .. '9' )*
                    loop4:
                    do {
                        var alt4=2;
                        var LA4_0 = this.input.LA(1);

                        if ( ((LA4_0>='0' && LA4_0<='9')) ) {
                            alt4=1;
                        }


                        switch (alt4) {
                        case 1 :
                            // TM1Rules.g:87:30: '0' .. '9'
                            this.matchRange('0','9'); 


                            break;

                        default :
                            break loop4;
                        }
                    } while (true);



                    break;

            }

            // TM1Rules.g:87:43: ( ( 'e' | 'E' ) ( '+' | '-' )? ( '0' .. '9' )* )?
            var alt8=2;
            var LA8_0 = this.input.LA(1);

            if ( (LA8_0=='E'||LA8_0=='e') ) {
                alt8=1;
            }
            switch (alt8) {
                case 1 :
                    // TM1Rules.g:87:44: ( 'e' | 'E' ) ( '+' | '-' )? ( '0' .. '9' )*
                    if ( this.input.LA(1)=='E'||this.input.LA(1)=='e' ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}

                    // TM1Rules.g:87:54: ( '+' | '-' )?
                    var alt6=2;
                    var LA6_0 = this.input.LA(1);

                    if ( (LA6_0=='+'||LA6_0=='-') ) {
                        alt6=1;
                    }
                    switch (alt6) {
                        case 1 :
                            // TM1Rules.g:
                            if ( this.input.LA(1)=='+'||this.input.LA(1)=='-' ) {
                                this.input.consume();

                            }
                            else {
                                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                                this.recover(mse);
                                throw mse;}



                            break;

                    }

                    // TM1Rules.g:87:65: ( '0' .. '9' )*
                    loop7:
                    do {
                        var alt7=2;
                        var LA7_0 = this.input.LA(1);

                        if ( ((LA7_0>='0' && LA7_0<='9')) ) {
                            alt7=1;
                        }


                        switch (alt7) {
                        case 1 :
                            // TM1Rules.g:87:66: '0' .. '9'
                            this.matchRange('0','9'); 


                            break;

                        default :
                            break loop7;
                        }
                    } while (true);



                    break;

            }




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T_NUMBER",

    // $ANTLR start T_STRING
    mT_STRING: function()  {
        try {
            var _type = this.T_STRING;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TM1Rules.g:88:10: ( '\\'' ( '\\'\\'' | ~ '\\'' )* '\\'' )
            // TM1Rules.g:88:12: '\\'' ( '\\'\\'' | ~ '\\'' )* '\\''
            this.match('\''); 
            // TM1Rules.g:88:17: ( '\\'\\'' | ~ '\\'' )*
            loop9:
            do {
                var alt9=3;
                var LA9_0 = this.input.LA(1);

                if ( (LA9_0=='\'') ) {
                    var LA9_1 = this.input.LA(2);

                    if ( (LA9_1=='\'') ) {
                        alt9=1;
                    }


                }
                else if ( ((LA9_0>='\u0000' && LA9_0<='&')||(LA9_0>='(' && LA9_0<='\uFFFF')) ) {
                    alt9=2;
                }


                switch (alt9) {
                case 1 :
                    // TM1Rules.g:88:18: '\\'\\''
                    this.match("''"); 



                    break;
                case 2 :
                    // TM1Rules.g:88:25: ~ '\\''
                    if ( (this.input.LA(1)>='\u0000' && this.input.LA(1)<='&')||(this.input.LA(1)>='(' && this.input.LA(1)<='\uFFFF') ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

                default :
                    break loop9;
                }
            } while (true);

            this.match('\''); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T_STRING",

    mTokens: function() {
        // TM1Rules.g:1:8: ( T__38 | T__39 | T__40 | T__41 | T__42 | T__43 | T__44 | T__45 | T__46 | T__47 | T__48 | T__49 | T__50 | T__51 | T__52 | T__53 | T__54 | T__55 | T__56 | T__57 | T__58 | T__59 | T__60 | T__61 | T__62 | T__63 | T__64 | T__65 | T__66 | T__67 | T__68 | T__69 | T__70 | T__71 | T__72 | T__73 | T__74 | T__75 | T_CONTINUE | T_STET | T_FEEDERS | T_SKIPCHECK | T_UNDEFVALS | T_FEEDSTRINGS | T_IDENTIFIER | T_BANG_IDENTIFIER | T_NUMBER | T_STRING )
        var alt10=48;
        alt10 = this.dfa10.predict(this.input);
        switch (alt10) {
            case 1 :
                // TM1Rules.g:1:10: T__38
                this.mT__38(); 


                break;
            case 2 :
                // TM1Rules.g:1:16: T__39
                this.mT__39(); 


                break;
            case 3 :
                // TM1Rules.g:1:22: T__40
                this.mT__40(); 


                break;
            case 4 :
                // TM1Rules.g:1:28: T__41
                this.mT__41(); 


                break;
            case 5 :
                // TM1Rules.g:1:34: T__42
                this.mT__42(); 


                break;
            case 6 :
                // TM1Rules.g:1:40: T__43
                this.mT__43(); 


                break;
            case 7 :
                // TM1Rules.g:1:46: T__44
                this.mT__44(); 


                break;
            case 8 :
                // TM1Rules.g:1:52: T__45
                this.mT__45(); 


                break;
            case 9 :
                // TM1Rules.g:1:58: T__46
                this.mT__46(); 


                break;
            case 10 :
                // TM1Rules.g:1:64: T__47
                this.mT__47(); 


                break;
            case 11 :
                // TM1Rules.g:1:70: T__48
                this.mT__48(); 


                break;
            case 12 :
                // TM1Rules.g:1:76: T__49
                this.mT__49(); 


                break;
            case 13 :
                // TM1Rules.g:1:82: T__50
                this.mT__50(); 


                break;
            case 14 :
                // TM1Rules.g:1:88: T__51
                this.mT__51(); 


                break;
            case 15 :
                // TM1Rules.g:1:94: T__52
                this.mT__52(); 


                break;
            case 16 :
                // TM1Rules.g:1:100: T__53
                this.mT__53(); 


                break;
            case 17 :
                // TM1Rules.g:1:106: T__54
                this.mT__54(); 


                break;
            case 18 :
                // TM1Rules.g:1:112: T__55
                this.mT__55(); 


                break;
            case 19 :
                // TM1Rules.g:1:118: T__56
                this.mT__56(); 


                break;
            case 20 :
                // TM1Rules.g:1:124: T__57
                this.mT__57(); 


                break;
            case 21 :
                // TM1Rules.g:1:130: T__58
                this.mT__58(); 


                break;
            case 22 :
                // TM1Rules.g:1:136: T__59
                this.mT__59(); 


                break;
            case 23 :
                // TM1Rules.g:1:142: T__60
                this.mT__60(); 


                break;
            case 24 :
                // TM1Rules.g:1:148: T__61
                this.mT__61(); 


                break;
            case 25 :
                // TM1Rules.g:1:154: T__62
                this.mT__62(); 


                break;
            case 26 :
                // TM1Rules.g:1:160: T__63
                this.mT__63(); 


                break;
            case 27 :
                // TM1Rules.g:1:166: T__64
                this.mT__64(); 


                break;
            case 28 :
                // TM1Rules.g:1:172: T__65
                this.mT__65(); 


                break;
            case 29 :
                // TM1Rules.g:1:178: T__66
                this.mT__66(); 


                break;
            case 30 :
                // TM1Rules.g:1:184: T__67
                this.mT__67(); 


                break;
            case 31 :
                // TM1Rules.g:1:190: T__68
                this.mT__68(); 


                break;
            case 32 :
                // TM1Rules.g:1:196: T__69
                this.mT__69(); 


                break;
            case 33 :
                // TM1Rules.g:1:202: T__70
                this.mT__70(); 


                break;
            case 34 :
                // TM1Rules.g:1:208: T__71
                this.mT__71(); 


                break;
            case 35 :
                // TM1Rules.g:1:214: T__72
                this.mT__72(); 


                break;
            case 36 :
                // TM1Rules.g:1:220: T__73
                this.mT__73(); 


                break;
            case 37 :
                // TM1Rules.g:1:226: T__74
                this.mT__74(); 


                break;
            case 38 :
                // TM1Rules.g:1:232: T__75
                this.mT__75(); 


                break;
            case 39 :
                // TM1Rules.g:1:238: T_CONTINUE
                this.mT_CONTINUE(); 


                break;
            case 40 :
                // TM1Rules.g:1:249: T_STET
                this.mT_STET(); 


                break;
            case 41 :
                // TM1Rules.g:1:256: T_FEEDERS
                this.mT_FEEDERS(); 


                break;
            case 42 :
                // TM1Rules.g:1:266: T_SKIPCHECK
                this.mT_SKIPCHECK(); 


                break;
            case 43 :
                // TM1Rules.g:1:278: T_UNDEFVALS
                this.mT_UNDEFVALS(); 


                break;
            case 44 :
                // TM1Rules.g:1:290: T_FEEDSTRINGS
                this.mT_FEEDSTRINGS(); 


                break;
            case 45 :
                // TM1Rules.g:1:304: T_IDENTIFIER
                this.mT_IDENTIFIER(); 


                break;
            case 46 :
                // TM1Rules.g:1:317: T_BANG_IDENTIFIER
                this.mT_BANG_IDENTIFIER(); 


                break;
            case 47 :
                // TM1Rules.g:1:335: T_NUMBER
                this.mT_NUMBER(); 


                break;
            case 48 :
                // TM1Rules.g:1:344: T_STRING
                this.mT_STRING(); 


                break;

        }

    }

}, true); // important to pass true to overwrite default implementations

org.antlr.lang.augmentObject(TM1RulesLexer, {
    DFA10_eotS:
        "\u0001\u0022\u0001\uffff\u0001\u0026\u0001\uffff\u0001\u0027\u0001"+
    "\u0028\u0001\u002b\u0001\u002c\u0001\u002e\u0001\u002f\u0002\uffff\u0001"+
    "\u0032\u0001\u0034\u0010\uffff\u0003\u0023\u0008\uffff\u0002\u0023\u0002"+
    "\uffff\u0001\u0023\u0008\uffff\u0001\u003f\u0001\u0041\u0005\u0023\u0005"+
    "\uffff\u0002\u0023\u0001\u0049\u0004\u0023\u0001\uffff\u000c\u0023\u0001"+
    "\u005b\u0003\u0023\u0001\u005f\u0001\uffff\u0002\u0023\u0001\u0062\u0001"+
    "\uffff\u0001\u0023\u0001\u0064\u0001\uffff\u0001\u0023\u0001\uffff\u0001"+
    "\u0066\u0001\uffff",
    DFA10_eofS:
        "\u0067\uffff",
    DFA10_minS:
        "\u0001\u0021\u0001\uffff\u0001\u003e\u0001\uffff\u0006\u0041\u0002"+
    "\uffff\u0002\u003d\u0001\u003c\u000f\uffff\u0001\u0045\u0001\u004e\u0001"+
    "\u002b\u0008\uffff\u0001\u0045\u0001\u0049\u0002\uffff\u0001\u004e\u0008"+
    "\uffff\u0002\u003d\u0001\u0045\u0001\u0044\u0001\u0054\u0001\u0050\u0001"+
    "\u0054\u0005\uffff\u0001\u0044\u0001\u0045\u0001\u0041\u0001\u0043\u0001"+
    "\u0049\u0001\u0045\u0001\u0046\u0001\uffff\u0001\u0048\u0001\u004e\u0001"+
    "\u0052\u0001\u0054\u0001\u0056\u0001\u0045\u0001\u0055\u0001\u0053\u0001"+
    "\u0052\u0001\u0041\u0001\u0043\u0001\u0045\u0001\u0041\u0001\u0049\u0001"+
    "\u004c\u0001\u004b\u0001\u0041\u0001\uffff\u0001\u004e\u0001\u0053\u0001"+
    "\u0041\u0001\uffff\u0001\u0047\u0001\u0041\u0001\uffff\u0001\u0053\u0001"+
    "\uffff\u0001\u0041\u0001\uffff",
    DFA10_maxS:
        "\u0001\u007e\u0001\uffff\u0001\u003e\u0001\uffff\u0006\u007a\u0002"+
    "\uffff\u0001\u003e\u0001\u003d\u0001\u003e\u000f\uffff\u0001\u0065\u0001"+
    "\u006e\u0001\u0039\u0008\uffff\u0001\u0065\u0001\u0069\u0002\uffff\u0001"+
    "\u006e\u0008\uffff\u0001\u003e\u0001\u003d\u0001\u0065\u0001\u0064\u0001"+
    "\u0074\u0001\u0070\u0001\u0074\u0005\uffff\u0001\u0064\u0001\u0065\u0001"+
    "\u007a\u0001\u0063\u0001\u0069\u0001\u0073\u0001\u0066\u0001\uffff\u0001"+
    "\u0068\u0001\u006e\u0001\u0072\u0001\u0074\u0001\u0076\u0001\u0065\u0001"+
    "\u0075\u0001\u0073\u0001\u0072\u0001\u0061\u0001\u0063\u0001\u0065\u0001"+
    "\u007a\u0001\u0069\u0001\u006c\u0001\u006b\u0001\u007a\u0001\uffff\u0001"+
    "\u006e\u0001\u0073\u0001\u007a\u0001\uffff\u0001\u0067\u0001\u007a\u0001"+
    "\uffff\u0001\u0073\u0001\uffff\u0001\u007a\u0001\uffff",
    DFA10_acceptS:
        "\u0001\uffff\u0001\u0001\u0001\uffff\u0001\u0003\u0006\uffff\u0001"+
    "\u000b\u0001\u000c\u0003\uffff\u0001\u0018\u0001\u0019\u0001\u001a\u0001"+
    "\u001b\u0001\u001c\u0001\u001d\u0001\u001e\u0001\u001f\u0001\u0020\u0001"+
    "\u0021\u0001\u0022\u0001\u0023\u0001\u0024\u0001\u0025\u0001\u0026\u0003"+
    "\uffff\u0001\u002e\u0001\u002f\u0001\u002d\u0001\u0030\u0001\u000a\u0001"+
    "\u0002\u0001\u0004\u0001\u0005\u0002\uffff\u0001\u0006\u0001\u0007\u0001"+
    "\uffff\u0001\u0008\u0001\u0009\u0001\u000d\u0001\u0010\u0001\u000f\u0001"+
    "\u0011\u0001\u000e\u0001\u0012\u0007\uffff\u0001\u0013\u0001\u0016\u0001"+
    "\u0015\u0001\u0017\u0001\u0014\u0007\uffff\u0001\u0028\u0011\uffff\u0001"+
    "\u0029\u0003\uffff\u0001\u0027\u0002\uffff\u0001\u002a\u0001\uffff\u0001"+
    "\u002b\u0001\uffff\u0001\u002c",
    DFA10_specialS:
        "\u0067\uffff}>",
    DFA10_transitionS: [
            "\u0001\u0021\u0003\uffff\u0001\u000a\u0001\u000b\u0001\u0024"+
            "\u0001\u0017\u0001\u0018\u0001\u0012\u0001\u000f\u0001\u001b"+
            "\u0001\u0010\u0001\uffff\u0001\u0013\u000a\uffff\u0001\u0003"+
            "\u0001\u0001\u0001\u000c\u0001\u0002\u0001\u000d\u0001\uffff"+
            "\u0001\u000e\u0002\u0023\u0001\u0008\u0001\u0023\u0001\u0020"+
            "\u0001\u001e\u0007\u0023\u0001\u0004\u0004\u0023\u0001\u0006"+
            "\u0001\u0023\u0001\u001f\u0005\u0023\u0001\u0019\u0001\u0014"+
            "\u0001\u001a\u0001\u0015\u0001\u0023\u0001\uffff\u0002\u0023"+
            "\u0001\u0009\u0001\u0023\u0001\u0020\u0001\u001e\u0007\u0023"+
            "\u0001\u0005\u0004\u0023\u0001\u0007\u0001\u0023\u0001\u001f"+
            "\u0005\u0023\u0001\u001c\u0001\u0011\u0001\u001d\u0001\u0016",
            "",
            "\u0001\u0025",
            "",
            "\u001a\u0023\u0004\uffff\u0001\u0023\u0001\uffff\u001a\u0023",
            "\u001a\u0023\u0004\uffff\u0001\u0023\u0001\uffff\u001a\u0023",
            "\u000a\u0023\u0001\u002a\u0008\u0023\u0001\u0029\u0006\u0023"+
            "\u0004\uffff\u0001\u0023\u0001\uffff\u000a\u0023\u0001\u002a"+
            "\u0008\u0023\u0001\u0029\u0006\u0023",
            "\u000a\u0023\u0001\u002a\u0008\u0023\u0001\u0029\u0006\u0023"+
            "\u0004\uffff\u0001\u0023\u0001\uffff\u000a\u0023\u0001\u002a"+
            "\u0008\u0023\u0001\u0029\u0006\u0023",
            "\u000e\u0023\u0001\u002d\u000b\u0023\u0004\uffff\u0001\u0023"+
            "\u0001\uffff\u000e\u0023\u0001\u002d\u000b\u0023",
            "\u000e\u0023\u0001\u002d\u000b\u0023\u0004\uffff\u0001\u0023"+
            "\u0001\uffff\u000e\u0023\u0001\u002d\u000b\u0023",
            "",
            "",
            "\u0001\u0031\u0001\u0030",
            "\u0001\u0033",
            "\u0001\u0036\u0001\u0035\u0001\u0037",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "\u0001\u0038\u001f\uffff\u0001\u0038",
            "\u0001\u0039\u001f\uffff\u0001\u0039",
            "\u0001\u0022\u0001\uffff\u0001\u0022\u0002\uffff\u000a\u0022",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "\u0001\u003a\u001f\uffff\u0001\u003a",
            "\u0001\u003b\u001f\uffff\u0001\u003b",
            "",
            "",
            "\u0001\u003c\u001f\uffff\u0001\u003c",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "\u0001\u003e\u0001\u003d",
            "\u0001\u0040",
            "\u0001\u0042\u001f\uffff\u0001\u0042",
            "\u0001\u0043\u001f\uffff\u0001\u0043",
            "\u0001\u0044\u001f\uffff\u0001\u0044",
            "\u0001\u0045\u001f\uffff\u0001\u0045",
            "\u0001\u0046\u001f\uffff\u0001\u0046",
            "",
            "",
            "",
            "",
            "",
            "\u0001\u0047\u001f\uffff\u0001\u0047",
            "\u0001\u0048\u001f\uffff\u0001\u0048",
            "\u001a\u0023\u0004\uffff\u0001\u0023\u0001\uffff\u001a\u0023",
            "\u0001\u004a\u001f\uffff\u0001\u004a",
            "\u0001\u004b\u001f\uffff\u0001\u004b",
            "\u0001\u004c\u000d\uffff\u0001\u004d\u0011\uffff\u0001\u004c"+
            "\u000d\uffff\u0001\u004d",
            "\u0001\u004e\u001f\uffff\u0001\u004e",
            "",
            "\u0001\u004f\u001f\uffff\u0001\u004f",
            "\u0001\u0050\u001f\uffff\u0001\u0050",
            "\u0001\u0051\u001f\uffff\u0001\u0051",
            "\u0001\u0052\u001f\uffff\u0001\u0052",
            "\u0001\u0053\u001f\uffff\u0001\u0053",
            "\u0001\u0054\u001f\uffff\u0001\u0054",
            "\u0001\u0055\u001f\uffff\u0001\u0055",
            "\u0001\u0056\u001f\uffff\u0001\u0056",
            "\u0001\u0057\u001f\uffff\u0001\u0057",
            "\u0001\u0058\u001f\uffff\u0001\u0058",
            "\u0001\u0059\u001f\uffff\u0001\u0059",
            "\u0001\u005a\u001f\uffff\u0001\u005a",
            "\u001a\u0023\u0004\uffff\u0001\u0023\u0001\uffff\u001a\u0023",
            "\u0001\u005c\u001f\uffff\u0001\u005c",
            "\u0001\u005d\u001f\uffff\u0001\u005d",
            "\u0001\u005e\u001f\uffff\u0001\u005e",
            "\u001a\u0023\u0004\uffff\u0001\u0023\u0001\uffff\u001a\u0023",
            "",
            "\u0001\u0060\u001f\uffff\u0001\u0060",
            "\u0001\u0061\u001f\uffff\u0001\u0061",
            "\u001a\u0023\u0004\uffff\u0001\u0023\u0001\uffff\u001a\u0023",
            "",
            "\u0001\u0063\u001f\uffff\u0001\u0063",
            "\u001a\u0023\u0004\uffff\u0001\u0023\u0001\uffff\u001a\u0023",
            "",
            "\u0001\u0065\u001f\uffff\u0001\u0065",
            "",
            "\u001a\u0023\u0004\uffff\u0001\u0023\u0001\uffff\u001a\u0023",
            ""
    ]
});

org.antlr.lang.augmentObject(TM1RulesLexer, {
    DFA10_eot:
        org.antlr.runtime.DFA.unpackEncodedString(TM1RulesLexer.DFA10_eotS),
    DFA10_eof:
        org.antlr.runtime.DFA.unpackEncodedString(TM1RulesLexer.DFA10_eofS),
    DFA10_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(TM1RulesLexer.DFA10_minS),
    DFA10_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(TM1RulesLexer.DFA10_maxS),
    DFA10_accept:
        org.antlr.runtime.DFA.unpackEncodedString(TM1RulesLexer.DFA10_acceptS),
    DFA10_special:
        org.antlr.runtime.DFA.unpackEncodedString(TM1RulesLexer.DFA10_specialS),
    DFA10_transition: (function() {
        var a = [],
            i,
            numStates = TM1RulesLexer.DFA10_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(TM1RulesLexer.DFA10_transitionS[i]));
        }
        return a;
    })()
});

TM1RulesLexer.DFA10 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 10;
    this.eot = TM1RulesLexer.DFA10_eot;
    this.eof = TM1RulesLexer.DFA10_eof;
    this.min = TM1RulesLexer.DFA10_min;
    this.max = TM1RulesLexer.DFA10_max;
    this.accept = TM1RulesLexer.DFA10_accept;
    this.special = TM1RulesLexer.DFA10_special;
    this.transition = TM1RulesLexer.DFA10_transition;
};

org.antlr.lang.extend(TM1RulesLexer.DFA10, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "1:1: Tokens : ( T__38 | T__39 | T__40 | T__41 | T__42 | T__43 | T__44 | T__45 | T__46 | T__47 | T__48 | T__49 | T__50 | T__51 | T__52 | T__53 | T__54 | T__55 | T__56 | T__57 | T__58 | T__59 | T__60 | T__61 | T__62 | T__63 | T__64 | T__65 | T__66 | T__67 | T__68 | T__69 | T__70 | T__71 | T__72 | T__73 | T__74 | T__75 | T_CONTINUE | T_STET | T_FEEDERS | T_SKIPCHECK | T_UNDEFVALS | T_FEEDSTRINGS | T_IDENTIFIER | T_BANG_IDENTIFIER | T_NUMBER | T_STRING );";
    },
    dummy: null
});
 
})();