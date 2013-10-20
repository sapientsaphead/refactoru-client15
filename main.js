// Chunk!

// var chunk = function(arr, n) {
// 	var output = [];
// 	var start = 0;
// 	var chunk = parseInt((arr.length/n));
// 	if (arr.length % n === 0) {
// 		for (var i = 0; i < n; i++){
// 			start += chunk
// 			output.push(arr.splice(0, chunk));
// 		}
// 	}
// 	else if (arr.length % n !== 0){
// 		for (var i = 0, len = (arr.length % n); i < len; i++) {
// 			start += (chunk+1)
// 			output.push(arr.splice(0, chunk+1));
// 		}
// 		for (var i = len; i < n; i++) {
// 			start += chunk
// 			output.push(arr.splice(0, chunk));
// 		}
// 	}
// 	return output;      
// }

// Refactored

var chunk = function(arr, n) {
	var start = 0, output = [];
	var chunk = parseInt((arr.length/n));
	for (var i = 0, len = (arr.length % n); i < len; i++) {
		start += (chunk+1)
		output.push(arr.splice(0, chunk+1));
	}
	for (var i = len; i < n; i++) {
		start += chunk
		output.push(arr.splice(0, chunk));
	}
	return output;      
}

var imgArray = ['<img src="images/allan.jpg">','<img src="images/brianh.jpg">','<img src="images/briank.jpg">',
				'<img src="images/caly.jpg">', '<img src="images/chris.jpg">', '<img src="images/dan.jpg">', 
				'<img src="images/deb.jpg">', '<img src="images/jenn.jpg">','<img src="images/jessica.jpg">',
				'<img src="images/joanne.jpg">','<img src="images/julie.jpg">','<img src="images/kerry.jpg">',
				'<img src="images/lori.jpg">','<img src="images/mark.jpg">','<img src="images/mike.jpg">',
				'<img src="images/raphael.jpg">','<img src="images/richard.jpg">', '<img src="images/rob.jpg">',
				'<img src="images/yalcin.jpg">']

$(document).ready(function(){
	var n = prompt('Choose a number between 1 and 19');
	var newArray = chunk(imgArray, n);
	for (var i = 0; i < newArray.length; i++){
		var item = '<div data-attribute=' + i + '>' + newArray[i].join(' ') + '</div'
		$('.content').append(item);
	}
});
