const dice =  {
		// roll: string => console.log(parseIntstring.slice(string.indexOf('d')) * string.slice(0, string.indexOf('d'))),
		roll: string => console.log(string),
		toDiceNotation: obj =>  obj.count() + 'd' + obj.sides()
}

module.exports.dice = dice
