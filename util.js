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
    xhr.setRequestHeader("Authorization", "Basic " + base64.encode(username + ":" + password));
    xhr.onreadystatechange = function () {
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

function parseJson(str) {
    return window.JSON ? JSON.parse(str) : eval('(' + str + ')');
}

function collapse(elementId) {
    var ele = document.getElementById(elementId);
    if (ele.style.display == "block") {
        ele.style.display = "none";
        document.getElementById('col_' + elementId).innerHTML = 'Show';
    }
    else {
        ele.style.display = "block";
        document.getElementById('col_' + elementId).innerHTML = 'Hide';
    }
}

if (!('contains' in String.prototype)) {
    String.prototype.contains = function (str, startIndex) {
        return -1 !== String.prototype.indexOf.call(this, str, startIndex);
    };
}

if (!('trim' in String.prototype)) {
    String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g, '');
    }
}


