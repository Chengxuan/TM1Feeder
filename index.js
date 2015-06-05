
function login(){
	if (document.getElementById("txt_URL").value.trim() == ""
			|| document.getElementById("txt_UN").value.trim() == ""
				|| document.getElementById("txt_PW").value.trim() == "") {
		alert('Fill all information, please...');
		return false;
	}
	var url = document.getElementById("txt_URL").value.trim();
	if(!url.contains('?$expand=Dimensions')){
		if(url.contains('?'))
		{url = url.substring(0,url.lastIndexOf('?'));}	
		url = url+ '?$expand=Dimensions';	
	}
	xhrGet(url, function(res) {
	//Cube 2<a id="col_div_cube2" href="javascript:collapse('div_cube2');">Show</a>
	//<br/>
	//<div id="div_cube2" style="display:none;text-align:center;">
	//<table>
	//<thead><th width='600px'>Rules</th>
	//<th width='600px'>Feeders</th>
	//<th width='600px'>Demesions</th></thead>
	//<tbody style="text-align:center">
//	<tr><td>rulsadfsadfsdafsdafsdafsdafsadfsadfsadfes</td>
//	<td>sadfsadfdsafsdafsadfdsafsdafasdfasdfsadf</td>
//	<td>sadfsdafsdafsdafasdfsadfsafsdafsadfsdaf</td>
//	</tr>
//	</tbody>
//	</table>
//	</div>

		var rdiv = document.getElementById('div_result');
		rdiv.innerHTML = "";
		document.getElementById('div_result_null').innerHTML = "";
		var data = res.value;
		for(var i in data){
			
			var rfs = data[i].Rules.toString().trim();
			rfs = removeComments(rfs);
			rfs = rfs.replace(/;\n+/g,";<br/><br/>").replace(/\s+/g,"");
			if(rfs.length>0){
				var rs = '';
				var fs = '';
				var ds = '';
				var atest = '';
			var s = tm1parser.parse(rfs);
			var jcontent = s.RULES_FILE;
			var scontent = rfs.split(";<br/><br/>").filter(Boolean);
			for(var sc in scontent){
				scontent[sc] = 	scontent[sc].replace(/</g,"&lt").replace(/>/g,"&gt");		
			}



			if(jcontent.length==2){
				var jrules = jcontent[0].RULES;
				var jfeeders = jcontent[1].FEEDERS;
				b = jrules.length + jfeeders.length + 1;
				var srules = scontent.splice(0,jrules.length);
				var sfeeders = scontent.splice(1);
				if(jfeeders.length==sfeeders.length && jrules.length==srules.length){
					//rs = srules.join(";<br/><br/>");
					rs = "redundant feeders";
					//fs = sfeeders.join(";<br/><br/>");
					var feederchk = [];
					for (var x in jrules) {
							var atestfeeders = "";
							for (var y in jrules[x]) {
								if (y == "RULE_DEF") {
									var rarea = digstrings(jrules[x][y][0]);
									var rexp = digstrings(jrules[x][y][1]);
									var brexp = rexp.slice(0);
									for(var f in jfeeders){
		   							var farea = digstrings(jfeeders[f][0]);
										var fexp = digstrings(jfeeders[f][1]);
										if((pc(rarea,fexp)||pc(fexp,[rarea[0]]))&&cc(rexp,farea)){//(pc(fexp,rarea)||pc(rarea,fexp))){
										 //atest +="<tr><td>"+srules[x] +"</td><td>"+sfeeders[f]+"</td><td></td></tr>";
										 atestfeeders+=sfeeders[f] + ";<br/><br/>";
										 brexp = pr(brexp,farea);
										 feederchk.push(f);
										}
									}
									if(brexp.length>0){
									atestfeeders+= "<font color=\"green\">[" + brexp.join(",") +"]=>[" + rarea.join(",") +"];</font><br/>";
								}
									atest +="<tr><td>"+srules[x] +"</td><td>"+atestfeeders+"</td><td></td></tr>";
								}
							}
							
						}
						
					for(var x=0;x<sfeeders.length;x++){
						if(feederchk.indexOf(x.toString())==-1){
								fs += sfeeders[x] + ";<br/><br/>";				
						}
					}
			}
			}else{
				var jrules  = jcontent[0].RULES;
				rs = scontent.join(";<br/><br/>");
			}
				
				var dim = data[i].Dimensions;
				for(var d in dim){
				ds += dim[d].Name + '<br/>';	
				}
				rdiv.innerHTML += data[i].Name + "<a id=\"col_div_"+data[i].Name
			    +"\" href=\"javascript:collapse('div_"+ data[i].Name +"');\">Show</a><br/>";
				var cdiv = document.createElement('div');
				cdiv.setAttribute("id", "div_"+data[i].Name);
				cdiv.setAttribute("style", "display:none;text-align:center;");
				var ctable = document.createElement('table');
				ctable.setAttribute("border","1");
				var cth = document.createElement('thead');
				cth.innerHTML = "<th width='500px'>Rules</th><th width='500px'>Feeders</th><th width='100px'>Demesions</th>";
				var ctb = document.createElement('tbody');
				ctb.setAttribute("style", "text-align:center;");
				ctb.innerHTML = atest +"<tr><td>"+rs+"</td><td style=\"color:red;\">"+fs+"</td><td>"+ds+"</td></tr>";
				ctable.appendChild(cth);
				ctable.appendChild(ctb);
				cdiv.appendChild(ctable);
				rdiv.appendChild(cdiv);
			}else{
				document.getElementById('div_result_null').innerHTML += data[i].Name+"<br/>";
			}
			
				
		}
	}, function(err) {
		alert(err);
	},document.getElementById("txt_UN").value.trim(),document.getElementById("txt_PW").value.trim());
}

