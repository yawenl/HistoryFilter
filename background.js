var stringArray = [];

var pollInterval; // 30 seconds, in milliseconds
// var pollInterval = 1000 * 60 * 10; // 10 minute, in milliseconds
chrome.storage.local.set({'interval': 30000}, function(){});

startRequest();

var timerID;

function updateFilter2(wordfilterlist) {
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



function startRequest() {
	chrome.storage.local.get('searchterms', function (result) {
		stringArray = result['searchterms'];
		chrome.storage.local.get('auto', function (result) {
			if (result['auto']){
				updateFilter2(stringArray);
			}
		});
	});

	chrome.storage.local.get('interval',function(result){
		pollInterval = result['interval'];
	});
	timerID = window.setTimeout(startRequest, pollInterval);
}