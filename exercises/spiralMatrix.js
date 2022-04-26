// spiral matrix
//     [[1,  2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(size){
	let startRow =0,endRow=size-1,startCol=0,endCol=size-1;
	let counter=1;
	let results = new Array(size).fill().map(()=>new Array(size).fill(''));
	while(startRow <= endRow && startCol <= endCol){
		for(let i=startCol;i<=endCol;i++){
			results[startRow][i] = counter; 
			counter++;						
		}
		startRow++;
		for(let i=startRow;i<=endRow;i++){
			results[i][endCol] = counter;
			counter++;
		}
		endCol--;
		for(let i=endCol;i>=startCol;i--){
			results[endRow][i] = counter;
			counter++;
		}
		endRow--;
		for(let i=endRow;i>=startRow;i--){
			results[i][startCol] = counter;
			counter++;
		}
		startCol++;
	}
	return results;
}
