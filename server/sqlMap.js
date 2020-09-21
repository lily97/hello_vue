// sql语句
var sqlMap = {
    user: {
        // 添加用户
        add: 'insert into user(name, age) values (?, ?)',
        // 查询用户是否存在
        selIsNull: 'select * from user where loginName = ?',
        // 判断账号密码是否正确
        selLogin:'select * from user where loginName=? and passWord=?'
    }
}

module.exports = sqlMap;