const express = require('express');
const router = express.Router();

const DBHelper = require('../utils/DBHelper');
const sql = require('../sqlMap');

// 查询用户
router.post('/selectUser', (req, res) => {
    let sql1 = sql.user.selIsNull;
    let sql2 = sql.user.selIsNull;

    let params = req.body.params;
    let conn = new DBHelper().getConn();
    var state = {};
    conn.query(sql1, [params.loginName], (err, result) => {
        console.log(err, result)
        if (err && err.length != 0) {
            state.isEmpty = false;
        } else if (result && result.length != 0) {
            state.isEmpty = false;
        } else {
            state.isEmpty = true;
        }
        console.log(state, '00000');
    });

    conn.query(sql2, [params.loginName,params.passWord], (err, result) => {
        if (err && err.length != 0) {
            state.s2 = err;
        } else if (result && result.length != 0) {
            state.s2 = result;
            console.log(state, '222222222222');
        } else {
            state.s2 = [];
        }
        res.json(state);
    });

    conn.end();
});

module.exports = router;