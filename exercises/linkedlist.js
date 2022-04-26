//linked list
class Node{
	constructor(data,node){
		this.data = data;
		this.next = node || null;
	}
}

class Node{
	constructor(data,node){
		this.data = data;
		this.next = node || null;
	}
}

class LinkedList{
	constructor(){
		this.head = null;
	}

	insertFirst(data){
		if(!this.head){
			this.head = new Node(data)
		}else{
			this.head = new Node(data,this.head)
		}
	}
	size(){
		let count =0;
		let node = this.head;
		while(node){
			count++;
			node = node.next;
		}
		return count;
	}

	getFirst(){
		return this.head;
	}

	getAt(index){
		let count = 0;
		let node = this.head;
		while(node){
			if(count === index){
				return node;
			}
			count++;
			node = node.next;
		}
		return null;
	}

	getLast(){
		return this.getAt(this.size()-1)
	}
	clear(){
		this.head = null;
	}
}

class LinkedList{
	constructor(){
		this.head = null;
	}

	insertFirst(data){
		if(!this.head){
			this.head = new Node(data);
		}else{
			this.head = new Node(data,this.head);
		}
	}

	size(){
		let count = 0;
		let node = this.head;
		while(node){
			count++;
			node = node.next;
		}
		return count;
	}

	getFirst(){
		return this.head;
	}

	getLast(){
		return this.getAt(this.size()-1)
	}

	clear(){
		this.head = null;
	}

	removeFirst(){
		let node = this.head;
		if(node && node.next){
			this.head = node.next;
		}else{
			this.head = null;
		}
	}

	removeLast(){
		if(!this.head){
			return;
		}
		if(!this.head.next){
			this.head = null;
			return;
		}
		let prev = this.head;
		let node = this.head.next;
		while(node.next){
			prev = node;
			node = node.next;
		}
		prev.next = null;
	}

	insertLast(data){
		let node = this.getLast();
		if(!node){
			this.head = new Node(data);
		}else{
			node.next = new Node(data);
		}
	}

	getAt(index){
		let count = 0;
		let node = this.head;
		while(node){
			if(count === index){
				return node;
			}
			count++;
			node = node.next;
		}
		return null;
	}

	removeAt(index){
		if(!this.head){
			return null;
		}
		if(index === 0){
			this.head = this.head.next;
			return;
		}
		const prev = this.getAt(index-1);
		if(!prev || !prev.next)return;
		prev.next = prev.next.next;
	}

	insertAt(data,index){
		if(!this.head){
			this.head = new Node(data);
		}
		if (index === 0) {
      		this.head = new Node(data, this.head);
      		return;
    	}
		const prev = this.getAt(index-1) || this.getLast();
		const node = new Node(data,prev.next);
		prev.next = node;
	}

	forEach(callback){
		if(!this.head){
			return;
		}
		let node = this.head;
		let count =0;
		while(node){
			callback(node,count);
			count++;
			node = node.next;
		}
	}
	*[Symbol.iterator](){
		let node = this.head;
		while(node){
			yield node;
			node = node.next;
		}
	}
}

function midpoint(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

function circular(list) {
    let slow = list.getFirst();
  	let fast = list.getFirst();
  	while(fast.next && fast.next.next){
  		slow = slow.next;
  		fast = fast.next.next;
  		if(slow === fast) return true;
  	}
  	return false;
}

function fromLast(list, n) {
    let slow = list.getFirst();
    let fast = list.getFirst();
    while(n > 0){
    	fast = fast.next;
    	n--;
    }
    while(fast.next){
    	slow = slow.next;
    	fast = fast.next;
    }
    return slow;
}
