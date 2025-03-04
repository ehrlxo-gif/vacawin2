const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/gbsw', function (req, res) {
  res.send('소프트웨어');
});
app.get('/gbai', function (req, res) {
  res.send('인공지능');
});
/*app.get('/sound/gitae', (req, res) => {
  const pa = req.params;
  console.log(gitae);

  res.send({userid: gitae});
});*/

/*app.get('/user/:name', (req, res) => {
  const p = req.query;
  console.log(p);

  res.send({'userid': p.name});
});*/
/*
app.get('/sound/:name', (req, res) => {
  const p = req.query;
  console.log(p);

  res.send({'userid': p.name});
});
*/
/*app.get('/sound/:name/:age', (req, res) => {
  const p = req.params;
  const a = req.params.params;

  console.log(p);
  console.log(a);
  res.send({userid: p});
});*/

app.get('/sound/:name', (req, res) => {
  const {name} = req.params;
  console.log(name);
  
  if(name == 'dog') {
    res.json({sound:"멍멍"})
  }else if(name == 'mihee') {
    res.json({sound:"냥냥냥"})
  }else if(name == 'esdras kimkyubin') {
    res.json({sound:"꿀꿀꿀"})
  }else {
    res.json({sound:"몰라라"})
  }
  console.log('경소고');
  console.log('183');
  res.send({userid: p});
});