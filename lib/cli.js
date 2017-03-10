const { integer } = require('./math.js')
const { parseArgs } = require('./parse-args.js')
const { dice } = require('./dice.js')

const args = process.argv

dice.roll(dice.toDiceNotation(parseArgs(args)))
