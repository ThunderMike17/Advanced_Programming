const device = {
    sensorModel: "HC04",
    count: 0,
    date: new Date(),
};

console.log(device.date);
console.log(device.date.getFullYear(), typeof device);
const deviceJSON = JSON.stringify(device);
console.log(deviceJSON, typeof deviceJASON);

const myJson = '{"name": "Miguel", "edad": "20", "friends": ["Alex", "Fred"], "isManager": false}';
console.log(myJson, typeof myJson);
const myObj = JSON.parse(myJson);
console.log(myObj.name);