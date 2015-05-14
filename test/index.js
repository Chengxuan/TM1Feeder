
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
		var rdiv = document.getElementById('div_result');
		rdiv.innerHTML = "";
		document.getElementById('div_result_null').innerHTML = "";
		var data = res.value;
		for(var i in data){
			
			var rfs = data[i].Rules.toString();
			rfs=rfs.replace(/(\r\n|\n|\r)/gm,"").replace(/\s+/g,"");
			
		     var cstream = new org.antlr.runtime.ANTLRStringStream(rfs);
		    var  lexer = new TM1RulesLexer(cstream);
		     var tstream = new org.antlr.runtime.CommonTokenStream(lexer);
		    var  parser = new TM1RulesParser(tstream);
		

		}
	}, function(err) {
		alert(err);
	},document.getElementById("txt_UN").value.trim(),document.getElementById("txt_PW").value.trim());
}