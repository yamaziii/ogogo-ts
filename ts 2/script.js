function method() {
	console.log(counter1)
	console.log(counter2)
	var counter1 = 1
	let counter2 = 2
}
method()

// выйдет undefined, т.к мы консолим, вы заданных значений
// если бы делали ниже let, то вышло бы 1, 2 (counter1 = 1,  counter2 = 2)
