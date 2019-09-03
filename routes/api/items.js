const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Item Model

const Item = require('../../models/Item');
const SECRET = 'macrichau'
// @route GET api/items
// @desc Get All Items
// @access Public
router.get('/', (req, res) => {
  const token = jwt.sign({user_id: 10, expired_at: 99999999}, SECRET)
  res.send(200, { token })
});



router.post('/verify', (req, res) => {
    const token = req.body.token
    try {   
        const verify = jwt.verify(token, SECRET)
        res.send(200, { a: 1 })
    } catch(err) {
        res.send(401, { error: 'not authorized' })
    }
   
    console.log(verify)
   
  });

// @route POST api/items
// @desc Create a Post
// @access Public
router.post('/', (req, res) => {
const newItem = new Item({
    name: req.body.name
});
newItem.save().then(item => res.json(item));
});

// @route DELETE api/items/:id
// @desc Delete an Item
// @access Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
    });

module.exports = router;