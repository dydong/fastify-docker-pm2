const tap = require('tap')
const request = require('request')

tap.test('GET `/` route', t => {
    t.plan(4)

    request({
        method: 'GET',
        url: 'http://localhost:9000'
    }, (err, response, body) => {
        t.error(err)
        t.strictEqual(response.statusCode, 200)
        t.strictEqual(response.headers['content-type'], 'application/json; charset=utf-8')
        t.deepEqual(JSON.parse(body), { hello: 'My World!!' })
    })
})