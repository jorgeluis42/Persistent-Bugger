function persistence(num) {
    let snum = num.toString().split('')
    let count = 0
    while( snum.length !== 1) {
    let loop = snum.reduce(function(a,b) {
    return Number(a) * Number(b)
    })
    count ++
    snum = loop.toString().split('')
    console.log(snum)
    }
    return count
    }