const { db } = require('../../db/db')
const { User } = require('../../models/User')

function getUser(req, res) {
  let user = new User(req.params.id)

  if (req.params.id) {
    db.query('SELECT * FROM users WHERE id=?', [user.ID], (err, result) => {
      if (err) {
        console.error(err)
        res.send("There's some error")
      }

      if (result[0] == undefined) {
        res.send('No data')
      } else {
        res.send(result[0])
      }
    })
  } else {
    db.query('SELECT * FROM users', (err, result) => {
      if (err) {
        res.send("There's some error")
        console.error(err)
      }
      res.send(result)
    })
  }
}

module.exports = getUser