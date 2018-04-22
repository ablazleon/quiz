const {model} = require('..models');

exports.index = (req, res, next) => {
  models.quizzes.findAll()
  .then(quizzes => {
      res.render("quizzes", {quizzes})
    })
    .catch(error => next(error));
};