class User {
  constructor(id = null, username = '', password = '') {
    this.ID = id
    this.username = username
    this.password = password
  }
  getDataAsArray() {
    return [
      this.username,
      this.password
    ]
  }
}

module.exports = {
  User
}