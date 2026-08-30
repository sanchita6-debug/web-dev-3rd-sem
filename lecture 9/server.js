const express = require('express');
const app = express();
const port = 3000;

const user=[
    {id:1, name:'John', email:'john@example.com'},
    {id:2, name:'Jane', email:'jane@example.com'},
    {id:3, name:'Bob', email:'bob@example.com'},
    {id:4, name:'Alice', email:'alice@example.com'}
]

app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.get('/about', (req, res) => {
    res.send('About Page');
});
app.get('/users', (req, res) => {
    res.json(user);
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`    );
});