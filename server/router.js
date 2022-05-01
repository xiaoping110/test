const express = require('express')
const router = express.Router()
const { query } = require('./dbserver')

router.get('/info', (req, res) => {
  let sql = "select * from t_admin";
  query(sql, [], result => {
    res.send(result)
  })
})

module.exports = router