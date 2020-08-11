const Noble = require("noble");
const BeaconScanner = require("node-beacon-scanner");
var express = require("express");
var cors = require("cors");

const dbUuid = "FFFFFFFF-1234-AAAA-1A2B-A1B2C3D4E5F6"

var scanner = new BeaconScanner();

//init
var dragonBalls = [];
for (let i = 1; i <= 7; i++) {
    dragonBalls.push(
        {
            id: i, 
            Name: i + " Star Dragon Ball",
            Power: null,
            LastUpdate: null,
            LastReadings: []
        }
    );
}

scanner.onadvertisement = (advertisement) => {
    if (advertisement["iBeacon"]["uuid"] == dbUuid)
    {
        var index = advertisement["iBeacon"]["major"];
        var power = advertisement["rssi"];
        dragonBalls[index-1].Power = power;
        dragonBalls[index-1].LastUpdate = Date.now();
        dragonBalls[index-1].LastReadings.push(power);
        while (dragonBalls[index-1].LastReadings.length > 20)
        {
            dragonBalls[index-1].LastReadings.shift();
        }
    }
}

scanner.startScan().then(() => {
        console.log("Scanning for BLE devices...");
}).catch((error) => {
        console.error(error);
});

//set up api

var app = express();

app.use(cors());

app.listen(3000, () => {
    console.log("Server running on port 3000");
})

app.get("/dragon-radar", (req, res, next) => {
    var dbDto = [];
    dragonBalls.map((db) => {
        if(db.LastUpdate != null && (Date.now() - db.LastUpdate) / 1000 < 15){
            dbDto.push(db);
        }
    })
    
    res.json(dbDto);
});