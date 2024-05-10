const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
	console.log('get products')
	res.json('ok')
})

module.exports = router;