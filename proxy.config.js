const Mock = require('mockjs')
module.exports = {
    'GET /api/users': {data: [1, 2], msg: 'success'},
    'POST /api/upload': {rs: false},
    'GET /api/admin': Mock.mock({
        success: true,
        data: [{name: '@Name'}],
    }),
    'GET /api/western': Mock.mock({
        success: true,
        data: Mock.mock({
            'history': [
                {
                    date: Mock.mock('@date'),
                    title: Mock.mock('@title(3, 5)'),
                    description: Mock.mock('@sentence(1, 3)'),
                }, {
                    date: Mock.mock('@date'),
                    title: Mock.mock('@title(3, 5)'),
                    description: Mock.mock('@sentence(1, 3)'),
                }, {
                    date: Mock.mock('@date'),
                    title: Mock.mock('@title(3, 5)'),
                    description: Mock.mock('@sentence(1, 3)'),
                },
            ]
        }),
    }),
};


