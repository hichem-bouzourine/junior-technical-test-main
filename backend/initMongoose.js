const mongoose = require("mongoose");

module.exports = () => {
	try {
		mongoose.set("strictQuery", false);
		return mongoose
        .connect(`mongodb+srv://gametester:WIIihPDPKoeiGZCA@local-game-tester.0h9hfm2.mongodb.net/?retryWrites=true&w=majority&appName=local-game-tester`)
        .then(() => console.log("Connected to MongoDB"))
	} catch (error) {
		console.log("Connection with db failed.");
	}
};
