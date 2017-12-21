var input = process.env.INPUT ? process.env.INPUT : ""

var split = function(str) {
    var array = []
    for (var i = 0, chr; i < str.length; i++) {
        array.push(str.charCodeAt(i))       
    }
    return array
}

var decode = function(input){
    return ((input != 46 && input != 47) ? input - 1 : input)
}

var mergeChars = function (chars) {
	var result = ""
	for (var i = 0; i < chars.length; i++) {
        result += String.fromCharCode(chars[i]);
    }
    return result;
}
 
console.log(mergeChars(split(input).map(decode)))


