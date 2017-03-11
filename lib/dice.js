const { integer } = require('./math.js')



const dice =  {
		roll: (string) => {
			let min = string.slice(0, string.indexOf('d'))
			let max = string.slice(0, string.indexOf('d')) * string.slice(string.indexOf('d') + 1)
			console.log(integer.randomInt(min, max) + 1)
		},
		toDiceNotation: obj =>  obj.count() + 'd' + obj.sides()
}

module.exports.dice = dice
