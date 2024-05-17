const express = require('express')
const app =express()

const port = 3000;

app.get('/', (req , res) => {
    res.json({message: 'this a homePage!'})
})

app.get('/users', (req , res) => {
    res.json({message: 'Get All the users'})
})

app.get('/users/:id', (req , res) => {
    const id = req.params.id
    res.json({message: `this is the ${id}`})
})

app.post('/users/', (req , res) => {
    res.json({message: 'create new user'})
})

app.put('/users/:id', (req , res) => {
    const id = req.params.id
    res.json({message: `update this users ${id}`})
})

app.delete('/users/:id', (req , res) => {
    const id = req.params.id
    res.json({message: `Delete is the ${id}`})
})

app.listen(port, () => {
    console.log(`Example app are listening on port ${port}`)
})