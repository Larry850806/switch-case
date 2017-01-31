const should = require('should')
const switchCase = require('./index')

describe('#when the case is a value', () => {
    it(`should return correct value when the case exists`, (done) => {
        let val = switchCase({
            'a': 10,
            'b': 20,
            'c': 30,
        }, 0)('a')
        val.should.equal(10)
        done()
    })

    it(`should return default value when the case doesn't exist`, (done) => {
        let val = switchCase({
            'a': 10,
            'b': 20,
            'c': 30,
        }, 0)('d')
        val.should.equal(0)
        done()
    })

})

describe('#when the case is a function', () => {
    it(`should run correct function when the case exists`, (done) => {
        let val = switchCase({
            'a': () => 10,
            'b': 20,
            'c': 30,
        }, 0)('a')
        val.should.equal(10)
        done()
    })

    it(`should run default function when the case doesn't exist`, (done) => {
        let val = switchCase({
            'a': 10,
            'b': 20,
            'c': 30,
        }, function(){
            return 0
        })('d')
        val.should.equal(0)
        done()
    })
})