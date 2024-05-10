const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

const initMongoose = require('./initMongoose');


app.use(cors());
app.use(express.json());

app.get('/products', async (req, res) => {
	console.log('get products')
	res.json('ok')
})

const main =  async () => {
    await initMongoose()
    app.listen(port, (err) => {
        if (err) console.log("Error in server setup")
        console.log("Server listening on Port", port);
    })
}

main()
