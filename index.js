
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
			
			var rfs = data[i].Rules.toString().replace(/\n+/g,"").trim().replace(/;/g,";<br/><br/>");
			if(rfs.length>0){
				var rs = '';
				var fs = '';
				var ds = '';
				if(rfs.contains('<br/>Feeders;<br/>')){
					rs = rfs.split('<br/>Feeders;<br/>')[0];
					fs = rfs.split('<br/>Feeders;<br/>')[1];
				}else{
					if(rfs.contains('<br/>feeders;<br/>')){
						rs = rfs.split('<br/>feeders;<br/>')[0];
					fs = rfs.split('<br/>feeders;<br/>')[1];
					}else{
						if(rfs.contains('<br/>FEEDERS;<br/>')){
						rs = rfs.split('<br/>FEEDERS;<br/>')[0];
						fs = rfs.split('<br/>FEEDERS;<br/>')[1];
						}else{
						
							rs = rfs;
						}
					}
					
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
				ctb.innerHTML ="<tr><td>"+rs+"</td><td>"+fs+"</td><td>"+ds+"</td></tr>";
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