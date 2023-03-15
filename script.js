// complete the given function

function palindrome(str){
	str=str.toLowerCase();
	var rev=str.split("").reverse().join("");
	return str===rev;
}
module.exports = palindrome
