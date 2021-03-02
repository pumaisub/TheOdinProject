function add (firstNumber,secondNumber) {
	return firstNumber + secondNumber;
}

function subtract (firstNumber,secondNumber) {
	return firstNumber - secondNumber;
}

function sum (arrayName) {
	if (Array.isArray(arrayName)){
		if (arrayName === undefined || arrayName.length == 0) {
			return 0;
		} else {
			var sum = 0;
			for(i=0; i < arrayName.length;i++){
				sum += arrayName[i];
				console.log(sum);
			} 
			return sum;
		}
	} else {
		console.log('Error, you must provide an array for the sum() function.')
		alert('Error, you did not provide the sum() function an array parameter')
	}
}

function multiply (arrayName) {
	if (Array.isArray(arrayName)){
		if (arrayName === undefined || arrayName.length == 0) {
			console.log('Error, the array provided to the multiply() function is undefined or empty');
		} else {
			var product = 1;
			for(i=0; i < arrayName.length;i++){
				product *= arrayName[i];
				console.log(product);
			} 
			return product;
		}
	} else {
		console.log('Error, you must provide an array for the product() function.')
		alert('Error, you did not provide the product() function an array parameter')
	}
}
//var array1 = [1,2,3];
//console.log(multiply(array1));
//var array2 = [2,4,6,8,10,12,14];
//console.log(multiply(array2));

function power(arrayName) {
	if (Array.isArray(arrayName)){
		if (arrayName === undefined || arrayName.length <= 1) {
			console.log('Error, the array provided to the power() function is undefined, empty, or only has one parameter. We need two or more parameters');
		} else {
			var powerProduct = arrayName[0];
			for(i=1; i < arrayName.length;i++){
				powerProduct = powerProduct ** arrayName[i];
				console.log(powerProduct);
			} 
			return powerProduct;
		}
	} else {
		console.log('Error, you must provide an array for the product() function.')
		alert('Error, you did not provide the product() function an array parameter')
	}
}
var array3 = [4,3];
console.log(power(array3));
// if [a ], error , there needs to be two or more parameters ? 
// if [a b] , a**b return powerProduct
// if [a b c] , powerProduct = powerProduct ** c, return powerProduct  


function factorial(integer) {
	if (integer === 0){
		return 1; 
	} else {
		var factorialProduct = 1;
		for(i=integer; i>0; i--){
			factorialProduct = factorialProduct * i;
		}
		return factorialProduct;
	}
}

//console.log(factorial(1));
//console.log(factorial(2));
//console.log(factorial(5));
//console.log(factorial(10));

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
