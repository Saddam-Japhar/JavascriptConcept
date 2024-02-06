class Vehicle {
    constructor(make, model, price){
        this.make = make;
        this.model = model;
        this.price = price;
    }
}

const myCar = new Vehicle("Swift", "latest", "1400000")

console.log('Is myCar Insatnce of Vehicle', myCar instanceof Vehicle );
console.log("myCar: ", myCar)

const yourCar = Object.assign({}, myCar);

console.log('Is youCar Insatnce of Vehicle', yourCar instanceof Vehicle );
console.log("yourCar: ", yourCar)

const hisCar = JSON.parse(JSON.stringify(myCar))

console.log('Is hisCar Insatnce of Vehicle', hisCar instanceof Vehicle );
console.log("hisCar: ", hisCar)

const herCar = Object.create(myCar);

console.log('Is hisCar Insatnce of Vehicle', herCar instanceof Vehicle );
console.log("herCar: ", herCar)

class Bike extends Vehicle {
    constructor(make, model, price, seatHeight){
        super(make, model, price)
        this.seatHeight = seatHeight
    }
}

const myBike = new Bike('Ducati', 'monster', 140000, "3fit")

console.log('Is myBike Insatnce of Vehicle', myBike instanceof Vehicle );
console.log('Is myBike Insatnce of Vehicle', myBike instanceof Bike );

