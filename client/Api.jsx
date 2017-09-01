import request from 'superagent'

const tronaldUrl = 'https://matchilling-tronald-dump-v1.p.mashape.com/random/quote'
const tronaldKey = { 'X-Mashape-Key': 'U83oQr3qttmshXtSRVfVfdYzeDPwp1FSDRWjsneJFbud5yyKty' }

export function getQuote(callback) {
    request
        .get(tronaldUrl)
        .set(tronaldKey)
        .set('Accept', 'application/json')
        .end((err, res) => {
            if (err) {
                callback(err)
            } else {
                callback(null, res.body)
            }
        })
}