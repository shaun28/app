var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/ui/index.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/A sliderjs.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'A sliderjs.css'));
});

app.get('/ui/add services.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'add services.js'));
});

app.get('/ui/bb disablepage.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bb disablepage.js'));
});

app.get('/ui/bb emplos.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bb emplos.js'));
});

app.get('/ui/bb general.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bb general.js'));
});

app.get('/ui/customselect.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'customselect.js'));
});

app.get('/ui/datecss.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'datecss.js'));
});

app.get('/ui/enfeedback.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'enfeedback.css'));
});

app.get('/ui/feedback.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'feedback.js'));
});

app.get('/ui/font awesome.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'font awesome.css'));
});

app.get('/ui/function init.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'function init.js'));
});

app.get('/ui/jq.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'jq.js'));
});

app.get('/ui/jqmin.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'jqmin.js'));
});

app.get('/ui/jquery min pagespeed.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'jquery min pagespeed.js'));
});

app.get('/ui/jquery slides flexselect.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'jquery slides flexselect.js'));
});

app.get('/ui/jquery slides min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'jquery slides min.js'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/myles compaign java.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'myles compaign java.css'));
});

app.get('/ui/myles compaign scripts 1.4.3.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'myles compaign scripts 1.4.3.js'));
});

app.get('/ui/myles compaign scripts.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'myles compaign scripts.js'));
});

app.get('/ui/myles compaign style new theme.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'myles compaign style new theme.css'));
});

app.get('/ui/myles compaign style new.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'myles compaign style new.css'));
});

app.get('/ui/myles compaign stylesheets.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'myles compaign stylesheets.css'));
});

app.get('/ui/myles compaign.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'myles compaign.css'));
});

app.get('/ui/newjs datatimepicker.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'newjs datatimepicker.js'));
});

app.get('/ui/newjs.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'newjs.js'));
});

app.get('/ui/placeholders.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'placeholders.js'));
});

app.get('/ui/promo.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'priomo.js'));
});

app.get('/ui/slides.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'slides.js'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/tabbinf.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'tabbinf.js'));
});

app.get('/ui/tooltip.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'tooltop.js'));
});

app.get('/ui/validation.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'validation.js'));
});

app.get('/ui/vg dicount.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'vg dicount.js'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
