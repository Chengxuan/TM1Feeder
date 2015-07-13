function login() {

    var data = parseJson(document.getElementById("txt_Content").value.trim());
    var rdiv = document.getElementById('div_result');
    rdiv.innerHTML = "";
    document.getElementById('div_result_null').innerHTML = "";
    var trc = [];
    var tfc = [];
    var src = [];
    var sfc = [];
    var rdv = [];
    var fdv = [];
    var rnames = [];
    var backuporigin = [];
    for (var i in data) {
        var rfs = data[i].Rules.toString().trim();
        backuporigin[i] = tm1syntaxparser.parse(rfs);
        rfs = removeComments(rfs);

        rfs = rfs.replace(/;\n+/g, ";<br/><br/>").replace(/\s+/g, "").replace(/#/g,"<br/><br/>#");

        if (rfs.length > 0) {
            var s = tm1parser.parse(rfs);
            var jcontent = s.RULES_FILE;
            rfs = tm1syntaxparser.parse(rfs);
            var scontent = rfs.split(";<br/><br/>").filter(Boolean);
            for (var sc in scontent) {
                scontent[sc] = scontent[sc].replace(/</g, "&lt").replace(/>/g, "&gt");
            }
            if (jcontent.length == 2) {
                var jrules = jcontent[0].RULES;
                var jfeeders = jcontent[1].FEEDERS;
                b = jrules.length + jfeeders.length + 1;
                var srules = scontent.splice(0, jrules.length);
                var sfeeders = scontent.splice(1);
                if (jfeeders.length == sfeeders.length && jrules.length == srules.length) {
                    //rs = srules.join(";<br/><br/>");
                    //fs = sfeeders.join(";<br/><br/>");
                    for (var x in jrules) {

                        for (var y in jrules[x]) {
                            if (y == "RULE_DEF") {
                                var rarea = digstrings(jrules[x][y][0], data[i].Name.toString().trim().toLocaleLowerCase());
                                if (Array.isArray(rarea[0])) {
                                    rarea = rarea[0];
                                }
                                var rexp = digstrings(jrules[x][y][1], data[i].Name.toString().trim().toLocaleLowerCase());
                                for (var re in rexp) {
                                    if (Array.isArray(rexp[re][0])) {
                                        rexp[re] = rexp[re][0];
                                    }
                                }
                                var ttmp = {rarea: rarea, rexp: rexp};

                                trc.push(ttmp);
                                src.push(srules[x]);

                            }
                        }

                    }
                    for (var f in jfeeders) {
                        var farea = digstrings(jfeeders[f][0], data[i].Name.toString().trim().toLocaleLowerCase());
                        var fexp = digstrings(jfeeders[f][1], data[i].Name.toString().trim().toLocaleLowerCase());
                        if (Array.isArray(farea[0])) {
                            farea = farea[0];
                        }
                        if (Array.isArray(fexp[0])) {
                            fexp = fexp[0];
                        }
                        var ttmp = {farea: farea, fexp: fexp};
                        tfc.push(ttmp);
                        sfc.push(sfeeders[f]);
                    }
                    rdv.push(src.length);
                    fdv.push(sfc.length);
                    rnames.push(data[i].Name);


                }
            }
            //} else {
            //    var jrules = jcontent[0].RULES;
            //    rs = scontent.join(";<br/><br/>");
            //}
            /*var dim = data[i].Dimensions;
             for (var d in dim) {
             ds += dim[d].Name + '<br/>';
             }*/

        } else {
            document.getElementById('div_result_null').innerHTML += data[i].Name + "<br/>";
        }
    }
    if (rdv.length > 0) {

        var feederchk = [];
        /* for (var a = 0; a < rdv.length; a++) {
         for (var b = a == 0 ? 0 : rdv[a - 1]; b < rdv[a]; b++) {
         var rea = trc.slice(0)[b].rarea.slice(0);
         var rex = trc.slice(0)[b].rexp.slice(0);
         var brex = rex.slice(0);
         for (var g in tfc) {
         var fea = tfc.slice(0)[g].farea.slice(0);
         var fex = tfc.slice(0)[g].fexp.slice(0);
         if (fea.length > 0 && fex.length > 0) {
         for (var eq in rex) {
         if (hasEmptyArray(brex)) {
         break;
         }
         if (fullyContains(fex, [rea[0]]) && hasIntersection(rex[eq], fea)) {//(pc(fexp,rarea)||pc(rarea,fexp))){
         if (fullyContains(fex, rea)) {
         brex[eq] = excludeSame(brex[eq], fea);
         feederchk.push(g);

         } else {
         if (excludeSame(fex, [rea[0]]).length == 0) {
         brex[eq] = excludeSame(brex[eq], fea);
         feederchk.push(g);
         }else{

         if (!hasIntersection(fex, [rea[0]])) {
         brex[eq] = excludeSame(brex[eq], fea);
         feederchk.push(g);
         }
         }
         }
         }
         }

         }
         }
         }
         }*/
        //rdiv.innerHTML = "";
        for (var i = 0; i < rdv.length; i++) {

            var rs = "redundant feeders";
            var fs = '';
            var atest = '';
            for (var j = i == 0 ? 0 : rdv[i - 1]; j < rdv[i]; j++) {
                var rarea = trc[j].rarea;
                var rexp = trc[j].rexp;
                var brexp = rexp;
                var atestfeeders = '';
                for (var f in tfc) {
                    var farea = tfc[f].farea;
                    var fexp = tfc[f].fexp;

                    if (farea.length > 0 && fexp.length > 0) {
                        for (var ex in rexp) {
                            if (hasEmptyArray(brexp)) {
                                if (fullyContains(fexp, [rarea[0]]) && hasIntersection(rexp[ex], farea)) {//(pc(fexp,rarea)||pc(rarea,fexp))){
                                    if (fullyContains(fexp, rarea)) {
                                        if (atestfeeders.indexOf(sfc[f]) == -1) {
                                            atestfeeders += "<font color=\"grey\">" + sfc[f] + ";</font><br/><br/>";
                                        }
                                        feederchk.push(f);

                                    } else {
                                        var count = fexp.length;
                                        if (excludeSame(fexp, [rarea[0]]).length == 0) {
                                            if (atestfeeders.indexOf(sfc[f]) == -1) {
                                                atestfeeders += "<font color=\"grey\">" + sfc[f] + ";</font><br/><br/>";
                                            }
                                            brexp[ex] = excludeSame(brexp[ex], farea);
                                            feederchk.push(f);
                                        }else{
                                            count = count =fexp.length;
                                            if (!hasIntersection(fexp, rarea[0])&&fexp.length!=rarea.length-count) {
                                                if (atestfeeders.indexOf(sfc[f]) == -1) {
                                                    atestfeeders += "<font color=\"grey\">" + sfc[f] + ";</font><br/><br/>";
                                                }
                                                brexp[ex] = excludeSame(brexp[ex], farea);
                                                feederchk.push(f);
                                            }
                                        }
                                    }
                                }

                                continue;
                            }
                            if (fullyContains(fexp, [rarea[0]]) && hasIntersection(rexp[ex], farea)) {//(pc(fexp,rarea)||pc(rarea,fexp))){
                                if (fullyContains(fexp, rarea)) {
                                    if (atestfeeders.indexOf(sfc[f]) == -1) {
                                        if (f >= fdv[i]) {
                                            var indtem = 0;
                                            for(var ti=0;ti<fdv.length;ti++){
                                                if(f<fdv[ti]){indtem=ti;break;}
                                            }
                                            atestfeeders += "<font color=\"blue\">"+ rnames[indtem] +":"+sfc[f] + ";</font><br/><br/>";
                                        } else {
                                            atestfeeders += sfc[f] + ";<br/><br/>";
                                        }
                                    }
                                    brexp[ex] = excludeSame(brexp[ex], farea);
                                    feederchk.push(f);

                                } else {
                                    var count = fexp.length;
                                    if (excludeSame(fexp, [rarea[0]]).length == 0) {
                                        if (atestfeeders.indexOf(sfc[f]) == -1) {
                                            if (f >= fdv[i]) {
                                                var indtem = 0;
                                                for(var ti=0;ti<fdv.length;ti++){
                                                    if(f<fdv[ti]){indtem=ti;break;}
                                                }
                                                atestfeeders += "<font color=\"blue\">"+ rnames[indtem] +":"+sfc[f] + ";</font><br/><br/>";
                                            } else {
                                                atestfeeders += sfc[f] + ";<br/><br/>";
                                            }
                                        }
                                        brexp[ex] = excludeSame(brexp[ex], farea);
                                        feederchk.push(f);
                                    }else{
                                        count = count =fexp.length;
                                        if (!hasIntersection(fexp, rarea[0])&&fexp.length!=rarea.length-count) {
                                            if (atestfeeders.indexOf(sfc[f]) == -1) {
                                                if (f >= fdv[i]) {
                                                    var indtem = 0;
                                                    for(var ti=0;ti<fdv.length;ti++){
                                                        if(f<fdv[ti]){indtem=ti;break;}
                                                    }
                                                    atestfeeders += "<font color=\"blue\">"+ rnames[indtem] +":"+sfc[f] + ";</font><br/><br/>";
                                                } else {
                                                    atestfeeders += sfc[f] + ";<br/><br/>";
                                                }
                                            }
                                            brexp[ex] = excludeSame(brexp[ex], farea);
                                            feederchk.push(f);
                                        }
                                    }
                                }
                            }
                        }

                    }
                }
                if (!hasEmptyArray(brexp)) {
                    if (brexp.length>0 && brexp[0]) {
                        if(Array.isArray(brexp[0])){  atestfeeders += "<font color=\"red\">[" + getLeast(brexp).join(",") + "]=>[" + rarea.join(",") + "];</font><br/>";
                        }
                        else{ atestfeeders += "<font color=\"red\">[" + brexp.join(",") + "]=>[" + rarea.join(",") + "];</font><br/>";
                        }

                    }
                }
                var srcj = document.createElement("td")

                atest += "<tr><td>" + src[j] + "</td><td>" + atestfeeders + "</td></tr>";
            }

            for (var y = i == 0 ? 0 : fdv[i - 1]; y < fdv[i]; y++) {
                if (feederchk.indexOf(y.toString()) == -1) {
                    fs += sfc[y] + ";<br/><br/>";
                }
            }


            atest += "<tr><td>" + backuporigin[i] + "</td><td style=\"color:grey;\">" + fs + "</td></tr>";

            if (atest.length > 0) {
                rdiv.innerHTML += rnames[i] + "<a id=\"col_div_" + rnames[i] + "\" href=\"javascript:collapse('div_" + rnames[i] + "');\">Show</a><br/>";
                var cdiv = document.createElement('div');
                cdiv.setAttribute("id", "div_" + rnames[i]);
                cdiv.setAttribute("style", "display:none;text-align:center;");
                var ctable = document.createElement('table');
                ctable.setAttribute("border", "1");
                var cth = document.createElement('thead');
                cth.innerHTML = "<th width='500px'>Rules</th><th width='500px'>Feeders</th>";
                var ctb = document.createElement('tbody');
                ctb.setAttribute("style", "text-align:center;");
                ctb.innerHTML = atest;
                ctable.appendChild(cth);
                ctable.appendChild(ctb);
                cdiv.appendChild(ctable);
                rdiv.appendChild(cdiv);
            }else{
                document.getElementById('div_result_null').innerHTML += rnames[i] + "<br/>";
            }
        }

    }

}

