function fullyContains(a1,a2){
	if(a1&&a2){
	for(var i=0;i<a2.length;i++){
		if(a1.indexOf(a2[i])==-1){
			return false;
		}
	}
}
	return true;
}

function hasEmptyArray(a) {
	for(var i in a){
		if(Array.isArray(a[i])){
		if(a[i].length == 0 ) return true;	}
	}
}

function getLeast(a){
	var mini = 9999;
	var minindex = -1;
	for(var i in a){
		if(Array.isArray(a[i])){
		if(a[i].length <mini){
			mini = a[i].length;
			minindex = i;		
		}	}
	}
	return a[minindex];
}

function hasIntersection(a1,a2){
	if(a1&&a2){
	for(var i=0;i<a2.length;i++){
		if(a1.indexOf(a2[i])!=-1){
			return true;
		}
	}
}
	return false;
}

function excludeSame(a1,a2){
	if(a1&&a2){
	for(var i=0;i<a2.length;i++){
		if(a1.indexOf(a2[i])!=-1){
			a1.splice(a1.indexOf(a2[i]),1);
		}
	}
}
	return a1;
}

function removeComments(origin){
var tmp ="";
if(origin.indexOf("#")!=-1){
while(origin.indexOf("#")!=-1){
	
	if(origin.indexOf("#")>0){
		tmp+=origin.substring(0,origin.indexOf("#"));
			
	}
	if(origin.indexOf("\n")!=-1){
	origin = origin.substring(origin.indexOf("\n",origin.indexOf("#")+1)+1);
}else{
origin = "";
}	
	if(origin.indexOf("#")==-1){
		if(origin!=""){
			tmp+=origin;	
		}
	
	}
}
}else {
tmp = origin;
}
tmp = tmp.replace(/ +/g,"");
return tmp;
}

function removeDuplicates(a) {
	var x = [];
	for(var i=0;i<a.length;i++){
	if(x.indexOf(a[i])==-1){
		x.push(a[i]);
	}
}
	return x;
}

var digstringsa = function myself(x) {
	var tmp = [];
	if (Array.isArray(x)) {
		for (var y in x) {
			tmp = tmp.concat(myself(x[y]));
		}
	} else {

		if (x.STRING) {
			tmp.push(x.STRING.toString().trim().toLowerCase());
		} else {
			var ps = Object.keys(x);
			for (var j = 0; j < ps.length; j++) {
				var nm = ps[j];
				var v = x[nm];
				if( nm.toString()  == "AREA_ITEMS" && v.AREA_ITEM_SET){
					tmp = tmp.concat(myself(v.AREA_ITEM_SET));
				}
				if (Array.isArray(v)) {
					if(nm.toString() !="FUNCTION"){
					tmp = tmp.concat(myself(v));
					}else{
						 switch(x[nm][0].IDENTIFIER.toString()) {
						 	case "ATTRS":
						 	break;
						 	case "ATTRN":
						 	break;
						 	default:
						 	 tmp = tmp.concat(myself(v));
						 	 break;
						 } 					
					}
				} else {
					if (v.STRING) {
						tmp.push(v.STRING.toString().trim().toLowerCase());
					}

				}
			}
		}
	}
	return removeDuplicates(tmp);
};

var digstrings = function myself(x) {
	var tmp = [];
	if (Array.isArray(x)) {
		for (var y in x) {
			tmp = mergeArray(tmp,myself(x[y]));
		}
	} else {

		if (x.STRING) {
			tmp.push(x.STRING.toString().trim().toLowerCase());
		} else {
			var ps = Object.keys(x);
			for (var j = 0; j < ps.length; j++) {
				var nm = ps[j];
				var v = x[nm];
				if( nm.toString().toUpperCase()  == "AREA_ITEMS" && v.AREA_ITEM_SET){
					tmp = mergeArray(tmp,myself(v.AREA_ITEM_SET));
				}
				if (Array.isArray(v)) {
					var ttmp = [];
					if(nm.toString().toUpperCase() !="FUNCTION"){
						switch(nm.toString()) {
							case "*":
							if(v[0].NUMBER){
								if(v[1].NUMBER){tmp=[];}else{tmp=myself(v[1]);}
							}else{
								if(v[1].NUMBER){tmp=myself(v[0]);}else{tmp.push(myself(v[0]));tmp.push(myself(v[1]));}
							}
							break;
							case "\\":
							if(v[0].NUMBER){
								if(v[1].NUMBER){tmp=[];}else{tmp=myself(v[1]);}
							}else{
								if(v[1].NUMBER){tmp=myself(v[0]);}else{tmp.push(myself(v[0]));tmp.push(myself(v[1]));}
							}
							break;
							case "/":
							if(v[0].NUMBER){
								if(v[1].NUMBER){tmp=[];}else{tmp=myself(v[1]);}
							}else{
								if(v[1].NUMBER){tmp=myself(v[0]);}else{tmp.push(myself(v[0]));tmp.push(myself(v[1]));}
							}
							break;
							default:
							tmp = mergeArray(tmp,myself(v));
							break;						
						}

					}else{
						 switch(x[nm][0].IDENTIFIER.toString().toUpperCase()) {
						 	case "ATTRS":
						 	break;
						 	case "ATTRN":
						 	break;
						 	case "IF":
						 	tmp = mergeArray(tmp,myself(v[1].EXPR_LIST[1]));
						 	tmp = mergeArray(tmp,myself(v[1].EXPR_LIST[2]));
						 	break;
						 	case "DB":
						 	var xx = v[1].EXPR_LIST.shift();
						 	tmp = mergeArray(tmp,myself(v[1].EXPR_LIST));
						 	v[1].EXPR_LIST.unshift(xx);
						 	break;
						 	default:
						 	 tmp = mergeArray(tmp,myself(v[1].EXPR_LIST));
						 	 break;
						 } 					
					}
				} else {
					if (v.STRING) {
						tmp.push(v.STRING.toString().trim().toLowerCase());
					}

				}
			}
		}
	}
	return removeDuplicates(tmp);
};

function mergeArray(a,b){
	if(a&&b){
		if(a.length==0){
return b;		
		}
		if(b.length ==0){
return a;		
		}
var tmp = [];
		for(var x in a){
			if(Array.isArray(a[x])){
				for(var y in b){
				if(Array.isArray(b[y])){
					tmp.push(removeDuplicates(a[x].concat(b[y])));
				}else{
					tmp.push(removeDuplicates(a[x].concat(b)));
					break;
				}
				}
			}else{
				for(var y in b){
				if(Array.isArray(b[y])){
					tmp.push(removeDuplicates(a.concat(b[y])));
				}	else{
				tmp.push(removeDuplicates(a.concat(b)));
				break;
				}	
			}	
			}
		}
	return tmp;
	}else{
return [];	
	}
}
