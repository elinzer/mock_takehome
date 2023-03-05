const { Coffee } = require('../../db/models');
const express = require('express');

const router = express.Router();

router.get('/ping', (req, res) => {
    res.json({ "status": "good" });
});

// get all coffee in order by name
router.get('/', async (req, res) => {

    const coffees = await Coffee.findAll({
        order: [
            ['name', 'ASC']
        ]
    });

    res.json(coffees);
})

// get single coffee by id
router.get('/:id', async (req, res) => {
    const coffee = await Coffee.findByPk(req.params.id);
    res.json(coffee);
})

// post new coffee
router.post('/create', async (req, res) => {
    const { name, year, caffeineContent, caffeinePercentage } = req.body;
    const coffee = await Coffee.create({
        name,
        year,
        caffeineContent,
        caffeinePercentage });

    res.json(coffee);
})


// delete coffee by id
router.delete('/delete/:id', async (req, res) => {
    const coffee = await Coffee.findByPk(req.params.id);
    await coffee.destroy();
    res.json(coffee);
})




module.exports = router;
