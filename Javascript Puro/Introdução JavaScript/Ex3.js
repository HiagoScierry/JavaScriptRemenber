const skills = ['Javascript', 'ReactJS', 'React Native']

function verifyHability(hability) {
	const verify = skills.filter((index) => {
		if (hability === index) {
			return index
		}
	})

	if (verify.length > 0) {
		return true
	} else {
		return false
	}
}

console.log(verifyHability('Javascript'))
