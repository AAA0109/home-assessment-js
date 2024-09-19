# Flight Path Tracker API

This is a simple microservice that calculates the flight path for a given list of flights.

## API Endpoint

**POST /calculate**

Accepts a JSON object with a list of flights and returns a JSON object with the sorted flight path.

### **Request**

The request body should be a JSON object with the following format:

```json
{
    "flights": [
        ["IND", "EWR"],
        ["SFO", "ATL"],
        ["GSO", "IND"],
        ["ATL", "GSO"]
    ]
}
```


Each flight is represented as a two-element array where the first element is the source airport code and the second element is the destination airport code.

### **Response**
The response is a JSON object with the following format:

```json
{
    "flightPath": [
        "SFO",
        "EWR"
    ]
}
```

The flightPath contains the first and last airport code of the sorted flight path.

# Running Locally
1. Clone this repository.
2. Run npm install to install dependencies.
3. Run node server.js to start the server.
4. The server will be listening at http://localhost:8080.

# Testing
You can use a tool like Postman to send POST requests to http://localhost:8080/calculate.