const express = require('express')
const app = express();

const port = process.env.PORT || 2021;

app.use(express.static('src'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html')
  })

app.listen(port, ()=>{
    console.log('Server started on port ' + port)
})