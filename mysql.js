const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
const query = "SELECT * from contact";

var connection = mysql.createConnection(
  "mysql://mat:root@localhost/mysqlreact?debug=true&charset=BIG5_CHINESE_CI&timezone=-0700"
);

connection.connect(err => {
  if (err) {
    return err;
  }
});

app.use(cors());

app.get("/show", (req, res) => {
  connection.query(query, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: results
      });
    }
  });
});

app.get("/insert", (req, res) => {
  const insert_query =
    "INSERT into contact (id,name,phone) values(4,'gvyhvjh','646574684')";
  connection.query(insert_query, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send("suceeded");
    }
  });
});
app.get("/update", (req, res) => {
  const updater =
    "UPDATE contact  SET  id=6, phone ='123654546' where name = 'kk'";

  connection.query(updater, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send("updated");
    }
  });
});

app.get("/delete", (req, res) => {
  const delete_query = "DELETE from contact WHERE phone = '123654546';";

  connection.query(delete_query, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send("deleted...!");
    }
  });
});

app.listen(3000, () => {
  //console.log({ port });
});
