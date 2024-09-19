const express = require('express');
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors())

app.post('/calculate', (req, res) => {
    const flights = req.body.flights;
    console.log(req.body);
    const flightPaths = calculateFlightPath(flights);
    res.send({flightPath: flightPaths});
});

function calculateFlightPath(flights) {
    const map = new Map();
    flights.forEach(flight => {
        if (!map.has(flight[0])) map.set(flight[0], []);
        map.get(flight[0]).push(flight[1]);
    });

    let start = [...map.keys()].find(airport => !Array.from(map.values()).flat().includes(airport));
    let end = flights.flat().find(airport => ![...map.keys()].includes(airport));

    return [start, end];
}

app.listen(8080, () => console.log('Listening on port 8080...'));

module.exports = app;