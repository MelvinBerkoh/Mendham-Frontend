const express = require('express');
const app = express();



const PORT = process.env.PORT || 808;

//Middleware
app.use(express.static('public'))
app.use(express.json())


app.get('/form/clerk', (req,res) =>{
  // clerk
  res.sendFile(__dirname + '/public/Clerk.html')
})

//dpw

app.get('/', (req,res) =>{
  res.sendFile(__dirname + '/public/dpw.html')
})

// fire prevention  to display 
app.get('/form/FirePrevention', (req,res) =>{
  res.sendFile(__dirname + '/public/FirePrevention.html')
})

// police department 
app.get('/form/PoliceDepartment', (req,res) =>{
  res.sendFile(__dirname + '/public/PoliceDepartment.html')
})

// board of health
app.get('/form/BoardOfHealth', (req,res) =>{
  res.sendFile(__dirname + '/public/BoardOfHealth.html')
})

// construction
app.get('/form/Construction', (req,res) =>{
  res.sendFile(__dirname + '/public/Construction.html')
})


app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`)
})


