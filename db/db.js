const connection = require('./connection')
const db = connection

db.connect(err => {
  if (err) throw err
  console.log('DB CONNECTED')
})

module.exports = {
  db
}