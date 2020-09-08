const yearsOfStudy = 3

function experience(years) {
	if (years <= 1) {
		return 'iniciante'
	} else if (years > 1 && years <= 3) {
		return 'Intermediario'
	} else if (years > 3 && years <= 6.9) {
		return 'Avançado'
	} else if (years >= 7) {
		return 'Jedi Master'
	}
}

console.log(experience(7))