// steps program
function printStep(n){
	for(let row =0;row<n;row++){
		let stair ="";
		for(let col=0;col<n;col++){
			if(col<=row){
				stair+="#"
			}else{
				stair+=" "
			}
		}
		console.log(stair);
	}
}
// recursive
function printStep(n,row=0,stair=''){
	if(n === row){
		return
	}
	if(stair.length === n){
		console.log(stair);
		return printStep(n,row+1,'')
	}

	if(stair.length <= row){
		stair+="#"
	}else{
		stair+=" "
	}
	printStep(n,row,stair)
}
  
// pyramid
function generatePyramid(n){
	for(let row =0;row<n;row++){
		let stair ="";
		let midPoint = Math.floor((2*n-1)/2);
		for(let col=0;col<(2*n-1);col++){
			if(midPoint-row <= col && midPoint+row >= col){
				stair+="#"
			}else{
				stair+=" "
			}
		}
		console.log(stair)
	}
}
 // recursion

 function pyramid(n,row=0,stair=''){
 	if(row === n){
 		return
 	}
 	if(stair.length === 2*n -1){
 		console.log(stair);
 		return pyramid(n,row+1,'')
 	}
 	let midPoint = Math.floor((2*n-1)/2);
 	if(midPoint-row <= stair.length && midPoint+row >= stair.length){
 		stair+="#"
 	}else{
 		stair+=" "
 	}
 	pyramid(n,row,stair);
 }

 // return no of vowels

 function vowels(str){
 	let matchedArr = str.match(/[aeiou]/ig);
 	return matchedArr ? matchedArr.length : 0
 }
