const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

const initMongoose = require('./initMongoose');

app.use(cors());

require('./startup/routes')(app); // Move the route setup to a separate file

const main =  async () => {
    await initMongoose()
    app.listen(port, (err) => {
        if (err) console.log("Error in server setup")
        console.log("Server listening on Port", port);
    })
}

main()
