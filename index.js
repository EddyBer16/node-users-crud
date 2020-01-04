const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/user/', require('./controllers/user/routes'))

app.listen(PORT, () => {
  console.log('SERVER ON PORT', PORT)
})