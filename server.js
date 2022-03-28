const express = require('express')
const app = express()
const path = require('path');
const cp = require('child_process');

app.get('/', function (req, res) {
  let pathofindexfile = path.join(__dirname, 'index.html');
  res.sendFile(pathofindexfile)
})

app.get('/details/:pin/:age/:email', function(req, res){
  let pin = req.params.pin;
  let age = req.params.age;
  console.log(age);
  let email = req.params.email;
  console.log(email);
  let arr = cp.execSync(`node script ${pin}`) 
//   console.log(arr+" ")
res.send(arr);

})

app.listen(3000)

console.log("server is running");
