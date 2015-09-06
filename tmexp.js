function fullyContains(a1, a2) {
    if (a1 && a2) {
        for (var i = 0; i < a2.length; i++) {
            if (a1.indexOf(a2[i]) == -1) {
                return false;
            }
        }
    }
    return true;
}

function hasEmptyArray(a) {
    for (var i in a) {
        if (Array.isArray(a[i])) {
            if (a[i].length == 0) return true;
        }
    }
}

function getLeast(a) {
    var mini = 9999;
    var minindex = -1;
    for (var i in a) {
        if (Array.isArray(a[i])) {
            if (a[i].length < mini) {
                mini = a[i].length;
                minindex = i;
            }
        }
    }
    return a[minindex];
}

function hasIntersection(a1, a2) {
    if (a1 && a2) {
        for (var i = 0; i < a2.length; i++) {
            if (a1.indexOf(a2[i]) != -1) {
                return true;
            }
        }
    }
    return false;
}

function excludeSame(a1, a2) {
    if (a1 && a2) {
        for (var i = 0; i < a2.length; i++) {
            if (a1.indexOf(a2[i]) != -1) {
                if (Array.isArray(a1)) {
                    a1.splice(a1.indexOf(a2[i]), 1);
                } else {
                    a1 = [a1];
                    a1.splice(a1.indexOf(a2[i]), 1);
                }

            }
        }
    }
    return a1;
}

function removeComments(origin) {
    var tmp = "";
    if (origin.indexOf("#") != -1) {
        while (origin.indexOf("#") != -1) {

            if (origin.indexOf("#") > 0) {
                //tmp += //origin.substring(0, origin.indexOf("#"));
                tmp += origin.substring(0, origin.indexOf("#"));
                origin = origin.substring(origin.indexOf("#"));

            }
            if (origin.indexOf("\n") != -1) {
                origin = origin.substring(origin.indexOf("\n", origin.indexOf("#") + 1) + 1);
            } else {
                origin = "";
            }
            if (origin.indexOf("#") == -1) {
                if (origin != "") {
                    tmp += origin;
                }

            }
        }
    } else {
        tmp = origin;
    }
    tmp = tmp.replace(/ +/g, "");
    return tmp;
}

function removeDuplicates(a) {
    var x = [];
    for (var i = 0; i < a.length; i++) {
        var com = a[i].toString().split(":");

        if (x.indexOf(a[i]) == -1) {
            x.push(a[i]);
        }

    }
    return x;
}

var digstrings = function myself(abstree, cube) {
    cube = cube.replace(/ +/g, '').trim().toLowerCase();
    var tmp = [];
    if (Array.isArray(abstree)) {
        for (var y in abstree) {
            tmp = mergeArray(tmp, myself(abstree[y], cube));
        }
    } else {

        if (abstree.STRING) {
            tmp.push(cube + ":" + abstree.STRING.toString().trim().toLowerCase());
        } else {
            var ps = Object.keys(abstree);
            for (var j = 0; j < ps.length; j++) {
                var nm = ps[j];
                var v = abstree[nm];

                if (nm.toString().toUpperCase() == "AREA_DEFN") {
                    var dim = "";
                    if (v[0]) {
                        if (Array.isArray(v[0])) {
                            for (var id = 0; id < v[0].length; id++) {

                                if (v[0][id].AREA_SCOPE) {
                                    if(myself(v[0][id].AREA_SCOPE, "")[0]){
                                        dim = myself(v[0][id].AREA_SCOPE, "")[0].replace(":","");
                                        if(dim!=cube){
                                            dim = myself(v[0][id].AREA_SCOPE, cube)[0]+":";
                                        }
                                    }else{
                                        dim=cube;
                                    }

                                } else {
                                    tmp = myself(v[0][id], dim);
                                    return tmp;
                                }
                            }
                        }

                    }

                }
                if (nm.toString().toUpperCase() == "AREA_ITEMS" && v.AREA_ITEM_SET) {
                    tmp = mergeArray(tmp, myself(v.AREA_ITEM_SET, cube));
                }
                if (Array.isArray(v)) {
                    if (nm.toString().toUpperCase() != "FUNCTION") {
                        switch (nm.toString()) {
                            case "*":
                                if (v[0].NUMBER) {
                                    if (v[1].NUMBER || v[0].NUMBER == '0') {
                                        tmp = [];
                                        break;
                                    } else {
                                        tmp = myself(v[1], cube);
                                        break;
                                    }
                                } else {
                                    if (v[1].NUMBER) {
                                        if (v[1].NUMBER == '0') {
                                            tmp = [];
                                            break;
                                        } else {
                                            tmp = myself(v[0], cube);
                                            break;
                                        }
                                    } else {
                                        if (myself(v[0], cube).length > 0) {
                                            tmp.push(myself(v[0], cube));
                                        }
                                        if (myself(v[1], cube).length > 0) {
                                            tmp.push(myself(v[1], cube));
                                        }
                                        break;
                                    }
                                }
                                break;
                            case "\\":
                                if (v[0].NUMBER) {
                                    if (v[1].NUMBER || v[0].NUMBER == '0') {
                                        tmp = [];
                                        break;
                                    } else {
                                        tmp = myself(v[1], cube);
                                        break;
                                    }
                                } else {
                                    if (v[1].NUMBER) {
                                        if (v[1].NUMBER == '0') {
                                            tmp = [];
                                            break;
                                        } else {
                                            tmp = myself(v[0], cube);
                                            break;
                                        }
                                    } else {
                                        if (myself(v[0], cube).length > 0) {
                                            tmp.push(myself(v[0], cube));
                                        }
                                        if (myself(v[1], cube).length > 0) {
                                            tmp.push(myself(v[1], cube));
                                        }
                                        break;
                                    }
                                }
                                break;
                            case "^":
                                tmp = myself(v[0], cube);
                                break;
                            case "/":
                                if (v[0].NUMBER) {
                                    if (v[1].NUMBER || v[0].NUMBER == '0') {
                                        tmp = [];
                                        break;
                                    } else {
                                        tmp = myself(v[1], cube);
                                        break;
                                    }
                                } else {
                                    if (v[1].NUMBER) {
                                        if (v[1].NUMBER == '0') {
                                            tmp = [];
                                            break;
                                        } else {
                                            tmp = myself(v[0], cube);
                                            break;
                                        }
                                    } else {
                                        if (myself(v[0], cube).length > 0) {
                                            tmp.push(myself(v[0], cube));
                                        }
                                        if (myself(v[1], cube).length > 0) {
                                            tmp.push(myself(v[1], cube));
                                        }
                                        break;
                                    }
                                }
                                break;
                            default:
                                tmp = mergeArray(tmp, myself(v, cube));
                                break;
                        }

                    } else {
                        switch (abstree[nm][0].IDENTIFIER.toString().toUpperCase()) {
                            case "ATTRS":
                                break;
                            case "ATTRN":
                                break;
                            case "IF":
                                var exprs = Object.keys(v[1].EXPR_LIST[0]);
                                if (myself(v[1].EXPR_LIST[1], cube).length == 0) {
                                    if (myself(v[1].EXPR_LIST[2], cube).length == 0) {
                                        if (v[1].EXPR_LIST[1].NUMBER) {
                                            if (v[1].EXPR_LIST[1].NUMBER == '0' && !v[1].EXPR_LIST[2].NUMBER) {
                                                if (exprs[0].indexOf("@") == -1) {
                                                    tmp = myself(v[1].EXPR_LIST[0], cube);
                                                } else {
                                                    tmp = [];
                                                }

                                                break;
                                            } else {
                                                if (v[1].EXPR_LIST[2].NUMBER == v[1].EXPR_LIST[1].NUMBER) {

                                                    tmp = [];
                                                    break;
                                                } else {
                                                    if (v[1].EXPR_LIST[1].NUMBER == '0' || v[1].EXPR_LIST[2].NUMBER == '0') {
                                                        if (exprs[0].indexOf("@") == -1) {
                                                            tmp = myself(v[1].EXPR_LIST[0], cube);
                                                        } else {
                                                            tmp = [];
                                                        }
                                                        break;
                                                    }
                                                }
                                                if (exprs[0].indexOf("@") == -1) {
                                                    tmp = myself(v[1].EXPR_LIST[0], cube);
                                                }
                                                else {
                                                    tmp = [];
                                                }
                                                break;
                                            }
                                        } else {

                                            if (v[1].EXPR_LIST[2].NUMBER) {
                                                if (v[1].EXPR_LIST[2].NUMBER == '0') {
                                                    if (exprs[0].indexOf("@") == -1) {
                                                        tmp = myself(v[1].EXPR_LIST[0], cube);
                                                    } else {
                                                        tmp = [];
                                                    }
                                                    break;
                                                } else {
                                                    tmp = [];
                                                    break;
                                                }
                                            }
                                            if (exprs[0].indexOf("@") == -1) {
                                                tmp = myself(v[1].EXPR_LIST[0], cube);
                                            } else {
                                                tmp = [];
                                            }
                                            break;
                                        }
                                        tmp = [];
                                        break;
                                    } else {
                                        if (v[1].EXPR_LIST[1].NUMBER) {
                                            if (v[1].EXPR_LIST[1].NUMBER == '0') {
                                                var ttmp = [];
                                                ttmp = myself(v[1].EXPR_LIST[2], cube);
                                                if (exprs[0].indexOf("@") == -1) {
                                                    ttmp = mergeArray(ttmp, myself(v[1].EXPR_LIST[0], cube));
                                                }
                                                tmp.push(ttmp);
                                                tmp.push(myself(v[1].EXPR_LIST[2], cube));
                                                break;
                                            } else {
                                                tmp = myself(v[1].EXPR_LIST[2], cube);
                                                if (exprs[0].indexOf("@") == -1) {
                                                    tmp = mergeArray(tmp, myself(v[1].EXPR_LIST[0], cube));
                                                }
                                                break;
                                            }
                                        } else {
                                            tmp = myself(v[1].EXPR_LIST[2], cube);
                                            if (exprs[0].indexOf("@") == -1) {
                                                tmp = mergeArray(tmp, myself(v[1].EXPR_LIST[0], cube));
                                            }
                                            tmp = mergeArray(tmp, myself(v[1].EXPR_LIST[1], cube));
                                            break;
                                        }
                                    }

                                } else {
                                    if (myself(v[1].EXPR_LIST[2], cube).length == 0) {
                                        if (v[1].EXPR_LIST[2].NUMBER) {
                                            if (v[1].EXPR_LIST[2].NUMBER == '0') {
                                                var ttmp = [];
                                                ttmp = myself(v[1].EXPR_LIST[1], cube);
                                                if (exprs[0].indexOf("@") == -1) {
                                                    ttmp = mergeArray(ttmp, myself(v[1].EXPR_LIST[0], cube));
                                                }
                                                tmp.push(ttmp);
                                                tmp.push(myself(v[1].EXPR_LIST[1], cube));
                                                break;
                                            } else {
                                                tmp = myself(v[1].EXPR_LIST[1], cube);
                                                if (exprs[0].indexOf("@") == -1) {
                                                    tmp = mergeArray(tmp, myself(v[1].EXPR_LIST[0], cube));
                                                }
                                                break;
                                            }
                                        }
                                    } else {
                                        tmp = myself(v[1].EXPR_LIST[2], cube);
                                        if (exprs[0].indexOf("@") == -1) {
                                            tmp = mergeArray(tmp, myself(v[1].EXPR_LIST[0], cube));
                                        }
                                        tmp = mergeArray(tmp, myself(v[1].EXPR_LIST[1], cube));
                                        break;
                                    }
                                }
                                /*if(myself(v[1].EXPR_LIST[0],cube).length>0){
                                 var exprs = Object.keys(v[1].EXPR_LIST[0]);
                                 var ttmp = [];
                                 var tttmp = [];
                                 if (exprs.indexOf("=")!=-1||exprs.indexOf(">=")!=-1||exprs.indexOf("<=")!=-1||exprs.indexOf("<>")!=-1) {
                                 ttmp = myself(v[1].EXPR_LIST[0], cube);
                                 ttmp = mergeArray(ttmp, myself(v[1].EXPR_LIST[1], cube));
                                 tttmp = myself(v[1].EXPR_LIST[1], cube);
                                 tttmp = mergeArray(tttmp, myself(v[1].EXPR_LIST[2], cube));
                                 if(ttmp.length>0){
                                 if(tttmp.length>0){
                                 tmp = mergeArray(tmp, ttmp);
                                 tmp = mergeArray(tmp, tttmp);
                                 }else{
                                 tmp = ttmp;
                                 }

                                 }else{
                                 if(tttmp.length>0){
                                 tmp = tttmp;
                                 }
                                 }
                                 break;
                                 }
                                 if (exprs.indexOf(">")!=-1||exprs.indexOf("<")!=-1) {
                                 ttmp =  myself(v[1].EXPR_LIST[0], cube);
                                 ttmp = mergeArray(ttmp, myself(v[1].EXPR_LIST[2], cube));
                                 tttmp =  myself(v[1].EXPR_LIST[1], cube);
                                 tttmp = mergeArray(tttmp, myself(v[1].EXPR_LIST[2], cube));
                                 if(ttmp.length>0){
                                 if(tttmp.length>0){
                                 tmp = mergeArray(tmp, ttmp);
                                 tmp = mergeArray(tmp, tttmp);
                                 }else{
                                 tmp = ttmp;
                                 }

                                 }else{
                                 if(tttmp.length>0){
                                 tmp =tttmp;
                                 }
                                 }
                                 break;
                                 }}
                                 tmp = mergeArray(tmp, myself(v[1].EXPR_LIST[1], cube));
                                 tmp = mergeArray(tmp, myself(v[1].EXPR_LIST[2], cube));*/

                                break;
                            case "DB":
                                var xx = v[1].EXPR_LIST.shift();
                                tmp = mergeArray(tmp, myself(v[1].EXPR_LIST, xx.STRING));
                                v[1].EXPR_LIST.unshift(xx);
                                break;
                            default:
                                tmp = mergeArray(tmp, myself(v[1].EXPR_LIST, cube));
                                break;
                        }
                    }
                } else {
                    if (v.STRING) {
                        tmp.push(cube + ":" + v.STRING.toString().trim().toLowerCase());
                    }

                }
            }
        }
    }
    return removeDuplicates(tmp);
};

function mergeArray(a, b) {
    if (a && b) {
        if (a.length == 0) {
            return b;
        }
        if (b.length == 0) {
            return a;
        }
        var tmp = [];
        for (var x in a) {
            if (Array.isArray(a[x])) {
                for (var y in b) {
                    if (Array.isArray(b[y])) {
                        tmp.push(removeDuplicates(a[x].concat(b[y])));
                    } else {
                        tmp.push(removeDuplicates(a[x].concat(b)));
                        break;
                    }
                }
            } else {
                for (var y in b) {
                    if (Array.isArray(b[y])) {
                        tmp.push(removeDuplicates(a.concat(b[y])));
                    } else {
                        tmp.push(removeDuplicates(a.concat(b)));
                        break;
                    }
                }
            }
        }
        return removeDuplicates(tmp);
    } else {
        return [];
    }
}
