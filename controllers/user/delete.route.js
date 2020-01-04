const { db } = require('../../db/db')
const { User } = require('../../models/User')

function deleteUser(req, res) {
  let user = new User(req.params.id)

  db.query('DELETE FROM users WHERE id=?', [user.ID], (err, result) => {
    if (err) {
      console.error(err)
      res.send("There's some error")
    }
    res.send(result)
  })
}

module.exports = deleteUser