/**
 * Created by janeluck on 8/5/16.
 */

import reqwest from 'reqwest'



var p = new Promise(function (resolve, reject) {
    reqwest({
        url: '/api/admin',
    }).then(rs=> {
        resolve(rs)
    }, reason=> {
        reject(reason)
    })
})
p.then((rs)=> {
        return reqwest({
            url: '/api/partner',
            data: {
                admin: rs.data.name
            }
        }).then(rs=> {
            // doSomething
            return rs
        }, reason=> {
            // doSomething
            return reason
        })
    })
    .then(result=> {
        return reqwest({
            url: '/api/gender',
            data: {
                partner: result.data.partner
            }

        }).then(rs=> {
            // doSomething
            return rs
        }, reason => {
            // do Something
            return reason
        })
    })
    .then(result=> {
        console.log('result')
    }).catch(error=> {
    console.log(error)
})

