const express = require('express');
const sendMail = require('./controllers/sendMail');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.get('/mail',(req,res)=>{
res.json("Mail is send Successfully in Backend");
})

app.post('/mail',sendMail);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});