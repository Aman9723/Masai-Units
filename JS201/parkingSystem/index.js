class Vehicle {
    constructor(type, regNumber) {
        this.type = type;
        this.regNumber = regNumber;
    }
}

class Car extends Vehicle {
    constructor(type, regNumber) {
        super(type, regNumber);
    }
}

class Bike extends Vehicle {
    constructor(type, regNumber) {
        super(type, regNumber);
    }
}

class Truck extends Vehicle {
    constructor(type, regNumber) {
        super(type, regNumber);
    }
}

// slots > floors > parking lot 

class Slot {
    #isBooked;
    constructor(number, type) {
        this.number = number;
        this.type = type;
        this.#isBooked = false;
    }
    get _isBooked() {
        return this.#isBooked;
    }
    set _isBooked(bool) {
        this.#isBooked = bool;
    }
}

// each parking floor has 3 slots, we need to create this 3 slots and push it to parking floor

class ParkingFloor {
    constructor(floornumber, maxSlots) {
        this.floornumber = floornumber;
        this.parkingSpots = [];
        for (let i = 0; i < maxSlots; i++) {
            if (i == 0) {
                this.parkingSpots.push(new Slot(i, 'Truck'));
            }
            else if (i == 1) {
                this.parkingSpots.push(new Slot(i, 'Bike'));
            }
            else {
                this.parkingSpots.push(new Slot(i, 'Car'));
            }
        }
    }
}

class ParkingLot {
    constructor(numberofFloors) {
        this.numberofFloors = numberofFloors;
        this.floors = [];

        for (let i = 0; i < numberofFloors; i++) {
            this.floors.push(new ParkingFloor(i, numberofFloors));
        }
    }
    // we need to first check if slot is empty (isBooked = false)
    findSlot(type) {
        // going through all the floors,slots and checking if slot is empty
        for (let i = 0; i < this.numberofFloors; i++) {
            for (let slot of this.floors[i].parkingSpots) {
                if (slot.type === type && !slot._isBooked) {
                    return { floornumber: i, found_slot: slot };
                }
            }
        }
    }
    parkVehicle(vehicle) {
        let slot = this.findSlot(vehicle.type);
        if (slot == undefined) {
            return 'Parking Full';
        }
        else {
            slot.found_slot._isBooked = true;
            return slot;
        }
    }
}

// how to connect LLD to frontend
// i worked on parking system
// i want to park vehicle

// input box -> type, regNo -> park button -> onclick -> park

class Ticket {
    constructor(result) {
        ticket.innerHTML = '';
        if (typeof result == 'string') {
            ticket.append(result);
        }
        else {
            ticket.append(`Floor: ${result.floornumber} Slot: ${result.found_slot.number}`);
        }
    }
}

let pl = new ParkingLot(3);

function park() {
    event.preventDefault();

    if (type.value == 'Car') {
        var v = new Car(type.value, number.value);
    }
    else if (type.value == 'Bike') {
        var v = new Bike(type.value, number.value);
    }
    else {
        var v = new Truck(type.value, number.value);
    }
    let t = new Ticket(pl.parkVehicle(v));

}

