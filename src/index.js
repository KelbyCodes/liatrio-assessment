const app = require('express')();

app.get('/', (request, response) => {

    const timestamp = Math.floor(Date.now() / 1000);

    response.json({
        message: 'Automate all the things!',
        timestamp: timestamp
    })
});

const port = process.env.PORT || 8080;

// Testing by printing used port once app is running properly via node
app.listen(port, () => console.log(`App is listening on http://localhost:${port}`));

