function test(){
	for(var i=1;i<100;i++){
		if(i%3 === 0 && i%5 ===0)
			console.log("FizzBuzz");
		else if(i%3 === 0)
			console.log("Fizz");
		else if(i%5 === 0)
			console.log("Buzz");
		else
			console.log(i);
	}
}

// fibannoci

function fib(){
	let n1=0,n2=1,nextTerm;
	
	for(let i=1;i<=5;i++){
		console.log(n1);
		nextTerm = n1+n2;
		n1=n2;
		n2=nextTerm;
	}
}
// recursive fib

function fib(n){
	return n<1 ? 0 : n<=2 ? 1 : fib(n-1)+fib(n-2);
}
console.log(fib(5))

//memoize fib
function memoize(fn){
	const cache ={}
	return function(...args){
		if(cache[args]){
			return cache[args]
		}else{
			const result = fn.apply(this,args)
			cache[args] = result
			return result
		}
	}
}

const memFib = memoize(fib)
console.log(memFib(5))
