const express = require('express')
const app = express()
const cors = require('cors')


app.use(cors)


const candies = {
    'snickers':{
       'type': 'chocolate',
       'flavor': 'caramel peanut filling'
    },
    'fererro rocher':{
        'type':'chocolate',
        'flavor':'hazelnut'
    },

    'sour patch kids':{
        'type':'hard candy',
        'flavor':'watermelon'
    },

    'unknown':{
        'age':0,
        'type':'unknown',
        'flavor':'unknown'
    }
}


app.get('/', (request, response)=> {
    response.sendFile(__dirname + '/index.html')

})

app.get('/api/:name',(request,response)=>{
    const candyName = request.params.name.toLowerCase()
    if(candies[candyName]){
    response.json(candies[candyName])
    }
    else{
        response.json(candies['unknown'])
    }
})


app.listen(process.env.PORT || 5500, ()=> {
    console.log(`The server is now running on port! Betta 
    Go Catch It!`)
})


