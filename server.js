// Bring in express
const express = require('express');

// Create app variable and initialise Express
const app = express();


// Add route
app.get('/api/customers', (req, res) => {
  // This is just a 'starter-pack'
  // Creating hard-coded array here
  // In real life this would come from a database
  const customers = [
    { id: 1, firstName: 'John', lastName: 'Doe' },
    { id: 2, firstName: 'Steve', lastName: 'Smith' },
    { id: 3, firstName: 'Mary', lastName: 'Swanson' },
  ];

  res.json(customers);
});

// Create a port variable to listen on (port:5000)
// Don't use 3000 for API, 3000 is default for create-react-app
const port = 5000;

app.listen(port, () => `Server started on port ${port}`);