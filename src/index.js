const app = require('express')();

app.get('/', (request, response) => {
    response.json({
        message: 'Automate all the things!',
        timestamp: $now()
    })
});

const port = process.env.PORT || 8080;

// Testing by printing used port once app is running properly via node
app.listen(port, () => console.log(`App is listening on http://localhost:${port}`));