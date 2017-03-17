var jira = require('jira');

module.exports = function(req, res, next) {
  console.log('hola');
  res.send(`jira is loaded? ${!!jira}`);
}
