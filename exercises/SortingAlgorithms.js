// sorting algorithms

function bubbleSort(arr){
	for(let i=0;i<arr.length;i++){
		for(let j=0;j<arr.length-i-1;j++){
			if(arr[j] > arr[j+1]){
				const temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}
	return arr;
}


function selectionSort(arr){
	let indexOfMin;
	for(let i=0;i<arr.length;i++){
		indexOfMin = i;
		for(let j=i+1;j<arr.length;j++){
			if(arr[j] < arr[indexOfMin]){
				indexOfMin = j;
			}
		}
		if(indexOfMin !== i){
			const lesser = arr[indexOfMin];
			arr[indexOfMin] = arr[i];
			arr[i] = lesser;
		}
	}
	return arr;
}


function mergeSort(arr){
	if(arr.length === 1){
		return arr;
	}

	const center = Math.floor(arr.length/2);
	const leftArr = arr.slice(0,center);
	const rightArr = arr.slice(center);

	return merge(mergeSort(leftArr),mergeSort(rightArr))

}

function merge(leftArr,rightArr){
	// leftArr, rightArr must be sorted arrays
	const resultArr =[];
	while(leftArr.length && rightArr.length){
		if(leftArr[0]<rightArr[0]){
			resultArr.push(leftArr.shift())
		}else{
			resultArr.push(rightArr.shift())
		}
	}
	// push the remaining elements at the last

	return [...resultArr,...leftArr,...rightArr];
}
