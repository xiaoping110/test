const mysql = require('mysql')
/**
 * 创建连接池
 */
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "127.0.0.1",
  user: "root",
  password: "123456",
  port: 3306,
  database: 'yeb'
})

const query = (sql, params, callback) => {
  pool.getConnection((err, conn) => {
    if (err) {
      console.log("连接Mysql失败！！！");
      pool.releaseConnection();
    }
    conn.query(sql, params, (err, result, fields) => {
      if (err) {
        conn.release();
        console.log("执行sql失败！！！", err);
        return;
      }
      callback(result, fields);
      conn.release();
    })
  })
}

module.exports = {
  query
}
