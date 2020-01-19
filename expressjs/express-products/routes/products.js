var express = require('express');
var router = express.Router();
const fs = require('fs');
let products;

fs.readFile('products.json', 'utf-8', (err,data) => {
  if(err)
    throw err;
  products= JSON.parse(data);
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(products);
});

router.get('/:id([A-Z]{3}-[0-9]{2})',(req,res,next) => {
  res.json(products.products.filter(products => products.id == req.params.id));
});
router.delete('/:id([A-Z]{3}-[0-9]{2})',(req,res,next) => {
  let newProducts = (products.products.filter(products => products.id != req.params.id));
  fs.writeFile('products.json',JSON.stringify(newProducts), () => {
    res.send(`Product met id ${req.params.id} is verwijderd`)
  })
});

module.exports = router;
