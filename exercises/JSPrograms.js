// reverse a number

function rev(number){
	let sign = Math.sign(number);
	number = Math.abs(number);
	return sign * number.toString().split('').reverse().join('');
}

// find max char in the string

function maxChar(str){
	let charCountMap ={};
	for(let char of str){
		if(!charCountMap[char])
			charCountMap[char] = 1;
		else
			charCountMap[char]++;
	}
	let max = 0;
	let maxChar = '';
	for(let key in charCountMap){
		if(charCountMap[key] > max){
			max = charCountMap[key];
			maxChar = key;
		}
	}
	return maxChar;
}

// do array chunks

function chunk(array,size){
	let arr =[];
	let subArray =[];
	for(let i=0;i<array.length;i++){
		if(size > array.length){
			arr.push(array);
			break;
		}
		subArray.push(array[i]);
		if(subArray.length == size || (i == array.length-1)){
			arr.push(subArray);
			subArray =[];
		}
	}
	return arr;
}

function chunk(array,size){
	let arr=[];
	let index=0;
	while(index < array.length){
		arr.push(array.slice(index,index+size));
		index=index+size;
	}
	return arr;
}




// anagrams

function isAnagaram(str1,str2){
	let n1 = str1.replace(/[^\w]/g,'').toLowerCase();
	let n2 = str2.replace(/[^\w]/g,'').toLowerCase();
	let n1CharMap = charMap(n1);
	let n2CharMap = charMap(n2);
	var areObjectsEqual = true;
	if(n1.length === n2.length){
		for(let key in n1CharMap){
			if(n1CharMap[key] !== n2CharMap[key]){
				areObjectsEqual = false;
				break;
			}
		}
	}else{
		areObjectsEqual= false;
	}
	return areObjectsEqual;
}

function charMap(str){
	var map ={};
	for(let char of str){
		if(!map[char]) 
			map[char] =1
		else
			map[char]++
	}
	return map;
}

// alternative way

function isAnagram(str1,str2){
	// sort the strings and compare
	let n1 = str1.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
	let n2 = str2.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');

	return n1 === n2;

}

// capitalize first char of every word

function cap(str){
	let arr = [];
	for(let str of str.split(' ')){
		arr.push(str[0].toUpperCase()+str.splice(1));
	}
	return arr.join(" ");
}
