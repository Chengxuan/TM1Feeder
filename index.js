function login() {
    if (document.getElementById("txt_URL").value.trim() == ""
        || document.getElementById("txt_UN").value.trim() == ""
        || document.getElementById("txt_PW").value.trim() == "") {
        alert('Fill all information, please...');
        return false;
    }
    var url = document.getElementById("txt_URL").value.trim();
    if (!url.contains('?$expand=Dimensions')) {
        if (url.contains('?')) {
            url = url.substring(0, url.lastIndexOf('?'));
        }
        url = url + '?$expand=Dimensions';
    }
    xhrGet(url, function (res) {
        var rdiv = document.getElementById('div_result');
        rdiv.innerHTML = "";
        document.getElementById('div_result_null').innerHTML = "";
        var data = res.value;
        var trc = [];
        var tfc = [];
        var src = [];
        var sfc = [];
        var rdv = [];
        var fdv = [];
        var rnames = [];
        for (var i in data) {
            var rfs = data[i].Rules.toString().trim();
            rfs = removeComments(rfs);
            rfs = rfs.replace(/;\n+/g, ";<br/><br/>").replace(/\s+/g, "");
            if (rfs.length > 0) {
                var s = tm1parser.parse(rfs);
                var jcontent = s.RULES_FILE;
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
           /* for (var i = 0; i < rdv.length; i++) {
                for (var j = i == 0 ? 0 : rdv[i - 1]; j < rdv[i]; j++) {
                    var rea = trc[j].rarea.slice(0);
                    var rex = trc[j].rexp.slice(0);
                    var brex = rex.slice(0);
                    for (var f in tfc) {
                        var fea = tfc[f].farea.slice(0);
                        var fex = tfc[f].fexp.slice(0);
                        if (fea.length > 0 && fex.length > 0) {
                            for (var ex in rex) {
                                if (hasEmptyArray(brex)) {
                                    break;
                                }
                                if (fullyContains(fex, [rea[0]]) && hasIntersection(rex[ex], fea)) {//(pc(fexp,rarea)||pc(rarea,fexp))){
                                    if (fullyContains(fex, rea)) {
                                        brex[ex] = excludeSame(brex[ex], fea);
                                        feederchk.push(f);

                                    } else {
                                        if (excludeSame(fex, [rea[0]]).length == 0) {
                                            brex[ex] = excludeSame(brex[ex], fea);
                                            feederchk.push(f);
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
                    var brexp = rexp.slice(0);
                    var atestfeeders = "";
                    for (var f in tfc) {
                        var farea = tfc[f].farea;
                        var fexp = tfc[f].fexp;

                        if (farea.length > 0 && fexp.length > 0) {
                            for (var ex in rexp) {
                                if (hasEmptyArray(brexp)) {
                                    break;
                                }
                                if (fullyContains(fexp, [rarea[0]]) && hasIntersection(rexp[ex], farea)) {//(pc(fexp,rarea)||pc(rarea,fexp))){
                                    if (fullyContains(fexp, rarea)) {
                                        if (atestfeeders.indexOf(sfc[f]) == -1) {
                                            if (f >= fdv[i]) {
                                                atestfeeders += "<font color=\"blue\">"+ sfc[f] + ";</font><br/><br/>";
                                            } else {
                                                atestfeeders += sfc[f] + ";<br/><br/>";
                                            }
                                        }
                                        brexp[ex] = excludeSame(brexp[ex], farea);
                                        feederchk.push(f);

                                    } else {
                                        if (excludeSame(fexp, [rarea[0]]).length == 0) {
                                            if (atestfeeders.indexOf(sfc[f]) == -1) {
                                                if (f >= fdv[i]) {
                                                    var indtem = 0;
                                                    for(var ti=0;ti<fdv.length;ti++){
                                                        if(f<fdv[ti]){indtem=ti-1;break;}
                                                    }
                                                    atestfeeders += "<font color=\"blue\">"+ rnames[indtem] +":"+sfc[f] + ";</font><br/><br/>";
                                                } else {
                                                    atestfeeders += sfc[f] + ";<br/><br/>";
                                                }
                                            }
                                            brexp[ex] = excludeSame(brexp[ex], farea);
                                            feederchk.push(f);
                                        }else{
                                            if (!hasIntersection(fexp, [rarea[0]])) {
                                                if (atestfeeders.indexOf(sfc[f]) == -1) {
                                                    if (f >= fdv[i]) {
                                                        var indtem = 0;
                                                        for(var ti=0;ti<fdv.length;ti++){
                                                            if(f<fdv[ti]){indtem=ti-1;break;}
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
                        atestfeeders += "<font color=\"red\">[" + getLeast(brexp).join(",") + "]=>[" + rarea.join(",") + "];</font><br/>";
                    }
                    atest += "<tr><td>" + src[j] + "</td><td>" + atestfeeders + "</td></tr>";
                }

                for (var y = i == 0 ? 0 : fdv[i - 1]; y < fdv[i]; y++) {
                    if (feederchk.indexOf(y.toString()) == -1) {
                        fs += sfc[y] + ";<br/><br/>";
                    }
                }
                if(fs.length>0){
                    atest += "<tr><td>" + rs + "</td><td style=\"color:red;\">" + fs + "</td></tr>";
                }
if(atest.length>0) {
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
}
            }

        } else {

        }
    }, function (err) {
        alert(err);
    }, document.getElementById("txt_UN").value.trim(), document.getElementById("txt_PW").value.trim());
}

