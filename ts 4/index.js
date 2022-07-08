class Car {
	constructor(engine, places, doors, volume, year) {
		this.engine = engine
		this.playces = places
		this.doors = doors
		this.volume = volume
		this.year = year
	}
}

class Mercedes extends Car {
	constructor(engine, places, doors, volume, year) {
		super(engine, places, doors, volume, year)
	}
	getAllInfoCar() {
		console.log(mercedes)
	}
	signal() {
		console.log('signal')
	}
	stop() {
		console.log('stop')
	}
}
const mercedes = new Mercedes('baetbr', 4, 2, '1efkfj923', 2022)
mercedes.getAllInfoCar()

class Bmw extends Car {
	constructor(engine, places, doors, volume, year) {
		super(engine, places, doors, volume, year)
	}
	getAllInfoCar() {
		console.log(bmw)
	}
	signal() {
		console.log('bmwsignal')
	}
	stop() {
		console.log('stop')
	}
}

const bmw = new Bmw('djvjfvbe', 4, 4, '42ck#133', 2012)
bmw.getAllInfoCar()
bmw.signal()
bmw.stop()

class Audi extends Car {
	constructor(engine, places, doors, volume, year, start) {
		super(engine, places, doors, volume, year)
		this.#start = start
	}
	#start
	getStart() {
		return this.#start
	}
	getAllInfoCar() {
		console.log(audi)
	}
	signal() {
		console.log('audisignal')
	}
	stop() {
		console.log('stop')
	}
}

const audi = new Audi('audi', 4, 4, 423, 2002, 'start')
audi.getAllInfoCar()
audi.signal()
audi.stop()
console.log(audi.getStart())
