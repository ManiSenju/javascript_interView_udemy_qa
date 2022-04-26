// string reversal

function rev(str){
	console.log(str.split('').reverse().join(''));
}

function rev(str){
	let reverse='';
	for(let char of str){
		reverse = char+reverse;
	}
	console.log(reverse);
}

function rev(str){
	return str.split('').reduce((accum,char)=>{
		return char + accum;
	},'');
}
