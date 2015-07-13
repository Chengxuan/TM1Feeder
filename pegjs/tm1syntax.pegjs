ruleFile=
    a:skip  r:rules b:skip f:feeders? c:skip {
return f!=null? a+r+b+f+c:a+r+b;}
rules=
    x:(a:skip p:pragma b:skip {return a+p+b} / a:skip r:ruleDef b:skip {return a+r+b} )*  {return x.join("");}

skip = x:(eof/com)* {return x.join("");}
eof =  x:[\n\t\r ]{return "<br/>";}/"<br/>"{return "<br/>";}/"<br>" {return "<br/>";}
com = "#" x:[^\n]* {return "<font color='green'>#"+x.join("").replace(/</g,"&#60;").replace(/>/g,"&#62;") + "</font><br/>";}

feeders= a:skip x:kwFeeders  +";"  c:skip f:feederDef* d:skip {return a+x+";"+c+f.join("")+d;}

pragma=
     a:skip p:pragmaItem + ";" c:skip {return a+"<font color='purple'><b>"+p+"</b></font>"+";"+c;}

pragmaItem=
    kwSkipcheck/kwUndefvals /kwFeedstrings

ruleDef=
    b:skip a:areaDefn c:skip  "=" d:skip r:ruleBody e:skip { return b+a+c+"="+d+r+e;
}

ruleBody=
    e:expr a:skip ";" {return e+a+";"} / x:levelExpr+  {return x.join("");}

levelExpr= a:skip l:level b:skip ":" c:skip e:expr d:skip ";" f:skip {return a+l+b+":"+c+e+d+";"+f;}

level=
    ([N]/[n]){return "<b>N</b>";}
    /([S]/[s]){return "<b>S</b>";}
    /([C]/[c]){return "<b>C</b>";}

feederDef= b:skip a:areaDefn c:skip "=>" d:skip e:exprList f:skip ";" g:skip {return b+a+c+"=>"+d+e+f+";"+g;}

expr = a:skip e:expr7 b:skip {return a+e+b;}
expr7= l:expr6 a:skip "%" b:skip r:expr7 {return l+a+"%"+b+r;} / expr6
expr6= l:expr5 a:skip "&" b:skip r:expr6 {return l+a+"&"+b+r;} / expr5
expr5= l:expr4 a:skip "=" b:skip r:expr4 {return l+a+"="+b+r;} / l:expr4 a:skip "<>" b:skip r:expr4 {return l+a+"<>"+b+r;} / l:expr4 a:skip ">" b:skip r:expr4 {return l+a+">"+b+r;} / l:expr4 a:skip "<" b:skip r:expr4 {return l+a+"<"+b+r;} / l:expr4 a:skip "<=" b:skip r:expr4 {return l+a+"<="+b+r;} / l:expr4 a:skip ">=" b:skip r:expr4 {return l+a+">="+b+r;} / l:expr4 a:skip "@=" b:skip r:expr4 {return l+a+"@="+b+r;} / l:expr4 a:skip "@<>" b:skip r:expr4 {return l+a+"@<>"+b+r;} / l:expr4 a:skip "@>" b:skip r:expr4 {return l+a+"@>"+b+r;} / l:expr4 a:skip "@<" b:skip r:expr4 {return l+a+"@<"+b+r;} / l:expr4 a:skip "@<=" b:skip r:expr4 {return l+a+"@<="+b+r;} / l:expr4 a:skip "@>=" b:skip r:expr5 {return l+a+"@>="+b+r;}/expr4
expr4 = l:expr3 a:skip "+" b:skip r:expr4 {return l+a+"+"+b+r;}/ l:expr3 a:skip "-" b:skip r:expr4 {return l+a+"-"+b+r;} / l:expr3 a:skip "|" b:skip r:expr4 {return l+a+"|"+b+r;} /expr3 
expr3 = l:expr2 a:skip "*" b:skip r:expr3 {return l+a+"*"+b+r;} / l:expr2 a:skip "/" b:skip r:expr3 {return l+a+"/"+b+r;} / l:expr2 a:skip "\\" b:skip r:expr3 {return l+a+"\\"+b+r;} /expr2
expr2 = l:expr1 a:skip "^" b:skip r:expr2 {return l+a+"^"+b+r;}/ expr1

expr1 = a:skip "+" b:skip e:expr1 c:skip {return l+a+"%"+b+r;}/ a:skip "-" b:skip e:expr1 c:skip {return l+a+"-"+b+r;}/ a:skip "~" b:skip e:expr1 c:skip {return l+a+"~"+b+r;}/ expr0
expr0 = areaDefn /function /string/ kwContinue / kwStet / number / bang_identifier / "(" e:expr ")" {return "("+ e +")";}

function = a:skip i:identifier  b:skip"(" c:skip e:exprList? d:skip ")" f:skip {
if(e!=null){
return a+i+b+"("+c+e+d+")"+f;}
else{
return a+i+b+"("+ c +")"+f;
}}

areaDefn = b:skip "[" c:skip a:areaScopedItems? d:skip "]" e:skip {

return a!=null?b+"["+c+a+d+"]"+e:b+"["+c+"]"+e;
}
areaScopedItems = c:skip a:areaScopedItem d:skip b:(e:skip "," f:skip i:areaScopedItem g:skip {return e+ "," + f+i+g;})* h:skip {
 if(b.length>0){
  return c+a+d+b.join("")+h;
 }else{
 return c+a+d;
 }
}
areaScopedItem= b:skip a:areaScope  c:skip ":" d:skip i:areaItemBody e:skip {return b+a+c+":"+d+i+e}/areaItemBody
areaItemBody= s:string {return s;}/ a:areaItemSet{return a;}
areaScope = i:identifier {return "<font color='grey'><b>"+i+"</b></font>";}/s:string {return "<font color='grey'><b>"+s+"</b></font>";}
areaItemSet = a:skip "{" b:skip s:strings? c:skip "}" d:skip {return s==null?a+"{"+b+"}"+d:a+"{"+b+s+c+"}"+d;}
exprList = e:exprs {return e}
exprs= a:skip e:expr c:skip b:(d:skip "," f:skip e:expr g:skip{return d+","+f+e+g;})* h:skip {
 if(b.length>0){
 return a+e+c+b.join("")+h;
 }else{
 return a+e+c;
 }
}
strings= a:skip f:string c:skip b:( d:skip "," e:skip s:string g:skip{return d+","+e+s+g;})* h:skip {
 if(b.length>0){
 return a+f+c+b.join("")+h;
 }else{
return a+f+c;
 }
}


kwContinue =T_CONTINUE {return "CONTINUE";}
kwStet = T_STET {return "<strong>STET</strong>";}
kwFeeders = T_FEEDERS {return "<font color='red'>FEEDERS</font>";}
kwSkipcheck = T_SKIPCHECK  {return "SKIPCHECK";}
kwUndefvals = T_UNDEFVALS {return "UNDEFVALS";}
kwFeedstrings = T_FEEDSTRINGS {return "FEEDSTRINGS";}

identifier = t:T_IDENTIFIER {return "<font color='blue'><strong>" +t + "</strong></font>";}
bang_identifier= t:T_BANG_IDENTIFIER {return "<font color='grey'><i>" +t + "</i></font>";}
number = t:T_NUMBER {return t;}
string = t:T_STRING {return "<i>" +t + "</i>";}

T_CONTINUE = ([C]/[c])([O]/[o])([N]/[n])([T]/[t])([I]/[i])([N]/[n])([U]/[u])([E]/[e])
T_STET= ([S]/[s])([T]/[t])([E]/[e])([T]/[t])
T_FEEDERS= ([F]/[f])([E]/[e])([E]/[e])([D]/[d])([E]/[e])([R]/[r])([S]/[s])
T_SKIPCHECK=([S]/[s])([K]/[k])([I]/[i])([P]/[p])([C]/[c])([H]/[h])([E]/[e])([C]/[c])([K]/[k])
T_UNDEFVALS=([U]/[u])([N]/[n])([D]/[d])([E]/[e])([F]/[f])([V]/[v])([A]/[a])([L]/[l])([S]/[s])
T_FEEDSTRINGS=([F]/[f])([E]/[e])([E]/[e])([D]/[d])([S]/[s])([T]/[t])([R]/[r])([I]/[i])([N]/[n])([G]/[g])([S]/[s])

T_IDENTIFIER = i:[a-zA-Z_]+ {return i.join("");}
T_BANG_IDENTIFIER = "!" i:[^)^,^;^|^@^\\^/^:^*^=^?^"^<^>]+ {return "!" + i.join("");}
T_NUMBER= (a:[0-9]+ b:("." d:[0-9]* {return "."+d.join("");})? c:(e:([e]/[E]) f:([+]/[-]?) g:[0-9]* {return f==null?(g.length==0?e:(e+g.join(""))):(g.length==0?(e+f):(e+f+g.join("")));} )?) {return b==null?(c==null?a.join(""):a.join("")+c):(c==null?a.join("")+b:a.join("")+b+c);}
T_STRING = "'" s:[^']* "'" {return "'"+s.join("")+"'";}
