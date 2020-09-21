import Mock from 'mockjs';
Mock.mock('/api/user/login', {
    "status": 0,
    "data|20": {
        "id|1-100": 0,
        "username": "@cname",
        "email": "@email",
        "phone|1-10": "@phone",
        "role":"@role",
    },
    "msg": "success"
});