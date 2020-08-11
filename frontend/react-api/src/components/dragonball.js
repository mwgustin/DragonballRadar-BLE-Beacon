import React from 'react'




const Dragonballs = ({ dragonballs }) => {
    const arrAvg = arr => arr.reduce((a,b) => a+b,0)/arr.length

    const friendlyName = val => {
        var resp;
        if(val >= -55)
            resp = 'Very Close';
        else if (val >= -65 && val < -55)
            resp = 'Near';
        else if (val >= -75 && val < -65)
            resp = 'Intermediate';
        else if (val >= -85 && val < -75)
            resp = 'Far';
        else if (val < -85)
            resp = 'Very Far';
        return resp;
    }

    return (
        <div className="dragon-balls">
            <center><h1>Dragon Radar</h1></center>
            {dragonballs.map((db) => (
                <div key={db.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">{db.Name}</h5>
                        <h6 className="card-subtitle mb2 text-muted">Average: {arrAvg(db.LastReadings)} - {friendlyName(arrAvg(db.LastReadings))}</h6>
                        {/* <p className="card-text">blahblah</p> */}
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Dragonballs;
