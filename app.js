var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World! on Heroku platform :) ' +
  '<BR>Deploy from Github <b>piotrektekkno/herokuNodeJS </b>');
  console.log('GET');
  console.log('Paramety w url: ');
    var q = req.query;
    for (var a in q){
      console.log('Parametr: ' + a + ' wartość: ' +q[a]  );
    }

});
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});