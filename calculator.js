const expres = require("express");
const bodyParser = require("body-parser");
const app = expres();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/bmiCalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function (req, res) {
  console.log(req.body);
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("The result of the calculation is " + result);
});

app.post("/bmiCalculator", function (req, res) {
  var height = Number(req.body.height);
  var weight = Number(req.body.weight);

  var BMI = weight / (height * height);
  res.send("Your BMI is " + BMI + " Kg/m2");
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
