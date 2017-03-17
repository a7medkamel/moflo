var JiraApi = require('jira').JiraApi;

module.exports = function(req, res, next) {
  console.log('hola');
  res.send(`jira is loaded? ${!!JiraApi}`);
}
