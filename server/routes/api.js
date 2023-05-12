const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json('Hello world from express!');
})

module.exports = router;