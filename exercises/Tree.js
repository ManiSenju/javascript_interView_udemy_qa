class Node{
	constructor(data){
		this.data = data;
		this.children =[];
	}

	add(data){
		this.children.push(new Node(data));
	}

	remove(data){
		this.children = this.children.filter(function(node){
			return node.data !== data
		})
	}
}

class Tree{
	constructor(){
		this.root = null;
	}

	traverseBF(callback){
		const arr =[this.root];

		while(arr.length){
			const node = arr.shift();
			callback(node);

			if(!node.children)
				continue;

			arr.push(...node.children);
		}
	}

	traverseDF(callback){
		const arr = [this.root];

		while(arr.length){
			const node = arr.shift();
			callback(node);

			if(!node.children) continue;

			arr.unshift(...node.children);
		}
	}
}

function levelWidth(rootNode){
	// this uses Node class
	const counterArr =[0];
	const nodeArr =[rootNode,'s'];
	while(nodeArr.length > 1){
		const node = nodeArr.shift();

		if(node === 's'){
			counterArr.push(0);
			nodeArr.push('s');
		}else{
			nodeArr.push(...node.children);
			counterArr[counterArr.length-1]++;
		}
	}

	return counterArr;

}
