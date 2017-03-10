const parseArgs = (argv) => {
	const [,, ...args ] = argv;
	return {
		count : () => args[1] ? args[1] : 1,
		sides : () => args[0] ? args[0] : 6
	}
}

module.exports.parseArgs = parseArgs;
