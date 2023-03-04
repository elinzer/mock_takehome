const router = require('express').Router();

const coffeeRouter = require('./coffee');

router.use('/coffee', coffeeRouter);

module.exports = router;
