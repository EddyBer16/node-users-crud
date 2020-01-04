const express = require('express')
const router = express.Router()

router.get('/', require('./get.route'))
router.get('/:id', require('./get.route'))
router.post('/', require('./create.route'))
router.delete('/:id', require('./delete.route'))
router.put('/:id', require('./update.route'))

module.exports = router