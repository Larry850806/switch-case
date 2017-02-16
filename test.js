const should = require('should')
const switchhh = require('./index')

describe('#when the case is a value', () => {
    it(`should return corresponding value when the case exists`, (done) => {
        let switcher = switchhh({
            'a': 10,
            'b': 20,
            'c': 30,
            10: 100,
        }, 0)

        switcher('a').should.equal(10)
        switcher(10).should.equal(100)

        done()
    })

    it(`should return default value when the case doesn't exist`, (done) => {
        let switcher = switchhh({
            'a': 10,
            'b': 20,
            'c': 30,
            10: 100,
        }, 0)

        switcher('something else').should.equal(0)

        done()
    })

})

describe('#when the case is a function', () => {
    it(`should run corresponding function when the case exists`, (done) => {
        let switcher = switchhh({
            'a': () => 10,
            'b': 20,
            'c': 30,
            10: () => 100
        }, 0)

        switcher('a').should.equal(10)
        switcher(10).should.equal(100)

        done()
    })

    it(`should run default function when the case doesn't exist`, (done) => {
        let switcher = switchhh({
            'a': () => 10,
            'b': 20,
            'c': 30,
            10: () => 100
        }, function(){
            return 0
        })

        switcher('d').should.equal(0)

        done()
    })
})
