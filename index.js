const express = require('express');
const app = express();
app.use(express.static('public'))
app.get('/', (req, res)=>{
    res.sendfile('public/front.html')
});
app.listen(3000, console.log('listining at port 3000'));