const { integer } = require('./math.js')

const dice =  {
		roll: string => console.log(integer.randomInt(string.slice('d', 1), (string.slice(0, string.indexOf('d')) * string.slice(string.indexOf('d') + 1)))),
		toDiceNotation: obj =>  obj.count() + 'd' + obj.sides()
}

module.exports.dice = dice
