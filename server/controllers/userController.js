const { redirect } = require("express/lib/response");
const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 100,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

exports.login = (req, res) => {
  res.render("login");
};

exports.users = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;

    connection.query("SELECT * FROM user", (err, rows) => {
      connection.release();
      if (err) {
        console.log(err);
      } else {
        res.render("home", { rows });
      }
    });
  });
};

exports.find = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    let searchTerm = req.body.search;
    connection.query(
      "SELECT * FROM user WHERE first_name LIKE ? OR last_name LIKE ?",
      ["%" + searchTerm + "%", "%" + searchTerm + "%"],
      (err, rows) => {
        connection.release();
        if (err) {
          console.log(err);
        } else {
          res.render("home", { rows });
        }
      }
    );
  });
};

exports.form = (req, res) => {
  res.render("add-user");
};

exports.create = (req, res) => {
  const { first_name, last_name, email, phone, comments } = req.body;

  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(
      "INSERT INTO user SET first_name = ?, last_name = ?,phone = ?,email = ?,comments = ?",
      [first_name, last_name, phone, email, comments],
      (err, rows) => {
        connection.release();
        if (err) {
          console.log(err);
        } else {
          res.render("add-user", { alert: "User saved successfully!" });
        }
      }
    );
  });
};

exports.edit = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;

    connection.query(
      "SELECT * FROM user WHERE id=?",
      [req.params.id],
      (err, rows) => {
        connection.release();
        if (err) {
          console.log(err);
        } else {
          res.render("edit-user", { rows });
        }
      }
    );
  });
};

exports.update = (req, res) => {
  const { first_name, last_name, email, phone, comments } = req.body;

  pool.getConnection((err, connection) => {
    if (err) throw err;
    let searchTerm = req.body.search;
    connection.query(
      "UPDATE user SET first_name = ?, last_name = ?,phone = ?,email = ?,comments = ? WHERE id=?",
      [first_name, last_name, phone, email, comments, req.params.id],
      (err, rows) => {
        connection.release();
        if (err) {
          console.log(err);
        } else {
          connection.query("SELECT * FROM user", (err, rows) => {
            res.render("home", { alert: "User updated successfully!", rows });
          });
        }
      }
    );
  });
};

exports.delete = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    let searchTerm = req.body.search;
    connection.query(
      "DELETE FROM user WHERE id = ?",
      //"UPDATE user SET active = ? WHERE id = ?",
      //['removed',req.params.id],
      [req.params.id],
      (err, rows) => {
        connection.release();
        if (err) {
          console.log(err);
        } else {
          //redirect('/');
          connection.query("SELECT * FROM user", (err, rows) => {
            res.render("home", { alert: "User deleted successfully!", rows });
          });
        }
      }
    );
  });
};

exports.signin = (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  if (username && password) {
    pool.getConnection((err, connection) => {
      if (err) throw err;
      connection.query(
        "SELECT * FROM users WHERE username = ? AND password = ?",
        [username, password],
        (err, results, fields) => {
          connection.release();
          if (err) throw err;

          if (results.length > 0) {
            req.session.loggedin = true;
            req.session.username = username;
            res.redirect("users");
          } else {
            res.render("login", {
              alert: "Wrong username and/or password!",
            });
          }
        }
      );
    });
  } else {
    res.render("login", { alert: "Please enter Username and Password!" });
  }
};

exports.logout = (req, res) => {
  req.session.destroy(() => {
    req.logout();
    res.redirect("/"); //Inside a callback… bulletproof!
  });
};
