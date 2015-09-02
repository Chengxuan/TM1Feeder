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
        if(rfs.trim().length>0) {
            backuporigin.push(tm1syntaxparser.parse(rfs));
            rfs = removeComments(rfs);

            rfs = rfs.replace(/;\n+/g, ";<br><br>").replace(/\s+/g, "").replace(/#/g, "<br><br>#");
        }

        if (rfs.length > 0) {
            var s = tm1parser.parse(rfs);
            var jcontent = s.RULES_FILE;
            rfs = tm1syntaxparser.parse(rfs);
            var scontent = rfs.trim().split(";<br><br>");
            if (jcontent.length == 2) {
                var jrules = jcontent[0].RULES;
                var jfeeders = jcontent[1].FEEDERS;
                b = jrules.length + jfeeders.length + 1;
                var srules = scontent.splice(0, jrules.length);
                var sfeeders = scontent.splice(1);
                if (jfeeders.length == sfeeders.length && jrules.length == srules.length) {
                    //rs = srules.join(";<br><br>");
                    //fs = sfeeders.join(";<br><br>");
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
            }else{
                var jrules = jcontent[0].RULES;

                b = jrules.length + 1;
                var srules = scontent.splice(0, jrules.length);
                if (jrules.length == srules.length) {
                    //rs = srules.join(";<br><br>");
                    //fs = sfeeders.join(";<br><br>");
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
                    rdv.push(src.length);
                    fdv.push(0);
                    rnames.push(data[i].Name);
                }
                }
            //} else {
            //    var jrules = jcontent[0].RULES;
            //    rs = scontent.join(";<br><br>");
            //}
            /*var dim = data[i].Dimensions;
             for (var d in dim) {
             ds += dim[d].Name + '<br/>';
             }*/

        }
    }
    if (rdv.length > 0) {

        var feederchk = [];
        for (var a = 0; a < rdv.length; a++) {
            for (var b = a == 0 ? 0 : rdv[a - 1]; b < rdv[a]; b++) {
                var rea = trc[b].rarea;
                var rex = trc[b].rexp;
                var brex = rex.map(function (arr) {
                    return arr.slice();
                });
                for (var g in tfc) {
                    var fea = tfc[g].farea.slice(0);
                    var fex = tfc[g].fexp.slice(0);
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
                                    var count = fex.length;
                                    if (excludeSame(fex, [rea[0]]).length == 0) {
                                        brex[eq] = excludeSame(brex[eq], fea);
                                        feederchk.push(g);
                                    } else {
                                        var count = fex.length;
                                        if (!hasIntersection(fex, [rea[0]]) && fex.length != rea.length - count) {
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
        }
        //rdiv.innerHTML = "";
        for (var i = 0; i < rdv.length; i++) {
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
                                            if (atestfeeders.indexOf(sfc[f]) == -1 && feederchk.indexOf(f) == -1) {
                                                atestfeeders += "<font color=\"grey\">" + sfc[f].replace(/<([^>]+)>/g, "") + ";</font><br><br>";
                                            }
                                            feederchk.push(f);

                                        } else {

                                            if (excludeSame(fexp, [rarea[0]]).length == 0) {
                                                if (atestfeeders.indexOf(sfc[f]) == -1 && feederchk.indexOf(f) == -1) {
                                                    atestfeeders += "<font color=\"grey\">" + sfc[f].replace(/<([^>]+)>/g, "") + ";</font><br><br>";
                                                }
                                                brexp[ex] = excludeSame(brexp[ex], farea);
                                                feederchk.push(f);
                                            } else {
                                                var count = fexp.length;
                                                if (!hasIntersection(fexp, rarea[0]) && fexp.length != rarea.length - count) {
                                                    if (atestfeeders.indexOf(sfc[f]) == -1 && feederchk.indexOf(f) == -1) {
                                                        atestfeeders += "<font color=\"grey\">" + sfc[f].replace(/<([^>]+)>/g, "") + ";</font><br><br>";
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
                                                for (var ti = 0; ti < fdv.length; ti++) {
                                                    if (f < fdv[ti]) {
                                                        indtem = ti;
                                                        break;
                                                    }
                                                }
                                                atestfeeders += "<font color=\"blue\">" + rnames[indtem].replace(/<([^>]+)>/g, "") + ":" + sfc[f].replace(/<([^>]+)>/g, "") + ";</font><br><br>";
                                            } else {
                                                if (i > 0) {
                                                    if (f < fdv[i - 1]) {
                                                        var indtem = 0;
                                                        for (var ti = 0; ti < fdv.length; ti++) {
                                                            if (f < fdv[ti]) {
                                                                indtem = ti;
                                                                break;
                                                            }
                                                        }
                                                        atestfeeders += "<font color=\"blue\">" + rnames[indtem].replace(/<([^>]+)>/g, "") + ":" + sfc[f].replace(/<([^>]+)>/g, "") + ";</font><br><br>";
                                                    } else {
                                                        atestfeeders += sfc[f] + "<br><br>";
                                                    }
                                                } else {
                                                    atestfeeders += sfc[f] + "<br><br>";
                                                }

                                            }
                                        }
                                        brexp[ex] = excludeSame(brexp[ex], farea);
                                        //feederchk.push(f);

                                    } else {
                                        var count = fexp.length;
                                        if (excludeSame(fexp, [rarea[0]]).length == 0) {
                                            if (atestfeeders.indexOf(sfc[f]) == -1) {
                                                if (f >= fdv[i]) {
                                                    var indtem = 0;
                                                    for (var ti = 0; ti < fdv.length; ti++) {
                                                        if (f < fdv[ti]) {
                                                            indtem = ti;
                                                            break;
                                                        }
                                                    }
                                                    atestfeeders += "<font color=\"blue\">" + rnames[indtem].replace(/<([^>]+)>/g, "") + ":" + sfc[f].replace(/<([^>]+)>/g, "") + ";</font><br><br>";
                                                } else {
                                                    if (i > 0) {
                                                        if (f < fdv[i - 1]) {
                                                            var indtem = 0;
                                                            for (var ti = 0; ti < fdv.length; ti++) {
                                                                if (f < fdv[ti]) {
                                                                    indtem = ti;
                                                                    break;
                                                                }
                                                            }
                                                            atestfeeders += "<font color=\"blue\">" + rnames[indtem].replace(/<([^>]+)>/g, "") + ":" + sfc[f].replace(/<([^>]+)>/g, "") + ";</font><br><br>";
                                                        } else {
                                                            atestfeeders += sfc[f] + ";<br><br>";
                                                        }
                                                    } else {
                                                        atestfeeders += sfc[f] + ";<br><br>";
                                                    }
                                                }
                                            }
                                            brexp[ex] = excludeSame(brexp[ex], farea);
                                            //feederchk.push(f);
                                        } else {
                                            count = count = fexp.length;
                                            if (!hasIntersection(fexp, rarea[0]) && fexp.length != rarea.length - count) {
                                                if (atestfeeders.indexOf(sfc[f]) == -1) {
                                                    if (f >= fdv[i]) {
                                                        var indtem = 0;
                                                        for (var ti = 0; ti < fdv.length; ti++) {
                                                            if (f < fdv[ti]) {
                                                                indtem = ti;
                                                                break;
                                                            }
                                                        }
                                                        atestfeeders += "<font color=\"blue\">" + rnames[indtem].replace(/<([^>]+)>/g, "") + ":" + sfc[f].replace(/<([^>]+)>/g, "") + ";</font><br><br>";
                                                    } else {
                                                        if (i > 0) {
                                                            if (f < fdv[i - 1]) {
                                                                var indtem = 0;
                                                                for (var ti = 0; ti < fdv.length; ti++) {
                                                                    if (f < fdv[ti]) {
                                                                        indtem = ti;
                                                                        break;
                                                                    }
                                                                }
                                                                atestfeeders += "<font color=\"blue\">" + rnames[indtem].replace(/<([^>]+)>/g, "") + ":" + sfc[f].replace(/<([^>]+)>/g, "") + ";</font><br><br>";
                                                            } else {
                                                                atestfeeders += sfc[f] + "<br><br>";
                                                            }
                                                        } else {
                                                            atestfeeders += sfc[f] + "<br><br>";
                                                        }
                                                    }
                                                }
                                                brexp[ex] = excludeSame(brexp[ex], farea);
                                                // feederchk.push(f);
                                            }
                                        }
                                    }
                                }
                            }

                    }
                }
                if (!hasEmptyArray(brexp)) {
                    if (brexp.length > 0 && brexp[0]) {
                        if (Array.isArray(brexp[0])) {
                            atestfeeders += "<font color=\"red\">[" + getLeast(brexp).join(",").replace(/<([^>]+)>/g, "") + "]=>[" + rarea.join(",").replace(/<([^>]+)>/g, "") + "];</font><br>";
                        }
                        else {
                            atestfeeders += "<font color=\"red\">[" + brexp.join(",").replace(/<([^>]+)>/g, "") + "]=>[" + rarea.join(",").replace(/<([^>]+)>/g, "") + "];</font><br>";
                        }

                    }
                }
                var srcj = document.createElement("td")

                atest += "<tr><td style=\"word-wrap: break-word\">" + src[j] + "</td><td style=\"word-wrap: break-word\">" + atestfeeders + "</td></tr>";
            }

            for (var y = i == 0 ? 0 : fdv[i - 1]; y < fdv[i]; y++) {
                if (feederchk.indexOf(y.toString()) == -1) {
                    fs += sfc[y].replace(/<([^>]+)>/g, "") + ";<br><br>";
                }
            }

            if (fs.trim().length > 0) {
                atest += "<tr><td style=\"word-wrap: break-word\">" + "Redundant Feeders:" + "</td><td style=\"color:grey;word-wrap: break-word\">" + fs + "</td></tr>";
            }

            atest += "<tr><td colspan=\"2\" style=\"word-wrap: break-word\">" + backuporigin[i] + "</td></tr>";

            if (atest.length > 0) {
                rdiv.innerHTML += "<font size=\"6\">"+rnames[i]+"</font><a id=\"col_div_" + rnames[i] + "\" href=\"javascript:collapse('div_" + rnames[i] + "');\">Hide</a><br>";
                var cdiv = document.createElement('div');
                cdiv.setAttribute("id", "div_" + rnames[i]);
                cdiv.setAttribute("style", "display:block;text-align: center;");
                var ctable = document.createElement('table');
                ctable.setAttribute("style","table-layout: fixed; width: 80%; margin: 0 auto;");
                ctable.setAttribute("border", "1");
                var cth = document.createElement('thead');
                cth.innerHTML = "<th width='500px'>Rules</th><th width='500px'>Feeders</th>";
                var ctb = document.createElement('tbody');
                ctb.setAttribute("style", "text-align:left;");
                ctb.innerHTML = atest;
                ctable.appendChild(cth);
                ctable.appendChild(ctb);
                cdiv.appendChild(ctable);
                rdiv.appendChild(cdiv);
            }
        }

    }

}

function changeV(x){
    document.getElementById("txt_Content").value = "";
    switch (x) {
        case 0:
            document.getElementById("txt_Content").value = "[{\"Name\":\"Sales\",\"Rules\":\"# This is an example of correct and optimal Feeders. \\n['Revenue']=N:['Price']*['Units'];\\n\\nfeeders;\\n\\n['Units']=>['Revenue'];\\n\"}]";
            break;
        case 1:
            document.getElementById("txt_Content").value = "[{\"Name\":\"Sales\",\"Rules\":\"# This is an underfeeding example;\\n['Price']=N:['Cost']+['Tax'];\\n\\nfeeders;\\n\\n['Cost']=>['Price'];\\n\"}]";
            break;
        case 2:
            document.getElementById("txt_Content").value = "[{\"Name\":\"Sales\",\"Rules\":\"# This is an overfeeding example;\\n['Revenue']=N:['Price']*['Units'];\\n\\nfeeders;\\n\\n['Units']=>['Revenue'];\\n['Price']=>['Revenue'];\\n['Irrelevant']=>['Revenue'];\"}]";
            break;
        case 3:
            document.getElementById("txt_Content").value = "[{\"Name\":\"Sales\",\"Rules\":\"# This is a cross cube feeding example;\\n['Revenue']=N:['Price']*['Units'];\\n\\nfeeders;\\n\\n['Units']=>['Revenue'];\\n['Total']=>DB('Salary',!Price,!Revenue,'Bonus');# This Feeder feeds to 'Bonus' element in 'Salary' cube;\\n\"},{\"Name\":\"Salary\",\"Rules\":\"['Bonus']=N:['Unit Bonus']* DB('Sales',!Month,'Total');\\n# Feeder of this Rule is from 'Sales' cube.\\n\\n\\n\"}]";
            break;
        case 4:
            document.getElementById("txt_Content").value = "[{\"Name\":\"Sales\",\"Rules\":\"# This is an example to demonstrate the incompleteness of our tool on numeric;\\n['Revenue']=N:['Price']*(5-5);# 5-5=0, so this Rule should not need Feeder.\\n['Price']= IF(1>0,0,'Cost');# 1>0 is a truth so that the result of this Rule is 0. Therefore this Rule need no Feeder.\\n\\nfeeders;\\n\\n\"}]";
            break;
        case 5:
            document.getElementById("txt_Content").value = "[{\"Name\":\"Sales\",\"Rules\":\"# This is an example to demonstrate the incompleteness of our tool for Feeders on different levels;\\n['Price']=N:['Cost']+['Tax'];C:['Revenue']/['Units']; # This Rule have a C level Rule so that this Rule need no Feeder.\\n\\n\"}]";
            break;
        default:
            break;
    }

}

