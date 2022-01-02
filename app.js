var express = require('express');
var app = express();
app.get('/', function (req, res) {
  var strP = '<br>';
  var tmpStr =''
  var q = req.query;
  for (var a in q){
    tmpStr = 'Parametr w url: ' + a + ' wartość: ' + q[a];
    console.log(tmpStr);
    strP += '<br>' + tmpStr
  }
  res.send('Metoda premiowania działa... niestety nie możemy zdradzić więcej informacji :) ' +
  '<br><b>Potrawy Wigilijne były idealne -  w pełni odpowiają ideałowi osobowości :)</b>' +
  '<br><b>Dokuczanie jak najbardziej wskazane...</b>' +
  '<br><b>Gwałt TAK X 3 (co najmniej)</b>' +
  strP);


});
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});