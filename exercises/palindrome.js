// palindrome

function palindrome(str){
	let rev = str.split('').reverse().join('');
	return str === rev;
}

function palindrome(str){
	return str.split('').every((char,i)=>{
		return char == str[str.length-1-i]
	})
}
