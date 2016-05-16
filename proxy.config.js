module.exports = {
    'GET /api/users': { data: [1, 2] },
    'GET /api/admin': require('mockjs').mock({
        success: true,
        data: [{name:'@Name'}],
    }),
};

