//Create a class Car with make, model, and year params for constructor
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getDescription(){
        return `Vehicle Info; make: ${this.make}, model: ${this.model}, year: ${this.year}`;
    }
}

//Subclass of Car called ElectricCar
class ElectricCar extends Car {
    constructor(make, model, year, range) {
        super(make, model, year);
        this.range = range;
    }

    getDescription = () => {
        return `Vehicle Info; Make: ${this.make} | Model: ${this.model} | Year: ${this.year} | Range:${this.range}`;
    }
}

//Create new instance of ElectricCar
const newCar = new ElectricCar("Tesla", "Model S", 2019, 300);
console.log(newCar.getDescription());

//module.exports = { Car, ElectricCar };