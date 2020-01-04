const { db } = require('../../db/db')
const { User } = require('../../models/User')

function createUser(req, res) {
  let user = new User(null, req.body.username, req.body.password)

  db.query('INSERT INTO users (ID, username, password) VALUES(null, ?)', [user.getDataAsArray()], (err, result) => {
    if (err) {
      console.error(err)
      res.send("There's some error")
    }
    res.send(result)
  })
}

module.exports = createUser