var db = require('../models');
var express = require('express');
var router = express.Router();

// Displays all equiptment available from the mySQL db
router.get('/', function (req, res) {
  db.Equiptment.findAll({
  }).then(function (equiptment_data) {
    res.render('index', {
      equiptment_data
    });
  })
})

// Packs equiptment by updating the packed boolean to true in the mySQL db
router.post('/equiptment/:id', function (req, res) {
  console.log(req.params.id);
  db.Equiptment.update(
    {
      packed: true,
    },
    {
      where: {
        id: req.params.id
      }
    }).then(function () {
      res.redirect('/');
    });
});

// Add a new equiptment to the mySQL db
router.post('/add', function (req, res) {
  console.log(req.body.equiptment_name + " equiptment added to database!");
  db.Equiptment.create({
    equiptment_name: req.body.equiptment_name,
    packed: 0
  }).then(function () {
    res.redirect('/');
  });
});

// Deletes all equiptment in the mySQL db
router.post('/delete', function (req, res) {
  db.Equiptment.destroy({
    where: {}
  }).then(function () {
    res.redirect('/');
  });
});

module.exports = router;