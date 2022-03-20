var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

async function predict(img) {
  const mobilenet = require('@tensorflow-models/mobilenet');
  console.log('Loading mobilenet...');
  console.log(img);
  //Load the model
  const model = await mobilenet.load();
  console.log('Successfully loaded model')
  // Make a prediction through the model on our image.
  const prediction = await model.classify(img);
  console.log('Predictions: ');
  console.log(prediction);  
}

router.post('/', function (req, res) {
  //check that req.body is an image
  predict(req.body);
  res.render(pre)
}

module.exports = router;
