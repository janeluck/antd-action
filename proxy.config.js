const Mock = require('mockjs')
module.exports = {
    'GET /api/users': {data: [1, 2], msg: 'success'},
    'POST /api/upload': Mock.mock({
        rs: true,
        "data|1-10000": 100

    }),


    'GET /api/admin': Mock.mock({
        success: true,
        data: {name: '@Name'},
    }),
    'GET /api/partner': Mock.mock({
        success: true,
        data: {partner: '@Name'},
    }),
    'GET /api/gender': Mock.mock({
        success: true,
        data: {gender: 'female'},
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


