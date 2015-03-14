function updateFilter(wordfilterlist) {
	for(var i = 0; i<wordfilterlist.length; ++i){
		chrome.history.search({
	      'text': wordfilterlist[i],
	      'maxResults': 2147483647,
	      'startTime': 0},
	    function(historyItems) {
	    	for (var j = 0; j < historyItems.length; ++j) {
    			chrome.history.deleteUrl({url: historyItems[j].url});
	    	}
		});
	}
}

var obj_Temp = {};
var stringArray = [];
chrome.storage.local.get('searchterms', function (result) {
	if (typeof result['searchterms'] === 'object') {
	} else {
		chrome.storage.local.set({'searchterms': ['none']});
		chrome.storage.local.set({'searchterms': []});
	}
	var array = result['searchterms'];
	stringArray = array;
	for (var i=0; i<array.length; i++){
		cell = document.createElement("td");
    	xButton = document.createElement("input");
    	xButton.type = 'image';
    	xButton.src = 'x.png';
    	xButton.id = array[i] + '_delete';
    	cell.appendChild(xButton);
    	newRow = document.createElement("tr");
        newCell = document.createElement("td");
        newRow.appendChild(newCell);
        newRow.appendChild(cell);
        newCell.innerHTML = array[i];
        var list = document.getElementById("listofwords");
		list.appendChild(newRow);
	}
});
chrome.storage.local.get('interval', function (result) {
	document.getElementById("interval").value = (result['interval']/60/1000);
});

$(document).ready ( function () {

	$("#filter").click ( function() {
		updateFilter(stringArray);
	});
	$("#options").click ( function() {
		chrome.tabs.create({'url': chrome.extension.getURL("options.html") } )
	});
	$("#storeThings").click(function () {
		var e = document.getElementById("word").value;
		storeWord(e);
	});
	$("#interval2").click(function () {
		var intv = document.getElementById("interval").value;
		intv = intv * 60 * 1000;
		chrome.storage.local.set({'interval': intv});
	});
	$(document).on('click', "input[id$='_delete']", function () { 
		var string = event.target.id;
		string = string.replace("_delete", "");
		removeWord(string);
	}); 

	function removeWord( e ) {
		var array = [];
		chrome.storage.local.get('searchterms', function (result) {
			array = result['searchterms'];
	    	for (var i=0; i<array.length; ++i){
	    		if (e == array[i]){
	    			array.splice(i, 1);
	    			chrome.storage.local.set({'searchterms': array}, function () {
				    	location.reload();
					});
	    			return;
	    		}
	    	}
		});
	}

	function storeWord(e) {
		chrome.storage.local.get('searchterms', function (result) {
			var array = result['searchterms'];
			for (var i=0; i<array.length; ++i){
	    		if (e == array[i]){
	    			return;
	    		}
	    	}
	    	array.push(e);
	    	chrome.storage.local.set({'searchterms': array}, function () {
		    	location.reload();
			});
		});
	}

	chrome.storage.local.get('auto',function(returnedvalue){
		var result = returnedvalue['auto'];
		if(result){
			document.getElementById("changeInterval").innerHTML = 'Stop';
		}
		else{
			document.getElementById("changeInterval").innerHTML = 'Start';
		}
	});

	$("#changeInterval").click ( function() {
		chrome.storage.local.get('auto',function(returnedvalue){
			var result = returnedvalue['auto'];
			if(result){
				chrome.storage.local.set({'auto': 0}, function(){});
				document.getElementById("changeInterval").innerHTML = 'Start';
			}
			else{
				chrome.storage.local.set({'auto': 1}, function(){});
				document.getElementById("changeInterval").innerHTML = 'Stop';
			}
		});
	});

});
