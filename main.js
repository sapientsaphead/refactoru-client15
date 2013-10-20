// Part III: Organizing the code with the revealing module pattern

// var Repeater = (function Repeater() {
// 	var count = 0;
// 	var repeatString = function repeatString(str,n){
// 		 	var repeatedString = '';
// 			for (var i=0; i<n; i++){
// 				repeatedString += str; 
// 			}
// 			console.log(repeatedString);
// 			return repeatedString;
// 	}
// 	var	repeatFunction = function repeatFunction(f,n){
// 			var repeatedF;
// 			for (var i=0; i<n; i++){
// 				repeatedF += f();
// 			}
// 			return repeatedF;
// 	}
// 	var	repeatMore = function repeatMore(str){
// 			var array = [];
// 			count++;
// 			for (var i=0; i<count; i++){
// 				array.push(str);
// 			}
// 			return array.join('');
// 	}
// 	var repeatFunctionTwice = function repeatFunctionTwice(f) {
// 		var repeatF = f() + f()
// 		return repeatF;
// 	}
// 	return {
// 		repeatString: repeatString,
// 		repeatFunction: repeatFunction,
// 		repeatMore: repeatMore,
// 		repeatFunctionTwice: repeatFunctionTwice
// 	}
// })();

// Chunk!

var chunk = function(arr, n) {
	var output = [];
	var start = 0;
	var bigChunk = Math.ceil((arr.length/n) * 1)/1;
	var chunk = parseInt((arr.length/n));
	console.log("little", chunk);
	console.log("big", bigChunk);
	var remainder = arr.length % n;
	console.log("remainder", remainder)
	if (arr.length % n === 0) {
		for (var i = 0; i < n; i++){
			start += chunk
			output.push(arr.splice(0, chunk));
		}
	}
	else if (arr.length % n !== 0){
		for (var i = 0; i < remainder; i++) {
			start += bigChunk
			output.push(arr.splice(0, bigChunk));
		}
		for (var i = remainder; i < n; i++) {
			start += chunk
			output.push(arr.splice(0, chunk));
		}
	}
	return output;      
}
var input = [1,2,3,4,5,6,7,8,9,10]
chunk(input, 3);

// // Chunk Pseudo Code
// If arr.length % n === 0, then var group = arr.length/n
// 	(10 % 2 === 0 so var group = 5) loop through 0 to n, if i * group <  arr.length do += group
// 	i=0; i< group 5


// var splice = function(arr, start, numToReplace) {
//         var i, output = [];
//         for (i = 0; i < start && i < arr.length; i++) {
//                 output.push(arr[i]);
//         }
//         for (i = 3; i < arguments.length; i++) {
//                 output.push(arguments[i]);
//         }
//         for (i = start+numToReplace; i < arr.length; i++) {
//                 output.push(arr[i]);
//         };
//         return output;
// };

// // splice in one line
// var splice = function(arr, start, numToReplace) {

//         return [].concat(arr.slice(0,start), Array.prototype.slice.apply(arguments, [3]), arr.slice(start+numToReplace));
// };
// */
