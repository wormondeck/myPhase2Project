# myPhase2Project "Showroom"

This React.js application allows users to browse through a collection of car images and view details about each car. Users can also add new cars to the collection using a form that sends a POST request to the server.

## Features

- Browse a collection of car images.
- View details about each car upon clicking on it.
- Add new cars to the collection using a form.
- Utilizes a JSON server (`json-server`) to store and retrieve car data.

## Prerequisites

Before running the app, make sure you have the following installed:

- Node.js: [Download Node.js](https://nodejs.org/)
- `json-server`: Install globally using `npm install -g json-server`

## Running the App

To run the app, follow these steps:

1. Start the JSON server:

This command will start the JSON server and watch the `db.json` file for changes.

2. Start the React app:

npm install
npm start

This will install dependencies and start the development server.

3. Open your browser and navigate to `http://localhost:3000` to view the app.

## Adding New Cars

To add a new car to the collection, follow these steps:

1. Fill out the form with details about the car (e.g., name, color, price, image URL).
2. Submit the form.
3. The new car will be added to the collection and displayed in the app.

## Technologies Used

- React.js
- JSON Server
- HTML/CSS
