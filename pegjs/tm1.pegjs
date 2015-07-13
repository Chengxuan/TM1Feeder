ruleFile=
    skip  r:rules skip f:feeders? skip {

return f!=null?{RULES_FILE:[{RULES:r},{FEEDERS:f}]}:{RULES_FILE:[{RULES:r}]};}
rules=
    (skip p:pragma skip {return p} / skip r:ruleDef skip {return r} )* 

skip = (eof/com)* {return "\n"}
eof =  [\n\t\r ]/"<br/>"/"<br>"
com = "#" [^\n]*

feeders= skip kwFeeders  ";"  skip f:feederDef* skip {return f;}

pragma=
     skip p:pragmaItem  skip ";" skip {return {PRAGMA: p}}

pragmaItem=
    kwSkipcheck/kwUndefvals /kwFeedstrings

ruleDef=
    skip a:areaDefn skip  "=" skip r:ruleBody skip { var x =[];
  x.push(a);
  x.push(r.pop());
   return {RULE_DEF: x};
}

ruleBody=
    e:expr skip ";" {var x =[]; x.push(e);return x;} / levelExpr+

levelExpr= skip l:level skip ":" skip e:expr skip ";" skip {var x = [];
x.push({LEVEL_EXPR: l});x.push(e);return x;}

level=
    ([N]/[n]){return "N_LEVEL"}
    /([S]/[s]){return "S_LEVEL"}
    /([C]/[c]){return "C_LEVEL"}

feederDef= skip a:areaDefn skip "=>" skip e:exprList skip ";" skip {return [a,e];}

expr = skip e:expr7 skip {return e;}
expr7=  l:expr6 skip "%" skip r:expr7  {return {"%":[l,r]};} / expr6
expr6=  l:expr5 skip "&" skip r:expr6  {return {"&":[l,r]};} / expr5
expr5=  l:expr4 skip "=" skip r:expr4  {return {"=":[l,r]};} /  l:expr4 skip "<>" skip r:expr4  {return {"<>":[l,r]};} /  l:expr4 skip ">" skip r:expr4  {return {">":[l,r]};} /  l:expr4 skip "<" skip r:expr4  {return {"<":[l,r]};} /  l:expr4 skip "<=" skip r:expr4 {return {"<=":[l,r]};} /  l:expr4 skip ">=" skip r:expr4  {return {">=":[l,r]};} / l:expr4 skip "@=" skip r:expr4 {return {"@=":[l,r]};} / l:expr4 skip "@<>" skip r:expr4 {return {"@<>":[l,r]};} / l:expr4 skip "@>" skip r:expr4 {return {"@>":[l,r]};} / l:expr4 skip "@<" skip r:expr4 {return {"@<":[l,r]};} / l:expr4 skip "@<=" skip r:expr4  {return {"@<=":[l,r]};} / l:expr4 skip "@>=" skip r:expr5 {return {"@>=":[l,r]};}/expr4
expr4 = l:expr3 skip "+" skip r:expr4 {return {"+":[l,r]};}/ l:expr3 skip "-" skip r:expr4 {return {"-":[l,r]};} / l:expr3 skip "|" skip r:expr4 {return {"|":[l,r]};} /expr3 
expr3 = l:expr2 skip "*" skip r:expr3 {return {"*":[l,r]};} / l:expr2 skip "/" skip r:expr3 {return {"/":[l,r]};} / l:expr2 skip "\\" skip r:expr3 {return {"\\":[l,r]};} /expr2
expr2 = l:expr1 skip "^" skip r:expr2 {return {"^":[l,r]};}/ expr1

expr1 = skip "+" skip e:expr1 skip {return {"+":e};}/ skip "-" skip e:expr1 skip {return {"-":e};}/"~" e:expr1 {return {"~":e};}/ expr0
expr0 =areaDefn /function /string/ kwContinue / kwStet / number / bang_identifier / "(" expr ")"

function = skip i:identifier  skip"(" skip e:exprList? skip ")" skip {var a = []; a.push(i); 
if(e!=null){
a.push(e);}
else{
var x =[];
a.push({EXPR_LIST:x});
}
return {FUNCTION: a}}

areaDefn = skip "[" skip a:areaScopedItems? skip "]" skip {

return a!=null?{AREA_DEFN : a}:{AREA_DEFN : []};
}
areaScopedItems = skip a:areaScopedItem skip b:(skip "," skip i:areaScopedItem skip {return i})* skip {
 if(b.length>0){
  b.unshift(a);
  return b;
 }else{
  var x = [];
  x.push(a);
  return x;
 }
}
areaScopedItem= skip a:areaScope  skip ":" skip i:areaItemBody skip {var x ={AREA_SCOPE:a}; var y ={AREA_ITEMS:i};var z =[]; z.push(x);z.push(y);return z;}/areaItemBody
areaItemBody= string /areaItemSet
areaScope = identifier/string
areaItemSet = skip "{" skip s:strings? skip "}" skip {return s==null?{AREA_ITEM_SET: []}:{AREA_ITEM_SET: s}}
exprList = e:exprs {return {EXPR_LIST:e}}
exprs= skip a:expr skip b:(skip "," skip e:expr{return e;})* {
 if(b.length>0){
  b.unshift(a);
  return b;
 }else{
  var x = [];
  x.push(a);
  return x;
 }
}
strings= skip a:string skip b:(skip "," skip s:string {return s;})* {
 if(b.length>0){
  b.unshift(a);
  return b;
 }else{
  var x = [];
  x.push(a);
  return x;
 }
}


kwContinue =T_CONTINUE {return "CONTINUE";}
kwStet = T_STET {return "STET";}
kwFeeders = T_FEEDERS {return "FEEDERS";}
kwSkipcheck = T_SKIPCHECK  {return "SKIPCHECK";}
kwUndefvals = T_UNDEFVALS {return "UNDEFVALS";}
kwFeedstrings = T_FEEDSTRINGS {return "FEEDSTRINGS";}

identifier = t:T_IDENTIFIER {return {IDENTIFIER: t};}
bang_identifier= t:T_BANG_IDENTIFIER {return {BANG_IDENTIFIER: t};}
number = t:T_NUMBER {return {NUMBER: t};}
string = t:T_STRING {return {STRING: t};}

T_CONTINUE = ([C]/[c])([O]/[o])([N]/[n])([T]/[t])([I]/[i])([N]/[n])([U]/[u])([E]/[e])
T_STET= ([S]/[s])([T]/[t])([E]/[e])([T]/[t])
T_FEEDERS= ([F]/[f])([E]/[e])([E]/[e])([D]/[d])([E]/[e])([R]/[r])([S]/[s])
T_SKIPCHECK=([S]/[s])([K]/[k])([I]/[i])([P]/[p])([C]/[c])([H]/[h])([E]/[e])([C]/[c])([K]/[k])
T_UNDEFVALS=([U]/[u])([N]/[n])([D]/[d])([E]/[e])([F]/[f])([V]/[v])([A]/[a])([L]/[l])([S]/[s])
T_FEEDSTRINGS=([F]/[f])([E]/[e])([E]/[e])([D]/[d])([S]/[s])([T]/[t])([R]/[r])([I]/[i])([N]/[n])([G]/[g])([S]/[s])

T_IDENTIFIER = i:[a-zA-Z_]+ {return i.join("");}
T_BANG_IDENTIFIER = "!" i:[^)^,^;^|^@^\\^/^:^*^=^?^"^<^>]+ {return "!" + i.join("");}
T_NUMBER= (a:[0-9]+ b:("." d:[0-9]* {return "."+d.join("");})? c:(e:([e]/[E]) f:([+]/[-]?) g:[0-9]* {return f==null?(g.length==0?e:(e+g.join(""))):(g.length==0?(e+f):(e+f+g.join("")));} )?) {return b==null?(c==null?a.join(""):a.join("")+c):(c==null?a.join("")+b:a.join("")+b+c);}
T_STRING = "'" s:[^']* "'" {return s.join("");}
