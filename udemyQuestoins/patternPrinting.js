
//Crazy Numbers
// Ninja loves playing with numbers. So one day, he wants to arrange a few numbers in the ‘N’ number of rows. 
//The first row contains 1 number, the second row has two numbers, the third row has 3 digits, and so on.
// Ninja starts placing numbers in increasing order, with absolute difference 1, starting from 1 and continuing till he encounters 9, and then he again restarts from 1.
// You are given an integer ‘N’ denoting the given number of rows. Can you print the pattern that Ninja wants to create?
function crazyNumber (rows) {
	let number =1
	for(let i=1;i<=rows;i++){
		for(let j=1;j<=i;j++){
			process.stdout.write(`${number},`);
			number===9?number=1:number=number+1
		}
		console.log('')
	}
}

crazyNumber(5)