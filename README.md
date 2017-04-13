This is a single page application that communicates with a provided backend service for retrieval of foreign exchange quotes and market orders, and creation and cancellation of market orders.

Running the application
To run in development, clone the repository, run 'npm install' and then 'npm start', navigate to "http://localhost:3000" in the browser.

For a production build, clone the repository, run 'npm install', then 'npm run build', and finally 'node server.js', which serves the app at 'http://localhost:9000'.

The technologies used were:
- React.js for the UI.
- Redux for managing the application state.
- React Router for managing frontend routes.
- React-Bootstrap for general purpose React components (Grid, Button, Form, etc).
- Custom CSS (through Sass) used for minor styling, such as the use of flexbox for easy centering.
