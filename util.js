function createXHR() {
	if (typeof XMLHttpRequest != 'undefined') {
		return new XMLHttpRequest();
	} else {
		try {
			return new ActiveXObject('Msxml2.XMLHTTP');
		} catch (e) {
			try {
				return new ActiveXObject('Microsoft.XMLHTTP');
			} catch (e) {
			}
		}
	}
	return null;
}
function xhrGet(url, callback, errback, username, password) {
	var xhr = new createXHR();
	xhr.open("GET", url, true);
	xhr.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password)); 
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				callback(parseJson(xhr.responseText));
			}  
			else {
				errback('Service not available, error code:' + xhr.status.toString());
			}
		}
	
	};
	xhr.timeout = 3000;
	xhr.ontimeout = errback;
	xhr.send();
}
function xhrPut(url, data, callback, errback, username, password) {
	var xhr = new createXHR();
	xhr.open("PUT", url, true);
	xhr.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + username)); 
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				callback(xhr.responseText);
			}
			else {
				errback('Service not available, error code:' + xhr.status.toString());
			}
		}
	};
	xhr.timeout = 3000;
	xhr.ontimeout = errback;
	xhr.send(objectToQuery(data));
}
function xhrPost(url, data, callback, errback, username, password) {
	var xhr = new createXHR();
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password)); 
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				callback();
			} 
			else {
				errback('Service not available, error code:' + xhr.status.toString());
			}
		}
	};
	xhr.timeout = 3000;
	xhr.ontimeout = errback;
	xhr.send(objectToQuery(data));
}
function xhrDelete(url, callback, errback, username, password) {
	var xhr = new createXHR();
	xhr.open("DELETE", url, true);
	xhr.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password)); 
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				callback();
			}
			else {
				errback('Service not available, error code:' + xhr.status.toString());
			}
		}
	};
	xhr.timeout = 3000;
	xhr.ontimeout = errback;
	xhr.send();
}

function parseJson(str) {
	return window.JSON ? JSON.parse(str) : eval('(' + str + ')');
}

function objectToQuery(map) {
	var enc = encodeURIComponent, pairs = [];
	for ( var name in map) {
		var value = map[name];
		var assign = enc(name) + "=";
		if (value && (value instanceof Array || typeof value == 'array')) {
			for (var i = 0, len = value.length; i < len; ++i) {
				pairs.push(assign + enc(value[i]));
			}
		} else {
			pairs.push(assign + enc(value));
		}
	}
	return pairs.join("&");
}

function createCookie(name, value, days) {
	var expires;
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = "; expires=" + date.toGMTString();
	} else {
		expires = "";
	}
	document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
	if (document.cookie.length > 0) {
		start = document.cookie.indexOf(name + "=");
		if (start != -1) {
			start = start + name.length + 1;
			end = document.cookie.indexOf(";", start);
			if (end == -1) {
				end = document.cookie.length;
			}
			return unescape(document.cookie.substring(start, end));
		}
	}
	return null;
}

function collapse(elementId) {
	var ele = document.getElementById(elementId);
	if(ele.style.display == "block") {
    		ele.style.display = "none";
			document.getElementById('col_'+elementId).innerHTML='Show';
  	}
	else {
		ele.style.display = "block";
		document.getElementById('col_'+elementId).innerHTML='Hide';
	}
} 

if(!('contains' in String.prototype)) {
       String.prototype.contains = function(str, startIndex) {
                return -1 !== String.prototype.indexOf.call(this, str, startIndex);
       };
 }
