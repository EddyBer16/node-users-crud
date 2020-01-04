const { db } = require('../../db/db')
const { User } = require('../../models/User')

function updateUser(req, res) {
  let user = new User(null, req.body.username, req.body.password)

  db.query('UPDATE users SET username=?, password=? WHERE ID=?', [user.username, user.password, req.params.id], (err, result) => {
    if (err) {
      console.log(err)
      res.send("There's some error")
    }
    res.send(result)
  })
}

module.exports = updateUser