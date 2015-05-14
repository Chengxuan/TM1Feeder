// $ANTLR 3.3 Nov 30, 2010 12:50:56 TM1Rules.g 2015-05-14 13:28:48

var TM1RulesParser = function(input, state) {
    if (!state) {
        state = new org.antlr.runtime.RecognizerSharedState();
    }

    (function(){
    }).call(this);

    TM1RulesParser.superclass.constructor.call(this, input, state);


         

    /* @todo only create adaptor if output=AST */
    this.adaptor = new org.antlr.runtime.tree.CommonTreeAdaptor();

};

org.antlr.lang.augmentObject(TM1RulesParser, {
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
// public class variables
var EOF= -1,
    T__38= 38,
    T__39= 39,
    T__40= 40,
    T__41= 41,
    T__42= 42,
    T__43= 43,
    T__44= 44,
    T__45= 45,
    T__46= 46,
    T__47= 47,
    T__48= 48,
    T__49= 49,
    T__50= 50,
    T__51= 51,
    T__52= 52,
    T__53= 53,
    T__54= 54,
    T__55= 55,
    T__56= 56,
    T__57= 57,
    T__58= 58,
    T__59= 59,
    T__60= 60,
    T__61= 61,
    T__62= 62,
    T__63= 63,
    T__64= 64,
    T__65= 65,
    T__66= 66,
    T__67= 67,
    T__68= 68,
    T__69= 69,
    T__70= 70,
    T__71= 71,
    T__72= 72,
    T__73= 73,
    T__74= 74,
    T__75= 75,
    RULE_FILE= 4,
    RULES= 5,
    RULE_DEF= 6,
    PRAGMA= 7,
    FEEDER_DEF= 8,
    LEVEL_EXPR= 9,
    N_LEVEL= 10,
    C_LEVEL= 11,
    S_LEVEL= 12,
    AREA_DEFN= 13,
    AREA_SCOPE= 14,
    AREA_ITEM_SET= 15,
    FUNCTION= 16,
    EXPR_LIST= 17,
    CONTINUE= 18,
    STET= 19,
    FEEDERS= 20,
    SKIPCHECK= 21,
    UNDEFVALS= 22,
    FEEDSTRINGS= 23,
    STRING= 24,
    IDENTIFIER= 25,
    NUMBER= 26,
    BANG_IDENTIFIER= 27,
    T_CONTINUE= 28,
    T_STET= 29,
    T_FEEDERS= 30,
    T_SKIPCHECK= 31,
    T_UNDEFVALS= 32,
    T_FEEDSTRINGS= 33,
    T_IDENTIFIER= 34,
    T_BANG_IDENTIFIER= 35,
    T_NUMBER= 36,
    T_STRING= 37;

// public instance methods/vars
org.antlr.lang.extend(TM1RulesParser, org.antlr.runtime.Parser, {
        
    setTreeAdaptor: function(adaptor) {
        this.adaptor = adaptor;
    },
    getTreeAdaptor: function() {
        return this.adaptor;
    },

    getTokenNames: function() { return TM1RulesParser.tokenNames; },
    getGrammarFileName: function() { return "TM1Rules.g"; }
});
org.antlr.lang.augmentObject(TM1RulesParser.prototype, {

    // inline static return class
    ruleFile_return: (function() {
        TM1RulesParser.ruleFile_return = function(){};
        org.antlr.lang.extend(TM1RulesParser.ruleFile_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // TM1Rules.g:15:1: ruleFile : rules ( feeders )? -> ^( RULE_FILE ^( RULES rules ) ^( FEEDERS ( feeders )? ) ) ;
    // $ANTLR start "ruleFile"
    ruleFile: function() {
        var retval = new TM1RulesParser.ruleFile_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var rules1 = null;
         var feeders2 = null;

        var stream_feeders=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule feeders");
        var stream_rules=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule rules");
        try {
            // TM1Rules.g:15:11: ( rules ( feeders )? -> ^( RULE_FILE ^( RULES rules ) ^( FEEDERS ( feeders )? ) ) )
            // TM1Rules.g:15:13: rules ( feeders )?
            this.pushFollow(TM1RulesParser.FOLLOW_rules_in_ruleFile115);
            rules1=this.rules();

            this.state._fsp--;

            stream_rules.add(rules1.getTree());
            // TM1Rules.g:15:19: ( feeders )?
            var alt1=2;
            var LA1_0 = this.input.LA(1);

            if ( (LA1_0==T_FEEDERS) ) {
                alt1=1;
            }
            switch (alt1) {
                case 1 :
                    // TM1Rules.g:15:19: feeders
                    this.pushFollow(TM1RulesParser.FOLLOW_feeders_in_ruleFile117);
                    feeders2=this.feeders();

                    this.state._fsp--;

                    stream_feeders.add(feeders2.getTree());


                    break;

            }



            // AST REWRITE
            // elements: feeders, rules
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 15:28: -> ^( RULE_FILE ^( RULES rules ) ^( FEEDERS ( feeders )? ) )
            {
                // TM1Rules.g:15:31: ^( RULE_FILE ^( RULES rules ) ^( FEEDERS ( feeders )? ) )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(RULE_FILE, "RULE_FILE"), root_1);

                // TM1Rules.g:15:43: ^( RULES rules )
                {
                var root_2 = this.adaptor.nil();
                root_2 = this.adaptor.becomeRoot(this.adaptor.create(RULES, "RULES"), root_2);

                this.adaptor.addChild(root_2, stream_rules.nextTree());

                this.adaptor.addChild(root_1, root_2);
                }
                // TM1Rules.g:15:58: ^( FEEDERS ( feeders )? )
                {
                var root_2 = this.adaptor.nil();
                root_2 = this.adaptor.becomeRoot(this.adaptor.create(FEEDERS, "FEEDERS"), root_2);

                // TM1Rules.g:15:68: ( feeders )?
                if ( stream_feeders.hasNext() ) {
                    this.adaptor.addChild(root_2, stream_feeders.nextTree());

                }
                stream_feeders.reset();

                this.adaptor.addChild(root_1, root_2);
                }

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rules_return: (function() {
        TM1RulesParser.rules_return = function(){};
        org.antlr.lang.extend(TM1RulesParser.rules_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // TM1Rules.g:16:1: rules : ( pragma | ruleDef )* ;
    // $ANTLR start "rules"
    rules: function() {
        var retval = new TM1RulesParser.rules_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var pragma3 = null;
         var ruleDef4 = null;


        try {
            // TM1Rules.g:16:7: ( ( pragma | ruleDef )* )
            // TM1Rules.g:16:9: ( pragma | ruleDef )*
            root_0 = this.adaptor.nil();

            // TM1Rules.g:16:9: ( pragma | ruleDef )*
            loop2:
            do {
                var alt2=3;
                var LA2_0 = this.input.LA(1);

                if ( ((LA2_0>=T_SKIPCHECK && LA2_0<=T_FEEDSTRINGS)) ) {
                    alt2=1;
                }
                else if ( (LA2_0==71) ) {
                    alt2=2;
                }


                switch (alt2) {
                case 1 :
                    // TM1Rules.g:16:10: pragma
                    this.pushFollow(TM1RulesParser.FOLLOW_pragma_in_rules146);
                    pragma3=this.pragma();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, pragma3.getTree());


                    break;
                case 2 :
                    // TM1Rules.g:16:19: ruleDef
                    this.pushFollow(TM1RulesParser.FOLLOW_ruleDef_in_rules150);
                    ruleDef4=this.ruleDef();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, ruleDef4.getTree());


                    break;

                default :
                    break loop2;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    feeders_return: (function() {
        TM1RulesParser.feeders_return = function(){};
        org.antlr.lang.extend(TM1RulesParser.feeders_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // TM1Rules.g:17:1: feeders : kwFeeders ';' ( feederDef )* ;
    // $ANTLR start "feeders"
    feeders: function() {
        var retval = new TM1RulesParser.feeders_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal6 = null;
         var kwFeeders5 = null;
         var feederDef7 = null;

        var char_literal6_tree=null;

        try {
            // TM1Rules.g:17:9: ( kwFeeders ';' ( feederDef )* )
            // TM1Rules.g:17:11: kwFeeders ';' ( feederDef )*
            root_0 = this.adaptor.nil();

            this.pushFollow(TM1RulesParser.FOLLOW_kwFeeders_in_feeders160);
            kwFeeders5=this.kwFeeders();

            this.state._fsp--;

            char_literal6=this.match(this.input,38,TM1RulesParser.FOLLOW_38_in_feeders163); 
            // TM1Rules.g:17:27: ( feederDef )*
            loop3:
            do {
                var alt3=2;
                var LA3_0 = this.input.LA(1);

                if ( (LA3_0==71) ) {
                    alt3=1;
                }


                switch (alt3) {
                case 1 :
                    // TM1Rules.g:17:27: feederDef
                    this.pushFollow(TM1RulesParser.FOLLOW_feederDef_in_feeders166);
                    feederDef7=this.feederDef();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, feederDef7.getTree());


                    break;

                default :
                    break loop3;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    pragma_return: (function() {
        TM1RulesParser.pragma_return = function(){};
        org.antlr.lang.extend(TM1RulesParser.pragma_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // TM1Rules.g:18:1: pragma : pragmaItem ';' -> ^( PRAGMA pragmaItem ) ;
    // $ANTLR start "pragma"
    pragma: function() {
        var retval = new TM1RulesParser.pragma_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal9 = null;
         var pragmaItem8 = null;

        var char_literal9_tree=null;
        var stream_38=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 38");
        var stream_pragmaItem=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule pragmaItem");
        try {
            // TM1Rules.g:18:8: ( pragmaItem ';' -> ^( PRAGMA pragmaItem ) )
            // TM1Rules.g:18:10: pragmaItem ';'
            this.pushFollow(TM1RulesParser.FOLLOW_pragmaItem_in_pragma175);
            pragmaItem8=this.pragmaItem();

            this.state._fsp--;

            stream_pragmaItem.add(pragmaItem8.getTree());
            char_literal9=this.match(this.input,38,TM1RulesParser.FOLLOW_38_in_pragma177);  
            stream_38.add(char_literal9);



            // AST REWRITE
            // elements: pragmaItem
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 18:25: -> ^( PRAGMA pragmaItem )
            {
                // TM1Rules.g:18:28: ^( PRAGMA pragmaItem )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(PRAGMA, "PRAGMA"), root_1);

                this.adaptor.addChild(root_1, stream_pragmaItem.nextTree());

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    pragmaItem_return: (function() {
        TM1RulesParser.pragmaItem_return = function(){};
        org.antlr.lang.extend(TM1RulesParser.pragmaItem_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // TM1Rules.g:19:1: pragmaItem : ( kwSkipcheck | kwUndefvals | kwFeedstrings );
    // $ANTLR start "pragmaItem"
    pragmaItem: function() {
        var retval = new TM1RulesParser.pragmaItem_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var kwSkipcheck10 = null;
         var kwUndefvals11 = null;
         var kwFeedstrings12 = null;


        try {
            // TM1Rules.g:19:12: ( kwSkipcheck | kwUndefvals | kwFeedstrings )
            var alt4=3;
            switch ( this.input.LA(1) ) {
            case T_SKIPCHECK:
                alt4=1;
                break;
            case T_UNDEFVALS:
                alt4=2;
                break;
            case T_FEEDSTRINGS:
                alt4=3;
                break;
            default:
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 4, 0, this.input);

                throw nvae;
            }

            switch (alt4) {
                case 1 :
                    // TM1Rules.g:19:14: kwSkipcheck
                    root_0 = this.adaptor.nil();

                    this.pushFollow(TM1RulesParser.FOLLOW_kwSkipcheck_in_pragmaItem192);
                    kwSkipcheck10=this.kwSkipcheck();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, kwSkipcheck10.getTree());


                    break;
                case 2 :
                    // TM1Rules.g:19:28: kwUndefvals
                    root_0 = this.adaptor.nil();

                    this.pushFollow(TM1RulesParser.FOLLOW_kwUndefvals_in_pragmaItem196);
                    kwUndefvals11=this.kwUndefvals();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, kwUndefvals11.getTree());


                    break;
                case 3 :
                    // TM1Rules.g:19:42: kwFeedstrings
                    root_0 = this.adaptor.nil();

                    this.pushFollow(TM1RulesParser.FOLLOW_kwFeedstrings_in_pragmaItem200);
                    kwFeedstrings12=this.kwFeedstrings();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, kwFeedstrings12.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    ruleDef_return: (function() {
        TM1RulesParser.ruleDef_return = function(){};
        org.antlr.lang.extend(TM1RulesParser.ruleDef_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // TM1Rules.g:21:1: ruleDef : areaDefn '=' ruleBody -> ^( RULE_DEF areaDefn ruleBody ) ;
    // $ANTLR start "ruleDef"
    ruleDef: function() {
        var retval = new TM1RulesParser.ruleDef_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal14 = null;
         var areaDefn13 = null;
         var ruleBody15 = null;

        var char_literal14_tree=null;
        var stream_39=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 39");
        var stream_ruleBody=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule ruleBody");
        var stream_areaDefn=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule areaDefn");
        try {
            // TM1Rules.g:21:9: ( areaDefn '=' ruleBody -> ^( RULE_DEF areaDefn ruleBody ) )
            // TM1Rules.g:21:11: areaDefn '=' ruleBody
            this.pushFollow(TM1RulesParser.FOLLOW_areaDefn_in_ruleDef209);
            areaDefn13=this.areaDefn();

            this.state._fsp--;

            stream_areaDefn.add(areaDefn13.getTree());
            char_literal14=this.match(this.input,39,TM1RulesParser.FOLLOW_39_in_ruleDef211);  
            stream_39.add(char_literal14);

            this.pushFollow(TM1RulesParser.FOLLOW_ruleBody_in_ruleDef213);
            ruleBody15=this.ruleBody();

            this.state._fsp--;

            stream_ruleBody.add(ruleBody15.getTree());


            // AST REWRITE
            // elements: areaDefn, ruleBody
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 21:33: -> ^( RULE_DEF areaDefn ruleBody )
            {
                // TM1Rules.g:21:36: ^( RULE_DEF areaDefn ruleBody )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(RULE_DEF, "RULE_DEF"), root_1);

                this.adaptor.addChild(root_1, stream_areaDefn.nextTree());
                this.adaptor.addChild(root_1, stream_ruleBody.nextTree());

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    ruleBody_return: (function() {
        TM1RulesParser.ruleBody_return = function(){};
        org.antlr.lang.extend(TM1RulesParser.ruleBody_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // TM1Rules.g:22:1: ruleBody : ( expr ';' | ( levelExpr )+ );
    // $ANTLR start "ruleBody"
    ruleBody: function() {
        var retval = new TM1RulesParser.ruleBody_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal17 = null;
         var expr16 = null;
         var levelExpr18 = null;

        var char_literal17_tree=null;

        try {
            // TM1Rules.g:22:10: ( expr ';' | ( levelExpr )+ )
            var alt6=2;
            var LA6_0 = this.input.LA(1);

            if ( ((LA6_0>=T_CONTINUE && LA6_0<=T_STET)||(LA6_0>=T_IDENTIFIER && LA6_0<=T_STRING)||(LA6_0>=61 && LA6_0<=62)||(LA6_0>=68 && LA6_0<=69)||LA6_0==71) ) {
                alt6=1;
            }
            else if ( ((LA6_0>=41 && LA6_0<=46)) ) {
                alt6=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 6, 0, this.input);

                throw nvae;
            }
            switch (alt6) {
                case 1 :
                    // TM1Rules.g:22:12: expr ';'
                    root_0 = this.adaptor.nil();

                    this.pushFollow(TM1RulesParser.FOLLOW_expr_in_ruleBody230);
                    expr16=this.expr();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, expr16.getTree());
                    char_literal17=this.match(this.input,38,TM1RulesParser.FOLLOW_38_in_ruleBody232); 


                    break;
                case 2 :
                    // TM1Rules.g:22:24: ( levelExpr )+
                    root_0 = this.adaptor.nil();

                    // TM1Rules.g:22:24: ( levelExpr )+
                    var cnt5=0;
                    loop5:
                    do {
                        var alt5=2;
                        var LA5_0 = this.input.LA(1);

                        if ( ((LA5_0>=41 && LA5_0<=46)) ) {
                            alt5=1;
                        }


                        switch (alt5) {
                        case 1 :
                            // TM1Rules.g:22:24: levelExpr
                            this.pushFollow(TM1RulesParser.FOLLOW_levelExpr_in_ruleBody237);
                            levelExpr18=this.levelExpr();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, levelExpr18.getTree());


                            break;

                        default :
                            if ( cnt5 >= 1 ) {
                                break loop5;
                            }
                                var eee = new org.antlr.runtime.EarlyExitException(5, this.input);
                                throw eee;
                        }
                        cnt5++;
                    } while (true);



                    break;

            }
            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    levelExpr_return: (function() {
        TM1RulesParser.levelExpr_return = function(){};
        org.antlr.lang.extend(TM1RulesParser.levelExpr_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // TM1Rules.g:23:1: levelExpr : level ':' expr ';' -> ^( LEVEL_EXPR level expr ) ;
    // $ANTLR start "levelExpr"
    levelExpr: function() {
        var retval = new TM1RulesParser.levelExpr_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal20 = null;
        var char_literal22 = null;
         var level19 = null;
         var expr21 = null;

        var char_literal20_tree=null;
        var char_literal22_tree=null;
        var stream_40=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 40");
        var stream_38=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 38");
        var stream_level=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule level");
        var stream_expr=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule expr");
        try {
            // TM1Rules.g:23:11: ( level ':' expr ';' -> ^( LEVEL_EXPR level expr ) )
            // TM1Rules.g:23:13: level ':' expr ';'
            this.pushFollow(TM1RulesParser.FOLLOW_level_in_levelExpr246);
            level19=this.level();

            this.state._fsp--;

            stream_level.add(level19.getTree());
            char_literal20=this.match(this.input,40,TM1RulesParser.FOLLOW_40_in_levelExpr248);  
            stream_40.add(char_literal20);

            this.pushFollow(TM1RulesParser.FOLLOW_expr_in_levelExpr250);
            expr21=this.expr();

            this.state._fsp--;

            stream_expr.add(expr21.getTree());
            char_literal22=this.match(this.input,38,TM1RulesParser.FOLLOW_38_in_levelExpr252);  
            stream_38.add(char_literal22);



            // AST REWRITE
            // elements: expr, level
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 23:32: -> ^( LEVEL_EXPR level expr )
            {
                // TM1Rules.g:23:35: ^( LEVEL_EXPR level expr )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(LEVEL_EXPR, "LEVEL_EXPR"), root_1);

                this.adaptor.addChild(root_1, stream_level.nextTree());
                this.adaptor.addChild(root_1, stream_expr.nextTree());

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    level_return: (function() {
        TM1RulesParser.level_return = function(){};
        org.antlr.lang.extend(TM1RulesParser.level_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // TM1Rules.g:25:1: level : ( ( 'N' | 'n' ) -> ^( N_LEVEL ) | ( 'S' | 's' ) -> ^( S_LEVEL ) | ( 'C' | 'c' ) -> ^( C_LEVEL ) );
    // $ANTLR start "level"
    level: function() {
        var retval = new TM1RulesParser.level_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal23 = null;
        var char_literal24 = null;
        var char_literal25 = null;
        var char_literal26 = null;
        var char_literal27 = null;
        var char_literal28 = null;

        var char_literal23_tree=null;
        var char_literal24_tree=null;
        var char_literal25_tree=null;
        var char_literal26_tree=null;
        var char_literal27_tree=null;
        var char_literal28_tree=null;
        var stream_45=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 45");
        var stream_43=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 43");
        var stream_44=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 44");
        var stream_42=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 42");
        var stream_41=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 41");
        var stream_46=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 46");

        try {
            // TM1Rules.g:25:7: ( ( 'N' | 'n' ) -> ^( N_LEVEL ) | ( 'S' | 's' ) -> ^( S_LEVEL ) | ( 'C' | 'c' ) -> ^( C_LEVEL ) )
            var alt10=3;
            switch ( this.input.LA(1) ) {
            case 41:
            case 42:
                alt10=1;
                break;
            case 43:
            case 44:
                alt10=2;
                break;
            case 45:
            case 46:
                alt10=3;
                break;
            default:
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 10, 0, this.input);

                throw nvae;
            }

            switch (alt10) {
                case 1 :
                    // TM1Rules.g:25:9: ( 'N' | 'n' )
                    // TM1Rules.g:25:9: ( 'N' | 'n' )
                    var alt7=2;
                    var LA7_0 = this.input.LA(1);

                    if ( (LA7_0==41) ) {
                        alt7=1;
                    }
                    else if ( (LA7_0==42) ) {
                        alt7=2;
                    }
                    else {
                        var nvae =
                            new org.antlr.runtime.NoViableAltException("", 7, 0, this.input);

                        throw nvae;
                    }
                    switch (alt7) {
                        case 1 :
                            // TM1Rules.g:25:10: 'N'
                            char_literal23=this.match(this.input,41,TM1RulesParser.FOLLOW_41_in_level271);  
                            stream_41.add(char_literal23);



                            break;
                        case 2 :
                            // TM1Rules.g:25:14: 'n'
                            char_literal24=this.match(this.input,42,TM1RulesParser.FOLLOW_42_in_level273);  
                            stream_42.add(char_literal24);



                            break;

                    }



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 25:19: -> ^( N_LEVEL )
                    {
                        // TM1Rules.g:25:22: ^( N_LEVEL )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(N_LEVEL, "N_LEVEL"), root_1);

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;

                    break;
                case 2 :
                    // TM1Rules.g:26:6: ( 'S' | 's' )
                    // TM1Rules.g:26:6: ( 'S' | 's' )
                    var alt8=2;
                    var LA8_0 = this.input.LA(1);

                    if ( (LA8_0==43) ) {
                        alt8=1;
                    }
                    else if ( (LA8_0==44) ) {
                        alt8=2;
                    }
                    else {
                        var nvae =
                            new org.antlr.runtime.NoViableAltException("", 8, 0, this.input);

                        throw nvae;
                    }
                    switch (alt8) {
                        case 1 :
                            // TM1Rules.g:26:7: 'S'
                            char_literal25=this.match(this.input,43,TM1RulesParser.FOLLOW_43_in_level288);  
                            stream_43.add(char_literal25);



                            break;
                        case 2 :
                            // TM1Rules.g:26:11: 's'
                            char_literal26=this.match(this.input,44,TM1RulesParser.FOLLOW_44_in_level290);  
                            stream_44.add(char_literal26);



                            break;

                    }



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 26:16: -> ^( S_LEVEL )
                    {
                        // TM1Rules.g:26:19: ^( S_LEVEL )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(S_LEVEL, "S_LEVEL"), root_1);

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;

                    break;
                case 3 :
                    // TM1Rules.g:27:6: ( 'C' | 'c' )
                    // TM1Rules.g:27:6: ( 'C' | 'c' )
                    var alt9=2;
                    var LA9_0 = this.input.LA(1);

                    if ( (LA9_0==45) ) {
                        alt9=1;
                    }
                    else if ( (LA9_0==46) ) {
                        alt9=2;
                    }
                    else {
                        var nvae =
                            new org.antlr.runtime.NoViableAltException("", 9, 0, this.input);

                        throw nvae;
                    }
                    switch (alt9) {
                        case 1 :
                            // TM1Rules.g:27:7: 'C'
                            char_literal27=this.match(this.input,45,TM1RulesParser.FOLLOW_45_in_level305);  
                            stream_45.add(char_literal27);



                            break;
                        case 2 :
                            // TM1Rules.g:27:11: 'c'
                            char_literal28=this.match(this.input,46,TM1RulesParser.FOLLOW_46_in_level307);  
                            stream_46.add(char_literal28);



                            break;

                    }



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 27:16: -> ^( C_LEVEL )
                    {
                        // TM1Rules.g:27:19: ^( C_LEVEL )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(C_LEVEL, "C_LEVEL"), root_1);

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;

                    break;

            }
            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    feederDef_return: (function() {
        TM1RulesParser.feederDef_return = function(){};
        org.antlr.lang.extend(TM1RulesParser.feederDef_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // TM1Rules.g:30:1: feederDef : areaDefn '=>' exprList ';' -> ^( FEEDER_DEF areaDefn exprList ) ;
    // $ANTLR start "feederDef"
    feederDef: function() {
        var retval = new TM1RulesParser.feederDef_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal30 = null;
        var char_literal32 = null;
         var areaDefn29 = null;
         var exprList31 = null;

        var string_literal30_tree=null;
        var char_literal32_tree=null;
        var stream_47=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 47");
        var stream_38=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 38");
        var stream_areaDefn=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule areaDefn");
        var stream_exprList=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule exprList");
        try {
            // TM1Rules.g:30:11: ( areaDefn '=>' exprList ';' -> ^( FEEDER_DEF areaDefn exprList ) )
            // TM1Rules.g:30:13: areaDefn '=>' exprList ';'
            this.pushFollow(TM1RulesParser.FOLLOW_areaDefn_in_feederDef326);
            areaDefn29=this.areaDefn();

            this.state._fsp--;

            stream_areaDefn.add(areaDefn29.getTree());
            string_literal30=this.match(this.input,47,TM1RulesParser.FOLLOW_47_in_feederDef328);  
            stream_47.add(string_literal30);

            this.pushFollow(TM1RulesParser.FOLLOW_exprList_in_feederDef330);
            exprList31=this.exprList();

            this.state._fsp--;

            stream_exprList.add(exprList31.getTree());
            char_literal32=this.match(this.input,38,TM1RulesParser.FOLLOW_38_in_feederDef332);  
            stream_38.add(char_literal32);



            // AST REWRITE
            // elements: exprList, areaDefn
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 30:40: -> ^( FEEDER_DEF areaDefn exprList )
            {
                // TM1Rules.g:30:43: ^( FEEDER_DEF areaDefn exprList )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(FEEDER_DEF, "FEEDER_DEF"), root_1);

                this.adaptor.addChild(root_1, stream_areaDefn.nextTree());
                this.adaptor.addChild(root_1, stream_exprList.nextTree());

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    expr_return: (function() {
        TM1RulesParser.expr_return = function(){};
        org.antlr.lang.extend(TM1RulesParser.expr_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // TM1Rules.g:32:1: expr : expr7 ;
    // $ANTLR start "expr"
    expr: function() {
        var retval = new TM1RulesParser.expr_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var expr733 = null;


        try {
            // TM1Rules.g:32:6: ( expr7 )
            // TM1Rules.g:32:8: expr7
            root_0 = this.adaptor.nil();

            this.pushFollow(TM1RulesParser.FOLLOW_expr7_in_expr352);
            expr733=this.expr7();

            this.state._fsp--;

            this.adaptor.addChild(root_0, expr733.getTree());



            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    expr7_return: (function() {
        TM1RulesParser.expr7_return = function(){};
        org.antlr.lang.extend(TM1RulesParser.expr7_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // TM1Rules.g:33:1: expr7 : expr6 ( '%' expr6 )* ;
    // $ANTLR start "expr7"
    expr7: function() {
        var retval = new TM1RulesParser.expr7_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal35 = null;
         var expr634 = null;
         var expr636 = null;

        var char_literal35_tree=null;

        try {
            // TM1Rules.g:33:7: ( expr6 ( '%' expr6 )* )
            // TM1Rules.g:33:9: expr6 ( '%' expr6 )*
            root_0 = this.adaptor.nil();

            this.pushFollow(TM1RulesParser.FOLLOW_expr6_in_expr7360);
            expr634=this.expr6();

            this.state._fsp--;

            this.adaptor.addChild(root_0, expr634.getTree());
            // TM1Rules.g:33:15: ( '%' expr6 )*
            loop11:
            do {
                var alt11=2;
                var LA11_0 = this.input.LA(1);

                if ( (LA11_0==48) ) {
                    alt11=1;
                }


                switch (alt11) {
                case 1 :
                    // TM1Rules.g:33:16: '%' expr6
                    char_literal35=this.match(this.input,48,TM1RulesParser.FOLLOW_48_in_expr7363); 
                    char_literal35_tree = this.adaptor.create(char_literal35);
                    root_0 = this.adaptor.becomeRoot(char_literal35_tree, root_0);

                    this.pushFollow(TM1RulesParser.FOLLOW_expr6_in_expr7366);
                    expr636=this.expr6();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, expr636.getTree());


                    break;

                default :
                    break loop11;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    expr6_return: (function() {
        TM1RulesParser.expr6_return = function(){};
        org.antlr.lang.extend(TM1RulesParser.expr6_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // TM1Rules.g:34:1: expr6 : expr5 ( '&' expr5 )* ;
    // $ANTLR start "expr6"
    expr6: function() {
        var retval = new TM1RulesParser.expr6_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal38 = null;
         var expr537 = null;
         var expr539 = null;

        var char_literal38_tree=null;

        try {
            // TM1Rules.g:34:7: ( expr5 ( '&' expr5 )* )
            // TM1Rules.g:34:9: expr5 ( '&' expr5 )*
            root_0 = this.adaptor.nil();

            this.pushFollow(TM1RulesParser.FOLLOW_expr5_in_expr6376);
            expr537=this.expr5();

            this.state._fsp--;

            this.adaptor.addChild(root_0, expr537.getTree());
            // TM1Rules.g:34:15: ( '&' expr5 )*
            loop12:
            do {
                var alt12=2;
                var LA12_0 = this.input.LA(1);

                if ( (LA12_0==49) ) {
                    alt12=1;
                }


                switch (alt12) {
                case 1 :
                    // TM1Rules.g:34:16: '&' expr5
                    char_literal38=this.match(this.input,49,TM1RulesParser.FOLLOW_49_in_expr6379); 
                    char_literal38_tree = this.adaptor.create(char_literal38);
                    root_0 = this.adaptor.becomeRoot(char_literal38_tree, root_0);

                    this.pushFollow(TM1RulesParser.FOLLOW_expr5_in_expr6382);
                    expr539=this.expr5();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, expr539.getTree());


                    break;

                default :
                    break loop12;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    expr5_return: (function() {
        TM1RulesParser.expr5_return = function(){};
        org.antlr.lang.extend(TM1RulesParser.expr5_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // TM1Rules.g:35:1: expr5 : expr4 ( '=' expr4 | '<>' expr4 | '>' expr4 | '<' expr4 | '<=' expr4 | '>=' expr4 | '@=' expr4 | '@<>' expr4 | '@>' expr4 | '@<' expr4 | '@<=' expr4 | '@>=' expr4 )? ;
    // $ANTLR start "expr5"
    expr5: function() {
        var retval = new TM1RulesParser.expr5_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal41 = null;
        var string_literal43 = null;
        var char_literal45 = null;
        var char_literal47 = null;
        var string_literal49 = null;
        var string_literal51 = null;
        var string_literal53 = null;
        var string_literal55 = null;
        var string_literal57 = null;
        var string_literal59 = null;
        var string_literal61 = null;
        var string_literal63 = null;
         var expr440 = null;
         var expr442 = null;
         var expr444 = null;
         var expr446 = null;
         var expr448 = null;
         var expr450 = null;
         var expr452 = null;
         var expr454 = null;
         var expr456 = null;
         var expr458 = null;
         var expr460 = null;
         var expr462 = null;
         var expr464 = null;

        var char_literal41_tree=null;
        var string_literal43_tree=null;
        var char_literal45_tree=null;
        var char_literal47_tree=null;
        var string_literal49_tree=null;
        var string_literal51_tree=null;
        var string_literal53_tree=null;
        var string_literal55_tree=null;
        var string_literal57_tree=null;
        var string_literal59_tree=null;
        var string_literal61_tree=null;
        var string_literal63_tree=null;

        try {
            // TM1Rules.g:35:7: ( expr4 ( '=' expr4 | '<>' expr4 | '>' expr4 | '<' expr4 | '<=' expr4 | '>=' expr4 | '@=' expr4 | '@<>' expr4 | '@>' expr4 | '@<' expr4 | '@<=' expr4 | '@>=' expr4 )? )
            // TM1Rules.g:35:9: expr4 ( '=' expr4 | '<>' expr4 | '>' expr4 | '<' expr4 | '<=' expr4 | '>=' expr4 | '@=' expr4 | '@<>' expr4 | '@>' expr4 | '@<' expr4 | '@<=' expr4 | '@>=' expr4 )?
            root_0 = this.adaptor.nil();

            this.pushFollow(TM1RulesParser.FOLLOW_expr4_in_expr5392);
            expr440=this.expr4();

            this.state._fsp--;

            this.adaptor.addChild(root_0, expr440.getTree());
            // TM1Rules.g:35:15: ( '=' expr4 | '<>' expr4 | '>' expr4 | '<' expr4 | '<=' expr4 | '>=' expr4 | '@=' expr4 | '@<>' expr4 | '@>' expr4 | '@<' expr4 | '@<=' expr4 | '@>=' expr4 )?
            var alt13=13;
            switch ( this.input.LA(1) ) {
                case 39:
                    alt13=1;
                    break;
                case 50:
                    alt13=2;
                    break;
                case 51:
                    alt13=3;
                    break;
                case 52:
                    alt13=4;
                    break;
                case 53:
                    alt13=5;
                    break;
                case 54:
                    alt13=6;
                    break;
                case 55:
                    alt13=7;
                    break;
                case 56:
                    alt13=8;
                    break;
                case 57:
                    alt13=9;
                    break;
                case 58:
                    alt13=10;
                    break;
                case 59:
                    alt13=11;
                    break;
                case 60:
                    alt13=12;
                    break;
            }

            switch (alt13) {
                case 1 :
                    // TM1Rules.g:36:4: '=' expr4
                    char_literal41=this.match(this.input,39,TM1RulesParser.FOLLOW_39_in_expr5399); 
                    char_literal41_tree = this.adaptor.create(char_literal41);
                    root_0 = this.adaptor.becomeRoot(char_literal41_tree, root_0);

                    this.pushFollow(TM1RulesParser.FOLLOW_expr4_in_expr5402);
                    expr442=this.expr4();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, expr442.getTree());


                    break;
                case 2 :
                    // TM1Rules.g:36:18: '<>' expr4
                    string_literal43=this.match(this.input,50,TM1RulesParser.FOLLOW_50_in_expr5407); 
                    string_literal43_tree = this.adaptor.create(string_literal43);
                    root_0 = this.adaptor.becomeRoot(string_literal43_tree, root_0);

                    this.pushFollow(TM1RulesParser.FOLLOW_expr4_in_expr5410);
                    expr444=this.expr4();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, expr444.getTree());


                    break;
                case 3 :
                    // TM1Rules.g:36:33: '>' expr4
                    char_literal45=this.match(this.input,51,TM1RulesParser.FOLLOW_51_in_expr5415); 
                    char_literal45_tree = this.adaptor.create(char_literal45);
                    root_0 = this.adaptor.becomeRoot(char_literal45_tree, root_0);

                    this.pushFollow(TM1RulesParser.FOLLOW_expr4_in_expr5418);
                    expr446=this.expr4();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, expr446.getTree());


                    break;
                case 4 :
                    // TM1Rules.g:36:47: '<' expr4
                    char_literal47=this.match(this.input,52,TM1RulesParser.FOLLOW_52_in_expr5423); 
                    char_literal47_tree = this.adaptor.create(char_literal47);
                    root_0 = this.adaptor.becomeRoot(char_literal47_tree, root_0);

                    this.pushFollow(TM1RulesParser.FOLLOW_expr4_in_expr5426);
                    expr448=this.expr4();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, expr448.getTree());


                    break;
                case 5 :
                    // TM1Rules.g:36:61: '<=' expr4
                    string_literal49=this.match(this.input,53,TM1RulesParser.FOLLOW_53_in_expr5431); 
                    string_literal49_tree = this.adaptor.create(string_literal49);
                    root_0 = this.adaptor.becomeRoot(string_literal49_tree, root_0);

                    this.pushFollow(TM1RulesParser.FOLLOW_expr4_in_expr5434);
                    expr450=this.expr4();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, expr450.getTree());


                    break;
                case 6 :
                    // TM1Rules.g:36:76: '>=' expr4
                    string_literal51=this.match(this.input,54,TM1RulesParser.FOLLOW_54_in_expr5439); 
                    string_literal51_tree = this.adaptor.create(string_literal51);
                    root_0 = this.adaptor.becomeRoot(string_literal51_tree, root_0);

                    this.pushFollow(TM1RulesParser.FOLLOW_expr4_in_expr5442);
                    expr452=this.expr4();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, expr452.getTree());


                    break;
                case 7 :
                    // TM1Rules.g:37:3: '@=' expr4
                    string_literal53=this.match(this.input,55,TM1RulesParser.FOLLOW_55_in_expr5448); 
                    string_literal53_tree = this.adaptor.create(string_literal53);
                    root_0 = this.adaptor.becomeRoot(string_literal53_tree, root_0);

                    this.pushFollow(TM1RulesParser.FOLLOW_expr4_in_expr5451);
                    expr454=this.expr4();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, expr454.getTree());


                    break;
                case 8 :
                    // TM1Rules.g:37:17: '@<>' expr4
                    string_literal55=this.match(this.input,56,TM1RulesParser.FOLLOW_56_in_expr5455); 
                    string_literal55_tree = this.adaptor.create(string_literal55);
                    root_0 = this.adaptor.becomeRoot(string_literal55_tree, root_0);

                    this.pushFollow(TM1RulesParser.FOLLOW_expr4_in_expr5458);
                    expr456=this.expr4();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, expr456.getTree());


                    break;
                case 9 :
                    // TM1Rules.g:37:32: '@>' expr4
                    string_literal57=this.match(this.input,57,TM1RulesParser.FOLLOW_57_in_expr5462); 
                    string_literal57_tree = this.adaptor.create(string_literal57);
                    root_0 = this.adaptor.becomeRoot(string_literal57_tree, root_0);

                    this.pushFollow(TM1RulesParser.FOLLOW_expr4_in_expr5465);
                    expr458=this.expr4();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, expr458.getTree());


                    break;
                case 10 :
                    // TM1Rules.g:37:46: '@<' expr4
                    string_literal59=this.match(this.input,58,TM1RulesParser.FOLLOW_58_in_expr5469); 
                    string_literal59_tree = this.adaptor.create(string_literal59);
                    root_0 = this.adaptor.becomeRoot(string_literal59_tree, root_0);

                    this.pushFollow(TM1RulesParser.FOLLOW_expr4_in_expr5472);
                    expr460=this.expr4();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, expr460.getTree());


                    break;
                case 11 :
                    // TM1Rules.g:37:60: '@<=' expr4
                    string_literal61=this.match(this.input,59,TM1RulesParser.FOLLOW_59_in_expr5476); 
                    string_literal61_tree = this.adaptor.create(string_literal61);
                    root_0 = this.adaptor.becomeRoot(string_literal61_tree, root_0);

                    this.pushFollow(TM1RulesParser.FOLLOW_expr4_in_expr5479);
                    expr462=this.expr4();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, expr462.getTree());


                    break;
                case 12 :
                    // TM1Rules.g:37:75: '@>=' expr4
                    string_literal63=this.match(this.input,60,TM1RulesParser.FOLLOW_60_in_expr5483); 
                    string_literal63_tree = this.adaptor.create(string_literal63);
                    root_0 = this.adaptor.becomeRoot(string_literal63_tree, root_0);

                    this.pushFollow(TM1RulesParser.FOLLOW_expr4_in_expr5486);
                    expr464=this.expr4();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, expr464.getTree());


                    break;

            }




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    expr4_return: (function() {
        TM1RulesParser.expr4_return = function(){};
        org.antlr.lang.extend(TM1RulesParser.expr4_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // TM1Rules.g:39:1: expr4 : expr3 ( '+' expr3 | '-' expr3 | '|' expr3 )* ;
    // $ANTLR start "expr4"
    expr4: function() {
        var retval = new TM1RulesParser.expr4_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal66 = null;
        var char_literal68 = null;
        var char_literal70 = null;
         var expr365 = null;
         var expr367 = null;
         var expr369 = null;
         var expr371 = null;

        var char_literal66_tree=null;
        var char_literal68_tree=null;
        var char_literal70_tree=null;

        try {
            // TM1Rules.g:39:7: ( expr3 ( '+' expr3 | '-' expr3 | '|' expr3 )* )
            // TM1Rules.g:39:9: expr3 ( '+' expr3 | '-' expr3 | '|' expr3 )*
            root_0 = this.adaptor.nil();

            this.pushFollow(TM1RulesParser.FOLLOW_expr3_in_expr4497);
            expr365=this.expr3();

            this.state._fsp--;

            this.adaptor.addChild(root_0, expr365.getTree());
            // TM1Rules.g:39:15: ( '+' expr3 | '-' expr3 | '|' expr3 )*
            loop14:
            do {
                var alt14=4;
                switch ( this.input.LA(1) ) {
                case 61:
                    alt14=1;
                    break;
                case 62:
                    alt14=2;
                    break;
                case 63:
                    alt14=3;
                    break;

                }

                switch (alt14) {
                case 1 :
                    // TM1Rules.g:39:16: '+' expr3
                    char_literal66=this.match(this.input,61,TM1RulesParser.FOLLOW_61_in_expr4500); 
                    char_literal66_tree = this.adaptor.create(char_literal66);
                    root_0 = this.adaptor.becomeRoot(char_literal66_tree, root_0);

                    this.pushFollow(TM1RulesParser.FOLLOW_expr3_in_expr4503);
                    expr367=this.expr3();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, expr367.getTree());


                    break;
                case 2 :
                    // TM1Rules.g:39:29: '-' expr3
                    char_literal68=this.match(this.input,62,TM1RulesParser.FOLLOW_62_in_expr4507); 
                    char_literal68_tree = this.adaptor.create(char_literal68);
                    root_0 = this.adaptor.becomeRoot(char_literal68_tree, root_0);

                    this.pushFollow(TM1RulesParser.FOLLOW_expr3_in_expr4510);
                    expr369=this.expr3();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, expr369.getTree());


                    break;
                case 3 :
                    // TM1Rules.g:39:42: '|' expr3
                    char_literal70=this.match(this.input,63,TM1RulesParser.FOLLOW_63_in_expr4514); 
                    char_literal70_tree = this.adaptor.create(char_literal70);
                    root_0 = this.adaptor.becomeRoot(char_literal70_tree, root_0);

                    this.pushFollow(TM1RulesParser.FOLLOW_expr3_in_expr4517);
                    expr371=this.expr3();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, expr371.getTree());


                    break;

                default :
                    break loop14;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    expr3_return: (function() {
        TM1RulesParser.expr3_return = function(){};
        org.antlr.lang.extend(TM1RulesParser.expr3_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // TM1Rules.g:40:1: expr3 : expr2 ( '*' expr2 | '/' expr2 | '\\\\' expr2 )* ;
    // $ANTLR start "expr3"
    expr3: function() {
        var retval = new TM1RulesParser.expr3_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal73 = null;
        var char_literal75 = null;
        var char_literal77 = null;
         var expr272 = null;
         var expr274 = null;
         var expr276 = null;
         var expr278 = null;

        var char_literal73_tree=null;
        var char_literal75_tree=null;
        var char_literal77_tree=null;

        try {
            // TM1Rules.g:40:7: ( expr2 ( '*' expr2 | '/' expr2 | '\\\\' expr2 )* )
            // TM1Rules.g:40:9: expr2 ( '*' expr2 | '/' expr2 | '\\\\' expr2 )*
            root_0 = this.adaptor.nil();

            this.pushFollow(TM1RulesParser.FOLLOW_expr2_in_expr3527);
            expr272=this.expr2();

            this.state._fsp--;

            this.adaptor.addChild(root_0, expr272.getTree());
            // TM1Rules.g:40:15: ( '*' expr2 | '/' expr2 | '\\\\' expr2 )*
            loop15:
            do {
                var alt15=4;
                switch ( this.input.LA(1) ) {
                case 64:
                    alt15=1;
                    break;
                case 65:
                    alt15=2;
                    break;
                case 66:
                    alt15=3;
                    break;

                }

                switch (alt15) {
                case 1 :
                    // TM1Rules.g:40:16: '*' expr2
                    char_literal73=this.match(this.input,64,TM1RulesParser.FOLLOW_64_in_expr3530); 
                    char_literal73_tree = this.adaptor.create(char_literal73);
                    root_0 = this.adaptor.becomeRoot(char_literal73_tree, root_0);

                    this.pushFollow(TM1RulesParser.FOLLOW_expr2_in_expr3533);
                    expr274=this.expr2();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, expr274.getTree());


                    break;
                case 2 :
                    // TM1Rules.g:40:29: '/' expr2
                    char_literal75=this.match(this.input,65,TM1RulesParser.FOLLOW_65_in_expr3537); 
                    char_literal75_tree = this.adaptor.create(char_literal75);
                    root_0 = this.adaptor.becomeRoot(char_literal75_tree, root_0);

                    this.pushFollow(TM1RulesParser.FOLLOW_expr2_in_expr3540);
                    expr276=this.expr2();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, expr276.getTree());


                    break;
                case 3 :
                    // TM1Rules.g:40:42: '\\\\' expr2
                    char_literal77=this.match(this.input,66,TM1RulesParser.FOLLOW_66_in_expr3544); 
                    char_literal77_tree = this.adaptor.create(char_literal77);
                    root_0 = this.adaptor.becomeRoot(char_literal77_tree, root_0);

                    this.pushFollow(TM1RulesParser.FOLLOW_expr2_in_expr3547);
                    expr278=this.expr2();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, expr278.getTree());


                    break;

                default :
                    break loop15;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    expr2_return: (function() {
        TM1RulesParser.expr2_return = function(){};
        org.antlr.lang.extend(TM1RulesParser.expr2_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // TM1Rules.g:41:1: expr2 : expr1 ( '^' expr2 )? ;
    // $ANTLR start "expr2"
    expr2: function() {
        var retval = new TM1RulesParser.expr2_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal80 = null;
         var expr179 = null;
         var expr281 = null;

        var char_literal80_tree=null;

        try {
            // TM1Rules.g:41:7: ( expr1 ( '^' expr2 )? )
            // TM1Rules.g:41:9: expr1 ( '^' expr2 )?
            root_0 = this.adaptor.nil();

            this.pushFollow(TM1RulesParser.FOLLOW_expr1_in_expr2557);
            expr179=this.expr1();

            this.state._fsp--;

            this.adaptor.addChild(root_0, expr179.getTree());
            // TM1Rules.g:41:15: ( '^' expr2 )?
            var alt16=2;
            var LA16_0 = this.input.LA(1);

            if ( (LA16_0==67) ) {
                alt16=1;
            }
            switch (alt16) {
                case 1 :
                    // TM1Rules.g:41:16: '^' expr2
                    char_literal80=this.match(this.input,67,TM1RulesParser.FOLLOW_67_in_expr2560); 
                    char_literal80_tree = this.adaptor.create(char_literal80);
                    root_0 = this.adaptor.becomeRoot(char_literal80_tree, root_0);

                    this.pushFollow(TM1RulesParser.FOLLOW_expr2_in_expr2563);
                    expr281=this.expr2();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, expr281.getTree());


                    break;

            }




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    expr1_return: (function() {
        TM1RulesParser.expr1_return = function(){};
        org.antlr.lang.extend(TM1RulesParser.expr1_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // TM1Rules.g:42:1: expr1 : ( '+' expr1 | '-' expr1 | '~' expr1 | expr0 );
    // $ANTLR start "expr1"
    expr1: function() {
        var retval = new TM1RulesParser.expr1_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal82 = null;
        var char_literal84 = null;
        var char_literal86 = null;
         var expr183 = null;
         var expr185 = null;
         var expr187 = null;
         var expr088 = null;

        var char_literal82_tree=null;
        var char_literal84_tree=null;
        var char_literal86_tree=null;

        try {
            // TM1Rules.g:42:7: ( '+' expr1 | '-' expr1 | '~' expr1 | expr0 )
            var alt17=4;
            switch ( this.input.LA(1) ) {
            case 61:
                alt17=1;
                break;
            case 62:
                alt17=2;
                break;
            case 68:
                alt17=3;
                break;
            case T_CONTINUE:
            case T_STET:
            case T_IDENTIFIER:
            case T_BANG_IDENTIFIER:
            case T_NUMBER:
            case T_STRING:
            case 69:
            case 71:
                alt17=4;
                break;
            default:
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 17, 0, this.input);

                throw nvae;
            }

            switch (alt17) {
                case 1 :
                    // TM1Rules.g:42:9: '+' expr1
                    root_0 = this.adaptor.nil();

                    char_literal82=this.match(this.input,61,TM1RulesParser.FOLLOW_61_in_expr1573); 
                    char_literal82_tree = this.adaptor.create(char_literal82);
                    root_0 = this.adaptor.becomeRoot(char_literal82_tree, root_0);

                    this.pushFollow(TM1RulesParser.FOLLOW_expr1_in_expr1576);
                    expr183=this.expr1();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, expr183.getTree());


                    break;
                case 2 :
                    // TM1Rules.g:42:22: '-' expr1
                    root_0 = this.adaptor.nil();

                    char_literal84=this.match(this.input,62,TM1RulesParser.FOLLOW_62_in_expr1580); 
                    char_literal84_tree = this.adaptor.create(char_literal84);
                    root_0 = this.adaptor.becomeRoot(char_literal84_tree, root_0);

                    this.pushFollow(TM1RulesParser.FOLLOW_expr1_in_expr1583);
                    expr185=this.expr1();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, expr185.getTree());


                    break;
                case 3 :
                    // TM1Rules.g:42:35: '~' expr1
                    root_0 = this.adaptor.nil();

                    char_literal86=this.match(this.input,68,TM1RulesParser.FOLLOW_68_in_expr1587); 
                    char_literal86_tree = this.adaptor.create(char_literal86);
                    root_0 = this.adaptor.becomeRoot(char_literal86_tree, root_0);

                    this.pushFollow(TM1RulesParser.FOLLOW_expr1_in_expr1590);
                    expr187=this.expr1();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, expr187.getTree());


                    break;
                case 4 :
                    // TM1Rules.g:42:48: expr0
                    root_0 = this.adaptor.nil();

                    this.pushFollow(TM1RulesParser.FOLLOW_expr0_in_expr1594);
                    expr088=this.expr0();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, expr088.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    expr0_return: (function() {
        TM1RulesParser.expr0_return = function(){};
        org.antlr.lang.extend(TM1RulesParser.expr0_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // TM1Rules.g:43:1: expr0 : ( number | string | bang_identifier | '(' expr ')' | function | areaDefn | kwContinue | kwStet );
    // $ANTLR start "expr0"
    expr0: function() {
        var retval = new TM1RulesParser.expr0_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal92 = null;
        var char_literal94 = null;
         var number89 = null;
         var string90 = null;
         var bang_identifier91 = null;
         var expr93 = null;
         var function95 = null;
         var areaDefn96 = null;
         var kwContinue97 = null;
         var kwStet98 = null;

        var char_literal92_tree=null;
        var char_literal94_tree=null;

        try {
            // TM1Rules.g:43:7: ( number | string | bang_identifier | '(' expr ')' | function | areaDefn | kwContinue | kwStet )
            var alt18=8;
            switch ( this.input.LA(1) ) {
            case T_NUMBER:
                alt18=1;
                break;
            case T_STRING:
                alt18=2;
                break;
            case T_BANG_IDENTIFIER:
                alt18=3;
                break;
            case 69:
                alt18=4;
                break;
            case T_IDENTIFIER:
                alt18=5;
                break;
            case 71:
                alt18=6;
                break;
            case T_CONTINUE:
                alt18=7;
                break;
            case T_STET:
                alt18=8;
                break;
            default:
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 18, 0, this.input);

                throw nvae;
            }

            switch (alt18) {
                case 1 :
                    // TM1Rules.g:43:9: number
                    root_0 = this.adaptor.nil();

                    this.pushFollow(TM1RulesParser.FOLLOW_number_in_expr0602);
                    number89=this.number();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, number89.getTree());


                    break;
                case 2 :
                    // TM1Rules.g:43:18: string
                    root_0 = this.adaptor.nil();

                    this.pushFollow(TM1RulesParser.FOLLOW_string_in_expr0606);
                    string90=this.string();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, string90.getTree());


                    break;
                case 3 :
                    // TM1Rules.g:43:27: bang_identifier
                    root_0 = this.adaptor.nil();

                    this.pushFollow(TM1RulesParser.FOLLOW_bang_identifier_in_expr0610);
                    bang_identifier91=this.bang_identifier();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, bang_identifier91.getTree());


                    break;
                case 4 :
                    // TM1Rules.g:43:45: '(' expr ')'
                    root_0 = this.adaptor.nil();

                    char_literal92=this.match(this.input,69,TM1RulesParser.FOLLOW_69_in_expr0614); 
                    this.pushFollow(TM1RulesParser.FOLLOW_expr_in_expr0617);
                    expr93=this.expr();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, expr93.getTree());
                    char_literal94=this.match(this.input,70,TM1RulesParser.FOLLOW_70_in_expr0619); 


                    break;
                case 5 :
                    // TM1Rules.g:43:62: function
                    root_0 = this.adaptor.nil();

                    this.pushFollow(TM1RulesParser.FOLLOW_function_in_expr0624);
                    function95=this.function();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, function95.getTree());


                    break;
                case 6 :
                    // TM1Rules.g:43:73: areaDefn
                    root_0 = this.adaptor.nil();

                    this.pushFollow(TM1RulesParser.FOLLOW_areaDefn_in_expr0628);
                    areaDefn96=this.areaDefn();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, areaDefn96.getTree());


                    break;
                case 7 :
                    // TM1Rules.g:43:84: kwContinue
                    root_0 = this.adaptor.nil();

                    this.pushFollow(TM1RulesParser.FOLLOW_kwContinue_in_expr0632);
                    kwContinue97=this.kwContinue();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, kwContinue97.getTree());


                    break;
                case 8 :
                    // TM1Rules.g:43:97: kwStet
                    root_0 = this.adaptor.nil();

                    this.pushFollow(TM1RulesParser.FOLLOW_kwStet_in_expr0636);
                    kwStet98=this.kwStet();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, kwStet98.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    function_return: (function() {
        TM1RulesParser.function_return = function(){};
        org.antlr.lang.extend(TM1RulesParser.function_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // TM1Rules.g:45:1: function : identifier '(' ( exprList )? ')' -> ^( FUNCTION identifier ( exprList )? ) ;
    // $ANTLR start "function"
    function: function() {
        var retval = new TM1RulesParser.function_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal100 = null;
        var char_literal102 = null;
         var identifier99 = null;
         var exprList101 = null;

        var char_literal100_tree=null;
        var char_literal102_tree=null;
        var stream_69=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 69");
        var stream_70=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 70");
        var stream_identifier=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule identifier");
        var stream_exprList=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule exprList");
        try {
            // TM1Rules.g:45:10: ( identifier '(' ( exprList )? ')' -> ^( FUNCTION identifier ( exprList )? ) )
            // TM1Rules.g:45:12: identifier '(' ( exprList )? ')'
            this.pushFollow(TM1RulesParser.FOLLOW_identifier_in_function645);
            identifier99=this.identifier();

            this.state._fsp--;

            stream_identifier.add(identifier99.getTree());
            char_literal100=this.match(this.input,69,TM1RulesParser.FOLLOW_69_in_function647);  
            stream_69.add(char_literal100);

            // TM1Rules.g:45:27: ( exprList )?
            var alt19=2;
            var LA19_0 = this.input.LA(1);

            if ( ((LA19_0>=T_CONTINUE && LA19_0<=T_STET)||(LA19_0>=T_IDENTIFIER && LA19_0<=T_STRING)||(LA19_0>=61 && LA19_0<=62)||(LA19_0>=68 && LA19_0<=69)||LA19_0==71) ) {
                alt19=1;
            }
            switch (alt19) {
                case 1 :
                    // TM1Rules.g:45:27: exprList
                    this.pushFollow(TM1RulesParser.FOLLOW_exprList_in_function649);
                    exprList101=this.exprList();

                    this.state._fsp--;

                    stream_exprList.add(exprList101.getTree());


                    break;

            }

            char_literal102=this.match(this.input,70,TM1RulesParser.FOLLOW_70_in_function652);  
            stream_70.add(char_literal102);



            // AST REWRITE
            // elements: identifier, exprList
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 45:41: -> ^( FUNCTION identifier ( exprList )? )
            {
                // TM1Rules.g:45:44: ^( FUNCTION identifier ( exprList )? )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(FUNCTION, "FUNCTION"), root_1);

                this.adaptor.addChild(root_1, stream_identifier.nextTree());
                // TM1Rules.g:45:66: ( exprList )?
                if ( stream_exprList.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_exprList.nextTree());

                }
                stream_exprList.reset();

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    areaDefn_return: (function() {
        TM1RulesParser.areaDefn_return = function(){};
        org.antlr.lang.extend(TM1RulesParser.areaDefn_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // TM1Rules.g:48:1: areaDefn : '[' ( areaScopedItems )? ']' -> ^( AREA_DEFN ( areaScopedItems )? ) ;
    // $ANTLR start "areaDefn"
    areaDefn: function() {
        var retval = new TM1RulesParser.areaDefn_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal103 = null;
        var char_literal105 = null;
         var areaScopedItems104 = null;

        var char_literal103_tree=null;
        var char_literal105_tree=null;
        var stream_71=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 71");
        var stream_72=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 72");
        var stream_areaScopedItems=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule areaScopedItems");
        try {
            // TM1Rules.g:48:10: ( '[' ( areaScopedItems )? ']' -> ^( AREA_DEFN ( areaScopedItems )? ) )
            // TM1Rules.g:48:12: '[' ( areaScopedItems )? ']'
            char_literal103=this.match(this.input,71,TM1RulesParser.FOLLOW_71_in_areaDefn672);  
            stream_71.add(char_literal103);

            // TM1Rules.g:48:16: ( areaScopedItems )?
            var alt20=2;
            var LA20_0 = this.input.LA(1);

            if ( (LA20_0==T_IDENTIFIER||LA20_0==T_STRING||LA20_0==74) ) {
                alt20=1;
            }
            switch (alt20) {
                case 1 :
                    // TM1Rules.g:48:16: areaScopedItems
                    this.pushFollow(TM1RulesParser.FOLLOW_areaScopedItems_in_areaDefn674);
                    areaScopedItems104=this.areaScopedItems();

                    this.state._fsp--;

                    stream_areaScopedItems.add(areaScopedItems104.getTree());


                    break;

            }

            char_literal105=this.match(this.input,72,TM1RulesParser.FOLLOW_72_in_areaDefn677);  
            stream_72.add(char_literal105);



            // AST REWRITE
            // elements: areaScopedItems
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 48:37: -> ^( AREA_DEFN ( areaScopedItems )? )
            {
                // TM1Rules.g:48:40: ^( AREA_DEFN ( areaScopedItems )? )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(AREA_DEFN, "AREA_DEFN"), root_1);

                // TM1Rules.g:48:52: ( areaScopedItems )?
                if ( stream_areaScopedItems.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_areaScopedItems.nextTree());

                }
                stream_areaScopedItems.reset();

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    areaScopedItems_return: (function() {
        TM1RulesParser.areaScopedItems_return = function(){};
        org.antlr.lang.extend(TM1RulesParser.areaScopedItems_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // TM1Rules.g:49:1: areaScopedItems : areaScopedItem ( ',' areaScopedItem )* ;
    // $ANTLR start "areaScopedItems"
    areaScopedItems: function() {
        var retval = new TM1RulesParser.areaScopedItems_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal107 = null;
         var areaScopedItem106 = null;
         var areaScopedItem108 = null;

        var char_literal107_tree=null;

        try {
            // TM1Rules.g:49:17: ( areaScopedItem ( ',' areaScopedItem )* )
            // TM1Rules.g:49:19: areaScopedItem ( ',' areaScopedItem )*
            root_0 = this.adaptor.nil();

            this.pushFollow(TM1RulesParser.FOLLOW_areaScopedItem_in_areaScopedItems694);
            areaScopedItem106=this.areaScopedItem();

            this.state._fsp--;

            this.adaptor.addChild(root_0, areaScopedItem106.getTree());
            // TM1Rules.g:49:34: ( ',' areaScopedItem )*
            loop21:
            do {
                var alt21=2;
                var LA21_0 = this.input.LA(1);

                if ( (LA21_0==73) ) {
                    alt21=1;
                }


                switch (alt21) {
                case 1 :
                    // TM1Rules.g:49:35: ',' areaScopedItem
                    char_literal107=this.match(this.input,73,TM1RulesParser.FOLLOW_73_in_areaScopedItems697); 
                    this.pushFollow(TM1RulesParser.FOLLOW_areaScopedItem_in_areaScopedItems700);
                    areaScopedItem108=this.areaScopedItem();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, areaScopedItem108.getTree());


                    break;

                default :
                    break loop21;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    areaScopedItem_return: (function() {
        TM1RulesParser.areaScopedItem_return = function(){};
        org.antlr.lang.extend(TM1RulesParser.areaScopedItem_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // TM1Rules.g:50:1: areaScopedItem : ( areaScope ':' areaItemBody -> ^( AREA_SCOPE areaScope areaItemBody ) | areaItemBody );
    // $ANTLR start "areaScopedItem"
    areaScopedItem: function() {
        var retval = new TM1RulesParser.areaScopedItem_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal110 = null;
         var areaScope109 = null;
         var areaItemBody111 = null;
         var areaItemBody112 = null;

        var char_literal110_tree=null;
        var stream_40=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 40");
        var stream_areaItemBody=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule areaItemBody");
        var stream_areaScope=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule areaScope");
        try {
            // TM1Rules.g:50:16: ( areaScope ':' areaItemBody -> ^( AREA_SCOPE areaScope areaItemBody ) | areaItemBody )
            var alt22=2;
            switch ( this.input.LA(1) ) {
            case T_IDENTIFIER:
                alt22=1;
                break;
            case T_STRING:
                var LA22_2 = this.input.LA(2);

                if ( (LA22_2==40) ) {
                    alt22=1;
                }
                else if ( ((LA22_2>=72 && LA22_2<=73)) ) {
                    alt22=2;
                }
                else {
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 22, 2, this.input);

                    throw nvae;
                }
                break;
            case 74:
                alt22=2;
                break;
            default:
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 22, 0, this.input);

                throw nvae;
            }

            switch (alt22) {
                case 1 :
                    // TM1Rules.g:51:4: areaScope ':' areaItemBody
                    this.pushFollow(TM1RulesParser.FOLLOW_areaScope_in_areaScopedItem714);
                    areaScope109=this.areaScope();

                    this.state._fsp--;

                    stream_areaScope.add(areaScope109.getTree());
                    char_literal110=this.match(this.input,40,TM1RulesParser.FOLLOW_40_in_areaScopedItem716);  
                    stream_40.add(char_literal110);

                    this.pushFollow(TM1RulesParser.FOLLOW_areaItemBody_in_areaScopedItem718);
                    areaItemBody111=this.areaItemBody();

                    this.state._fsp--;

                    stream_areaItemBody.add(areaItemBody111.getTree());


                    // AST REWRITE
                    // elements: areaItemBody, areaScope
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 51:31: -> ^( AREA_SCOPE areaScope areaItemBody )
                    {
                        // TM1Rules.g:51:34: ^( AREA_SCOPE areaScope areaItemBody )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(AREA_SCOPE, "AREA_SCOPE"), root_1);

                        this.adaptor.addChild(root_1, stream_areaScope.nextTree());
                        this.adaptor.addChild(root_1, stream_areaItemBody.nextTree());

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;

                    break;
                case 2 :
                    // TM1Rules.g:52:4: areaItemBody
                    root_0 = this.adaptor.nil();

                    this.pushFollow(TM1RulesParser.FOLLOW_areaItemBody_in_areaScopedItem733);
                    areaItemBody112=this.areaItemBody();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, areaItemBody112.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    areaItemBody_return: (function() {
        TM1RulesParser.areaItemBody_return = function(){};
        org.antlr.lang.extend(TM1RulesParser.areaItemBody_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // TM1Rules.g:54:1: areaItemBody : ( string | areaItemSet );
    // $ANTLR start "areaItemBody"
    areaItemBody: function() {
        var retval = new TM1RulesParser.areaItemBody_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var string113 = null;
         var areaItemSet114 = null;


        try {
            // TM1Rules.g:54:14: ( string | areaItemSet )
            var alt23=2;
            var LA23_0 = this.input.LA(1);

            if ( (LA23_0==T_STRING) ) {
                alt23=1;
            }
            else if ( (LA23_0==74) ) {
                alt23=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 23, 0, this.input);

                throw nvae;
            }
            switch (alt23) {
                case 1 :
                    // TM1Rules.g:54:16: string
                    root_0 = this.adaptor.nil();

                    this.pushFollow(TM1RulesParser.FOLLOW_string_in_areaItemBody743);
                    string113=this.string();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, string113.getTree());


                    break;
                case 2 :
                    // TM1Rules.g:54:25: areaItemSet
                    root_0 = this.adaptor.nil();

                    this.pushFollow(TM1RulesParser.FOLLOW_areaItemSet_in_areaItemBody747);
                    areaItemSet114=this.areaItemSet();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, areaItemSet114.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    areaScope_return: (function() {
        TM1RulesParser.areaScope_return = function(){};
        org.antlr.lang.extend(TM1RulesParser.areaScope_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // TM1Rules.g:55:1: areaScope : ( identifier | string );
    // $ANTLR start "areaScope"
    areaScope: function() {
        var retval = new TM1RulesParser.areaScope_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var identifier115 = null;
         var string116 = null;


        try {
            // TM1Rules.g:55:11: ( identifier | string )
            var alt24=2;
            var LA24_0 = this.input.LA(1);

            if ( (LA24_0==T_IDENTIFIER) ) {
                alt24=1;
            }
            else if ( (LA24_0==T_STRING) ) {
                alt24=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 24, 0, this.input);

                throw nvae;
            }
            switch (alt24) {
                case 1 :
                    // TM1Rules.g:55:13: identifier
                    root_0 = this.adaptor.nil();

                    this.pushFollow(TM1RulesParser.FOLLOW_identifier_in_areaScope755);
                    identifier115=this.identifier();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, identifier115.getTree());


                    break;
                case 2 :
                    // TM1Rules.g:55:26: string
                    root_0 = this.adaptor.nil();

                    this.pushFollow(TM1RulesParser.FOLLOW_string_in_areaScope759);
                    string116=this.string();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, string116.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    areaItemSet_return: (function() {
        TM1RulesParser.areaItemSet_return = function(){};
        org.antlr.lang.extend(TM1RulesParser.areaItemSet_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // TM1Rules.g:56:1: areaItemSet : '{' ( strings )? '}' -> ^( AREA_ITEM_SET ( strings )? ) ;
    // $ANTLR start "areaItemSet"
    areaItemSet: function() {
        var retval = new TM1RulesParser.areaItemSet_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal117 = null;
        var char_literal119 = null;
         var strings118 = null;

        var char_literal117_tree=null;
        var char_literal119_tree=null;
        var stream_74=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 74");
        var stream_75=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 75");
        var stream_strings=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule strings");
        try {
            // TM1Rules.g:56:13: ( '{' ( strings )? '}' -> ^( AREA_ITEM_SET ( strings )? ) )
            // TM1Rules.g:56:15: '{' ( strings )? '}'
            char_literal117=this.match(this.input,74,TM1RulesParser.FOLLOW_74_in_areaItemSet767);  
            stream_74.add(char_literal117);

            // TM1Rules.g:56:19: ( strings )?
            var alt25=2;
            var LA25_0 = this.input.LA(1);

            if ( (LA25_0==T_STRING) ) {
                alt25=1;
            }
            switch (alt25) {
                case 1 :
                    // TM1Rules.g:56:19: strings
                    this.pushFollow(TM1RulesParser.FOLLOW_strings_in_areaItemSet769);
                    strings118=this.strings();

                    this.state._fsp--;

                    stream_strings.add(strings118.getTree());


                    break;

            }

            char_literal119=this.match(this.input,75,TM1RulesParser.FOLLOW_75_in_areaItemSet772);  
            stream_75.add(char_literal119);



            // AST REWRITE
            // elements: strings
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 56:32: -> ^( AREA_ITEM_SET ( strings )? )
            {
                // TM1Rules.g:56:35: ^( AREA_ITEM_SET ( strings )? )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(AREA_ITEM_SET, "AREA_ITEM_SET"), root_1);

                // TM1Rules.g:56:51: ( strings )?
                if ( stream_strings.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_strings.nextTree());

                }
                stream_strings.reset();

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    exprList_return: (function() {
        TM1RulesParser.exprList_return = function(){};
        org.antlr.lang.extend(TM1RulesParser.exprList_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // TM1Rules.g:58:1: exprList : exprs -> ^( EXPR_LIST exprs ) ;
    // $ANTLR start "exprList"
    exprList: function() {
        var retval = new TM1RulesParser.exprList_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var exprs120 = null;

        var stream_exprs=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule exprs");
        try {
            // TM1Rules.g:58:10: ( exprs -> ^( EXPR_LIST exprs ) )
            // TM1Rules.g:58:12: exprs
            this.pushFollow(TM1RulesParser.FOLLOW_exprs_in_exprList790);
            exprs120=this.exprs();

            this.state._fsp--;

            stream_exprs.add(exprs120.getTree());


            // AST REWRITE
            // elements: exprs
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 58:18: -> ^( EXPR_LIST exprs )
            {
                // TM1Rules.g:58:21: ^( EXPR_LIST exprs )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(EXPR_LIST, "EXPR_LIST"), root_1);

                this.adaptor.addChild(root_1, stream_exprs.nextTree());

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    exprs_return: (function() {
        TM1RulesParser.exprs_return = function(){};
        org.antlr.lang.extend(TM1RulesParser.exprs_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // TM1Rules.g:59:1: exprs : expr ( ',' expr )* ;
    // $ANTLR start "exprs"
    exprs: function() {
        var retval = new TM1RulesParser.exprs_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal122 = null;
         var expr121 = null;
         var expr123 = null;

        var char_literal122_tree=null;

        try {
            // TM1Rules.g:59:7: ( expr ( ',' expr )* )
            // TM1Rules.g:59:9: expr ( ',' expr )*
            root_0 = this.adaptor.nil();

            this.pushFollow(TM1RulesParser.FOLLOW_expr_in_exprs805);
            expr121=this.expr();

            this.state._fsp--;

            this.adaptor.addChild(root_0, expr121.getTree());
            // TM1Rules.g:59:14: ( ',' expr )*
            loop26:
            do {
                var alt26=2;
                var LA26_0 = this.input.LA(1);

                if ( (LA26_0==73) ) {
                    alt26=1;
                }


                switch (alt26) {
                case 1 :
                    // TM1Rules.g:59:15: ',' expr
                    char_literal122=this.match(this.input,73,TM1RulesParser.FOLLOW_73_in_exprs808); 
                    this.pushFollow(TM1RulesParser.FOLLOW_expr_in_exprs811);
                    expr123=this.expr();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, expr123.getTree());


                    break;

                default :
                    break loop26;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    strings_return: (function() {
        TM1RulesParser.strings_return = function(){};
        org.antlr.lang.extend(TM1RulesParser.strings_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // TM1Rules.g:60:1: strings : string ( ',' string )* ;
    // $ANTLR start "strings"
    strings: function() {
        var retval = new TM1RulesParser.strings_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal125 = null;
         var string124 = null;
         var string126 = null;

        var char_literal125_tree=null;

        try {
            // TM1Rules.g:60:9: ( string ( ',' string )* )
            // TM1Rules.g:60:11: string ( ',' string )*
            root_0 = this.adaptor.nil();

            this.pushFollow(TM1RulesParser.FOLLOW_string_in_strings821);
            string124=this.string();

            this.state._fsp--;

            this.adaptor.addChild(root_0, string124.getTree());
            // TM1Rules.g:60:18: ( ',' string )*
            loop27:
            do {
                var alt27=2;
                var LA27_0 = this.input.LA(1);

                if ( (LA27_0==73) ) {
                    alt27=1;
                }


                switch (alt27) {
                case 1 :
                    // TM1Rules.g:60:19: ',' string
                    char_literal125=this.match(this.input,73,TM1RulesParser.FOLLOW_73_in_strings824); 
                    this.pushFollow(TM1RulesParser.FOLLOW_string_in_strings827);
                    string126=this.string();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, string126.getTree());


                    break;

                default :
                    break loop27;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    kwContinue_return: (function() {
        TM1RulesParser.kwContinue_return = function(){};
        org.antlr.lang.extend(TM1RulesParser.kwContinue_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // TM1Rules.g:64:1: kwContinue : T_CONTINUE -> ^( CONTINUE ) ;
    // $ANTLR start "kwContinue"
    kwContinue: function() {
        var retval = new TM1RulesParser.kwContinue_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var T_CONTINUE127 = null;

        var T_CONTINUE127_tree=null;
        var stream_T_CONTINUE=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token T_CONTINUE");

        try {
            // TM1Rules.g:64:12: ( T_CONTINUE -> ^( CONTINUE ) )
            // TM1Rules.g:64:14: T_CONTINUE
            T_CONTINUE127=this.match(this.input,T_CONTINUE,TM1RulesParser.FOLLOW_T_CONTINUE_in_kwContinue840);  
            stream_T_CONTINUE.add(T_CONTINUE127);



            // AST REWRITE
            // elements: 
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 64:25: -> ^( CONTINUE )
            {
                // TM1Rules.g:64:28: ^( CONTINUE )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(CONTINUE, "CONTINUE"), root_1);

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    kwStet_return: (function() {
        TM1RulesParser.kwStet_return = function(){};
        org.antlr.lang.extend(TM1RulesParser.kwStet_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // TM1Rules.g:65:1: kwStet : T_STET -> ^( STET ) ;
    // $ANTLR start "kwStet"
    kwStet: function() {
        var retval = new TM1RulesParser.kwStet_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var T_STET128 = null;

        var T_STET128_tree=null;
        var stream_T_STET=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token T_STET");

        try {
            // TM1Rules.g:65:8: ( T_STET -> ^( STET ) )
            // TM1Rules.g:65:10: T_STET
            T_STET128=this.match(this.input,T_STET,TM1RulesParser.FOLLOW_T_STET_in_kwStet854);  
            stream_T_STET.add(T_STET128);



            // AST REWRITE
            // elements: 
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 65:17: -> ^( STET )
            {
                // TM1Rules.g:65:20: ^( STET )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(STET, "STET"), root_1);

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    kwFeeders_return: (function() {
        TM1RulesParser.kwFeeders_return = function(){};
        org.antlr.lang.extend(TM1RulesParser.kwFeeders_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // TM1Rules.g:66:1: kwFeeders : T_FEEDERS -> ^( FEEDERS ) ;
    // $ANTLR start "kwFeeders"
    kwFeeders: function() {
        var retval = new TM1RulesParser.kwFeeders_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var T_FEEDERS129 = null;

        var T_FEEDERS129_tree=null;
        var stream_T_FEEDERS=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token T_FEEDERS");

        try {
            // TM1Rules.g:66:11: ( T_FEEDERS -> ^( FEEDERS ) )
            // TM1Rules.g:66:13: T_FEEDERS
            T_FEEDERS129=this.match(this.input,T_FEEDERS,TM1RulesParser.FOLLOW_T_FEEDERS_in_kwFeeders868);  
            stream_T_FEEDERS.add(T_FEEDERS129);



            // AST REWRITE
            // elements: 
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 66:23: -> ^( FEEDERS )
            {
                // TM1Rules.g:66:26: ^( FEEDERS )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(FEEDERS, "FEEDERS"), root_1);

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    kwSkipcheck_return: (function() {
        TM1RulesParser.kwSkipcheck_return = function(){};
        org.antlr.lang.extend(TM1RulesParser.kwSkipcheck_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // TM1Rules.g:67:1: kwSkipcheck : T_SKIPCHECK -> ^( SKIPCHECK ) ;
    // $ANTLR start "kwSkipcheck"
    kwSkipcheck: function() {
        var retval = new TM1RulesParser.kwSkipcheck_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var T_SKIPCHECK130 = null;

        var T_SKIPCHECK130_tree=null;
        var stream_T_SKIPCHECK=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token T_SKIPCHECK");

        try {
            // TM1Rules.g:67:13: ( T_SKIPCHECK -> ^( SKIPCHECK ) )
            // TM1Rules.g:67:15: T_SKIPCHECK
            T_SKIPCHECK130=this.match(this.input,T_SKIPCHECK,TM1RulesParser.FOLLOW_T_SKIPCHECK_in_kwSkipcheck882);  
            stream_T_SKIPCHECK.add(T_SKIPCHECK130);



            // AST REWRITE
            // elements: 
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 67:27: -> ^( SKIPCHECK )
            {
                // TM1Rules.g:67:30: ^( SKIPCHECK )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(SKIPCHECK, "SKIPCHECK"), root_1);

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    kwUndefvals_return: (function() {
        TM1RulesParser.kwUndefvals_return = function(){};
        org.antlr.lang.extend(TM1RulesParser.kwUndefvals_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // TM1Rules.g:68:1: kwUndefvals : T_UNDEFVALS -> ^( UNDEFVALS ) ;
    // $ANTLR start "kwUndefvals"
    kwUndefvals: function() {
        var retval = new TM1RulesParser.kwUndefvals_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var T_UNDEFVALS131 = null;

        var T_UNDEFVALS131_tree=null;
        var stream_T_UNDEFVALS=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token T_UNDEFVALS");

        try {
            // TM1Rules.g:68:13: ( T_UNDEFVALS -> ^( UNDEFVALS ) )
            // TM1Rules.g:68:15: T_UNDEFVALS
            T_UNDEFVALS131=this.match(this.input,T_UNDEFVALS,TM1RulesParser.FOLLOW_T_UNDEFVALS_in_kwUndefvals896);  
            stream_T_UNDEFVALS.add(T_UNDEFVALS131);



            // AST REWRITE
            // elements: 
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 68:27: -> ^( UNDEFVALS )
            {
                // TM1Rules.g:68:30: ^( UNDEFVALS )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(UNDEFVALS, "UNDEFVALS"), root_1);

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    kwFeedstrings_return: (function() {
        TM1RulesParser.kwFeedstrings_return = function(){};
        org.antlr.lang.extend(TM1RulesParser.kwFeedstrings_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // TM1Rules.g:69:1: kwFeedstrings : T_FEEDSTRINGS -> ^( FEEDSTRINGS ) ;
    // $ANTLR start "kwFeedstrings"
    kwFeedstrings: function() {
        var retval = new TM1RulesParser.kwFeedstrings_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var T_FEEDSTRINGS132 = null;

        var T_FEEDSTRINGS132_tree=null;
        var stream_T_FEEDSTRINGS=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token T_FEEDSTRINGS");

        try {
            // TM1Rules.g:69:15: ( T_FEEDSTRINGS -> ^( FEEDSTRINGS ) )
            // TM1Rules.g:69:17: T_FEEDSTRINGS
            T_FEEDSTRINGS132=this.match(this.input,T_FEEDSTRINGS,TM1RulesParser.FOLLOW_T_FEEDSTRINGS_in_kwFeedstrings910);  
            stream_T_FEEDSTRINGS.add(T_FEEDSTRINGS132);



            // AST REWRITE
            // elements: 
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 69:31: -> ^( FEEDSTRINGS )
            {
                // TM1Rules.g:69:34: ^( FEEDSTRINGS )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(FEEDSTRINGS, "FEEDSTRINGS"), root_1);

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    identifier_return: (function() {
        TM1RulesParser.identifier_return = function(){};
        org.antlr.lang.extend(TM1RulesParser.identifier_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // TM1Rules.g:71:1: identifier : T_IDENTIFIER -> ^( IDENTIFIER T_IDENTIFIER ) ;
    // $ANTLR start "identifier"
    identifier: function() {
        var retval = new TM1RulesParser.identifier_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var T_IDENTIFIER133 = null;

        var T_IDENTIFIER133_tree=null;
        var stream_T_IDENTIFIER=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token T_IDENTIFIER");

        try {
            // TM1Rules.g:71:12: ( T_IDENTIFIER -> ^( IDENTIFIER T_IDENTIFIER ) )
            // TM1Rules.g:71:14: T_IDENTIFIER
            T_IDENTIFIER133=this.match(this.input,T_IDENTIFIER,TM1RulesParser.FOLLOW_T_IDENTIFIER_in_identifier925);  
            stream_T_IDENTIFIER.add(T_IDENTIFIER133);



            // AST REWRITE
            // elements: T_IDENTIFIER
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 71:27: -> ^( IDENTIFIER T_IDENTIFIER )
            {
                // TM1Rules.g:71:30: ^( IDENTIFIER T_IDENTIFIER )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(IDENTIFIER, "IDENTIFIER"), root_1);

                this.adaptor.addChild(root_1, stream_T_IDENTIFIER.nextNode());

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    bang_identifier_return: (function() {
        TM1RulesParser.bang_identifier_return = function(){};
        org.antlr.lang.extend(TM1RulesParser.bang_identifier_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // TM1Rules.g:72:1: bang_identifier : T_BANG_IDENTIFIER -> ^( BANG_IDENTIFIER T_BANG_IDENTIFIER ) ;
    // $ANTLR start "bang_identifier"
    bang_identifier: function() {
        var retval = new TM1RulesParser.bang_identifier_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var T_BANG_IDENTIFIER134 = null;

        var T_BANG_IDENTIFIER134_tree=null;
        var stream_T_BANG_IDENTIFIER=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token T_BANG_IDENTIFIER");

        try {
            // TM1Rules.g:72:17: ( T_BANG_IDENTIFIER -> ^( BANG_IDENTIFIER T_BANG_IDENTIFIER ) )
            // TM1Rules.g:72:19: T_BANG_IDENTIFIER
            T_BANG_IDENTIFIER134=this.match(this.input,T_BANG_IDENTIFIER,TM1RulesParser.FOLLOW_T_BANG_IDENTIFIER_in_bang_identifier941);  
            stream_T_BANG_IDENTIFIER.add(T_BANG_IDENTIFIER134);



            // AST REWRITE
            // elements: T_BANG_IDENTIFIER
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 72:37: -> ^( BANG_IDENTIFIER T_BANG_IDENTIFIER )
            {
                // TM1Rules.g:72:40: ^( BANG_IDENTIFIER T_BANG_IDENTIFIER )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(BANG_IDENTIFIER, "BANG_IDENTIFIER"), root_1);

                this.adaptor.addChild(root_1, stream_T_BANG_IDENTIFIER.nextNode());

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    number_return: (function() {
        TM1RulesParser.number_return = function(){};
        org.antlr.lang.extend(TM1RulesParser.number_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // TM1Rules.g:73:1: number : T_NUMBER -> ^( NUMBER T_NUMBER ) ;
    // $ANTLR start "number"
    number: function() {
        var retval = new TM1RulesParser.number_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var T_NUMBER135 = null;

        var T_NUMBER135_tree=null;
        var stream_T_NUMBER=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token T_NUMBER");

        try {
            // TM1Rules.g:73:8: ( T_NUMBER -> ^( NUMBER T_NUMBER ) )
            // TM1Rules.g:73:10: T_NUMBER
            T_NUMBER135=this.match(this.input,T_NUMBER,TM1RulesParser.FOLLOW_T_NUMBER_in_number957);  
            stream_T_NUMBER.add(T_NUMBER135);



            // AST REWRITE
            // elements: T_NUMBER
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 73:19: -> ^( NUMBER T_NUMBER )
            {
                // TM1Rules.g:73:22: ^( NUMBER T_NUMBER )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(NUMBER, "NUMBER"), root_1);

                this.adaptor.addChild(root_1, stream_T_NUMBER.nextNode());

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    string_return: (function() {
        TM1RulesParser.string_return = function(){};
        org.antlr.lang.extend(TM1RulesParser.string_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // TM1Rules.g:74:1: string : T_STRING -> ^( STRING T_STRING ) ;
    // $ANTLR start "string"
    string: function() {
        var retval = new TM1RulesParser.string_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var T_STRING136 = null;

        var T_STRING136_tree=null;
        var stream_T_STRING=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token T_STRING");

        try {
            // TM1Rules.g:74:8: ( T_STRING -> ^( STRING T_STRING ) )
            // TM1Rules.g:74:10: T_STRING
            T_STRING136=this.match(this.input,T_STRING,TM1RulesParser.FOLLOW_T_STRING_in_string973);  
            stream_T_STRING.add(T_STRING136);



            // AST REWRITE
            // elements: T_STRING
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 74:19: -> ^( STRING T_STRING )
            {
                // TM1Rules.g:74:22: ^( STRING T_STRING )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(STRING, "STRING"), root_1);

                this.adaptor.addChild(root_1, stream_T_STRING.nextNode());

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    }

    // Delegated rules




}, true); // important to pass true to overwrite default implementations

 

// public class variables
org.antlr.lang.augmentObject(TM1RulesParser, {
    tokenNames: ["<invalid>", "<EOR>", "<DOWN>", "<UP>", "RULE_FILE", "RULES", "RULE_DEF", "PRAGMA", "FEEDER_DEF", "LEVEL_EXPR", "N_LEVEL", "C_LEVEL", "S_LEVEL", "AREA_DEFN", "AREA_SCOPE", "AREA_ITEM_SET", "FUNCTION", "EXPR_LIST", "CONTINUE", "STET", "FEEDERS", "SKIPCHECK", "UNDEFVALS", "FEEDSTRINGS", "STRING", "IDENTIFIER", "NUMBER", "BANG_IDENTIFIER", "T_CONTINUE", "T_STET", "T_FEEDERS", "T_SKIPCHECK", "T_UNDEFVALS", "T_FEEDSTRINGS", "T_IDENTIFIER", "T_BANG_IDENTIFIER", "T_NUMBER", "T_STRING", "';'", "'='", "':'", "'N'", "'n'", "'S'", "'s'", "'C'", "'c'", "'=>'", "'%'", "'&'", "'<>'", "'>'", "'<'", "'<='", "'>='", "'@='", "'@<>'", "'@>'", "'@<'", "'@<='", "'@>='", "'+'", "'-'", "'|'", "'*'", "'/'", "'\\\\'", "'^'", "'~'", "'('", "')'", "'['", "']'", "','", "'{'", "'}'"],
    FOLLOW_rules_in_ruleFile115: new org.antlr.runtime.BitSet([0x40000002, 0x00000000]),
    FOLLOW_feeders_in_ruleFile117: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_pragma_in_rules146: new org.antlr.runtime.BitSet([0x80000002, 0x00000003,0x00000080, 0x00000000]),
    FOLLOW_ruleDef_in_rules150: new org.antlr.runtime.BitSet([0x80000002, 0x00000003,0x00000080, 0x00000000]),
    FOLLOW_kwFeeders_in_feeders160: new org.antlr.runtime.BitSet([0x00000000, 0x00000040]),
    FOLLOW_38_in_feeders163: new org.antlr.runtime.BitSet([0x80000002, 0x00008003,0x00000080, 0x00000000]),
    FOLLOW_feederDef_in_feeders166: new org.antlr.runtime.BitSet([0x80000002, 0x00008003,0x00000080, 0x00000000]),
    FOLLOW_pragmaItem_in_pragma175: new org.antlr.runtime.BitSet([0x00000000, 0x00000040]),
    FOLLOW_38_in_pragma177: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_kwSkipcheck_in_pragmaItem192: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_kwUndefvals_in_pragmaItem196: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_kwFeedstrings_in_pragmaItem200: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_areaDefn_in_ruleDef209: new org.antlr.runtime.BitSet([0x00000000, 0x00000080]),
    FOLLOW_39_in_ruleDef211: new org.antlr.runtime.BitSet([0xB0000000, 0x60007E3F,0x000000B0, 0x00000000]),
    FOLLOW_ruleBody_in_ruleDef213: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_expr_in_ruleBody230: new org.antlr.runtime.BitSet([0x00000000, 0x00000040]),
    FOLLOW_38_in_ruleBody232: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_levelExpr_in_ruleBody237: new org.antlr.runtime.BitSet([0xB0000002, 0x60007E3F,0x000000B0, 0x00000000]),
    FOLLOW_level_in_levelExpr246: new org.antlr.runtime.BitSet([0x00000000, 0x00000100]),
    FOLLOW_40_in_levelExpr248: new org.antlr.runtime.BitSet([0xB0000000, 0x6000003F,0x000000B0, 0x00000000]),
    FOLLOW_expr_in_levelExpr250: new org.antlr.runtime.BitSet([0x00000000, 0x00000040]),
    FOLLOW_38_in_levelExpr252: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_41_in_level271: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_42_in_level273: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_43_in_level288: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_44_in_level290: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_45_in_level305: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_46_in_level307: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_areaDefn_in_feederDef326: new org.antlr.runtime.BitSet([0x00000000, 0x00008000]),
    FOLLOW_47_in_feederDef328: new org.antlr.runtime.BitSet([0xB0000000, 0x6000003F,0x000000B0, 0x00000000]),
    FOLLOW_exprList_in_feederDef330: new org.antlr.runtime.BitSet([0x00000000, 0x00000040]),
    FOLLOW_38_in_feederDef332: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_expr7_in_expr352: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_expr6_in_expr7360: new org.antlr.runtime.BitSet([0x00000002, 0x00010000]),
    FOLLOW_48_in_expr7363: new org.antlr.runtime.BitSet([0xB0000000, 0x6000003F,0x000000B0, 0x00000000]),
    FOLLOW_expr6_in_expr7366: new org.antlr.runtime.BitSet([0x00000002, 0x00010000]),
    FOLLOW_expr5_in_expr6376: new org.antlr.runtime.BitSet([0x00000002, 0x00020000]),
    FOLLOW_49_in_expr6379: new org.antlr.runtime.BitSet([0xB0000000, 0x6000003F,0x000000B0, 0x00000000]),
    FOLLOW_expr5_in_expr6382: new org.antlr.runtime.BitSet([0x00000002, 0x00020000]),
    FOLLOW_expr4_in_expr5392: new org.antlr.runtime.BitSet([0x00000002, 0x1FFC0080]),
    FOLLOW_39_in_expr5399: new org.antlr.runtime.BitSet([0xB0000000, 0x6000003F,0x000000B0, 0x00000000]),
    FOLLOW_expr4_in_expr5402: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_50_in_expr5407: new org.antlr.runtime.BitSet([0xB0000000, 0x6000003F,0x000000B0, 0x00000000]),
    FOLLOW_expr4_in_expr5410: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_51_in_expr5415: new org.antlr.runtime.BitSet([0xB0000000, 0x6000003F,0x000000B0, 0x00000000]),
    FOLLOW_expr4_in_expr5418: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_52_in_expr5423: new org.antlr.runtime.BitSet([0xB0000000, 0x6000003F,0x000000B0, 0x00000000]),
    FOLLOW_expr4_in_expr5426: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_53_in_expr5431: new org.antlr.runtime.BitSet([0xB0000000, 0x6000003F,0x000000B0, 0x00000000]),
    FOLLOW_expr4_in_expr5434: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_54_in_expr5439: new org.antlr.runtime.BitSet([0xB0000000, 0x6000003F,0x000000B0, 0x00000000]),
    FOLLOW_expr4_in_expr5442: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_55_in_expr5448: new org.antlr.runtime.BitSet([0xB0000000, 0x6000003F,0x000000B0, 0x00000000]),
    FOLLOW_expr4_in_expr5451: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_56_in_expr5455: new org.antlr.runtime.BitSet([0xB0000000, 0x6000003F,0x000000B0, 0x00000000]),
    FOLLOW_expr4_in_expr5458: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_57_in_expr5462: new org.antlr.runtime.BitSet([0xB0000000, 0x6000003F,0x000000B0, 0x00000000]),
    FOLLOW_expr4_in_expr5465: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_58_in_expr5469: new org.antlr.runtime.BitSet([0xB0000000, 0x6000003F,0x000000B0, 0x00000000]),
    FOLLOW_expr4_in_expr5472: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_59_in_expr5476: new org.antlr.runtime.BitSet([0xB0000000, 0x6000003F,0x000000B0, 0x00000000]),
    FOLLOW_expr4_in_expr5479: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_60_in_expr5483: new org.antlr.runtime.BitSet([0xB0000000, 0x6000003F,0x000000B0, 0x00000000]),
    FOLLOW_expr4_in_expr5486: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_expr3_in_expr4497: new org.antlr.runtime.BitSet([0x00000002, 0xE0000000]),
    FOLLOW_61_in_expr4500: new org.antlr.runtime.BitSet([0xB0000000, 0x6000003F,0x000000B0, 0x00000000]),
    FOLLOW_expr3_in_expr4503: new org.antlr.runtime.BitSet([0x00000002, 0xE0000000]),
    FOLLOW_62_in_expr4507: new org.antlr.runtime.BitSet([0xB0000000, 0x6000003F,0x000000B0, 0x00000000]),
    FOLLOW_expr3_in_expr4510: new org.antlr.runtime.BitSet([0x00000002, 0xE0000000]),
    FOLLOW_63_in_expr4514: new org.antlr.runtime.BitSet([0xB0000000, 0x6000003F,0x000000B0, 0x00000000]),
    FOLLOW_expr3_in_expr4517: new org.antlr.runtime.BitSet([0x00000002, 0xE0000000]),
    FOLLOW_expr2_in_expr3527: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000007, 0x00000000]),
    FOLLOW_64_in_expr3530: new org.antlr.runtime.BitSet([0xB0000000, 0x6000003F,0x000000B0, 0x00000000]),
    FOLLOW_expr2_in_expr3533: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000007, 0x00000000]),
    FOLLOW_65_in_expr3537: new org.antlr.runtime.BitSet([0xB0000000, 0x6000003F,0x000000B0, 0x00000000]),
    FOLLOW_expr2_in_expr3540: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000007, 0x00000000]),
    FOLLOW_66_in_expr3544: new org.antlr.runtime.BitSet([0xB0000000, 0x6000003F,0x000000B0, 0x00000000]),
    FOLLOW_expr2_in_expr3547: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000007, 0x00000000]),
    FOLLOW_expr1_in_expr2557: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000008, 0x00000000]),
    FOLLOW_67_in_expr2560: new org.antlr.runtime.BitSet([0xB0000000, 0x6000003F,0x000000B0, 0x00000000]),
    FOLLOW_expr2_in_expr2563: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_61_in_expr1573: new org.antlr.runtime.BitSet([0xB0000000, 0x6000003F,0x000000B0, 0x00000000]),
    FOLLOW_expr1_in_expr1576: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_62_in_expr1580: new org.antlr.runtime.BitSet([0xB0000000, 0x6000003F,0x000000B0, 0x00000000]),
    FOLLOW_expr1_in_expr1583: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_68_in_expr1587: new org.antlr.runtime.BitSet([0xB0000000, 0x6000003F,0x000000B0, 0x00000000]),
    FOLLOW_expr1_in_expr1590: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_expr0_in_expr1594: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_number_in_expr0602: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_string_in_expr0606: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_bang_identifier_in_expr0610: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_69_in_expr0614: new org.antlr.runtime.BitSet([0xB0000000, 0x6000003F,0x000000B0, 0x00000000]),
    FOLLOW_expr_in_expr0617: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000040, 0x00000000]),
    FOLLOW_70_in_expr0619: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_function_in_expr0624: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_areaDefn_in_expr0628: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_kwContinue_in_expr0632: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_kwStet_in_expr0636: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_identifier_in_function645: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000020, 0x00000000]),
    FOLLOW_69_in_function647: new org.antlr.runtime.BitSet([0xB0000000, 0x6000003F,0x000000F0, 0x00000000]),
    FOLLOW_exprList_in_function649: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000040, 0x00000000]),
    FOLLOW_70_in_function652: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_71_in_areaDefn672: new org.antlr.runtime.BitSet([0x00000000, 0x00000024,0x00000500, 0x00000000]),
    FOLLOW_areaScopedItems_in_areaDefn674: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000100, 0x00000000]),
    FOLLOW_72_in_areaDefn677: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_areaScopedItem_in_areaScopedItems694: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000200, 0x00000000]),
    FOLLOW_73_in_areaScopedItems697: new org.antlr.runtime.BitSet([0x00000000, 0x00000024,0x00000400, 0x00000000]),
    FOLLOW_areaScopedItem_in_areaScopedItems700: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000200, 0x00000000]),
    FOLLOW_areaScope_in_areaScopedItem714: new org.antlr.runtime.BitSet([0x00000000, 0x00000100]),
    FOLLOW_40_in_areaScopedItem716: new org.antlr.runtime.BitSet([0x00000000, 0x00000024,0x00000400, 0x00000000]),
    FOLLOW_areaItemBody_in_areaScopedItem718: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_areaItemBody_in_areaScopedItem733: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_string_in_areaItemBody743: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_areaItemSet_in_areaItemBody747: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_identifier_in_areaScope755: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_string_in_areaScope759: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_74_in_areaItemSet767: new org.antlr.runtime.BitSet([0x00000000, 0x00000020,0x00000800, 0x00000000]),
    FOLLOW_strings_in_areaItemSet769: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000800, 0x00000000]),
    FOLLOW_75_in_areaItemSet772: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_exprs_in_exprList790: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_expr_in_exprs805: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000200, 0x00000000]),
    FOLLOW_73_in_exprs808: new org.antlr.runtime.BitSet([0xB0000000, 0x6000003F,0x000000B0, 0x00000000]),
    FOLLOW_expr_in_exprs811: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000200, 0x00000000]),
    FOLLOW_string_in_strings821: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000200, 0x00000000]),
    FOLLOW_73_in_strings824: new org.antlr.runtime.BitSet([0x00000000, 0x00000020]),
    FOLLOW_string_in_strings827: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000200, 0x00000000]),
    FOLLOW_T_CONTINUE_in_kwContinue840: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_T_STET_in_kwStet854: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_T_FEEDERS_in_kwFeeders868: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_T_SKIPCHECK_in_kwSkipcheck882: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_T_UNDEFVALS_in_kwUndefvals896: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_T_FEEDSTRINGS_in_kwFeedstrings910: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_T_IDENTIFIER_in_identifier925: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_T_BANG_IDENTIFIER_in_bang_identifier941: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_T_NUMBER_in_number957: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_T_STRING_in_string973: new org.antlr.runtime.BitSet([0x00000002, 0x00000000])
});

})();