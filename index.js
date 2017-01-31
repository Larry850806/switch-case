function switchCase(cases, defaultValue){
    return function(variable){
        for(let prop in cases){
            if(prop === variable){
                if(typeof cases[prop] === 'function'){
                    return cases[prop]()
                } else {
                    return cases[prop]
                }
            }
        }
        if(typeof defaultValue === 'function'){
            return defaultValue()
        } else {
            return defaultValue
        }
    }
}

module.exports = switchCase
