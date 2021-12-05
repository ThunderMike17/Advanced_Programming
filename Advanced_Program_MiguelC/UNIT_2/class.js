class Device {
    constructor(Name, model, NumLeds, location){ 
        this.name = Name;
        this.model = model;
        this.NumLeds = NumLeds;
        this.location = location;
    }
    turnOnLed(){
        console.log(`LED turned on...`);
        }
    };

const David = new Device("MyFirstDevice", "RasperryPi4", 2, 1000);
David.turnOnLed();
     