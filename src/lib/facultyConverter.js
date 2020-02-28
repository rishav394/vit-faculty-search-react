var courses = require('../data/allocationReport.json');
var faculties = require('../data/faculties.json');

const load = json => {
	var p = JSON.stringify(json);

	p = p
		.replace(/\n/g, '')
		.replace(/\r/g, ' ')
		.replace(/\\n/g, '')
		.replace(/\\r/g, ' ')
		.replace(/\s{2}/g, ' ')
		.replace(/DR\.\s*/gi, '')
		.replace(/D\s?R\.\s*/gi, '');

	p = JSON.parse(p);
	return p;
};

courses = load(courses);
faculties = load(faculties);
var anomaly = [];

const findFaculty = (facultyName, faculties) => {
	var answer = faculties.find(faculty =>
		faculty['name'].trim().includes(facultyName.trim()),
	);
	try {
		return answer['empId'];
	} catch (error) {
		anomaly.push(facultyName);
		return 0;
	}
};

courses = courses.filter(course => {
	course['EMPID'] = findFaculty(course['FACULTY'], faculties);
	return course['EMPID'] !== 0;
});

console.log('Total anomaly =', [...new Set(anomaly)].length);

const courseOf = facultyId => {
	return courses.filter(x => x['EMPID'] === facultyId);
};

faculties.forEach(faculty => {
	var facultyCourses = courseOf(faculty['empId']);
	if (facultyCourses.length === 0) {
		faculty['whenwherewhat'] = [];
	} else {
		facultyCourses = facultyCourses.filter(
			fc => fc['SLOT'] !== 'NIL' && fc['VENUE'] !== 'NIL',
		);
		var newFacultyCourses = [];
		facultyCourses.forEach(fc => {
			var slots = fc['SLOT'].split('+');
			slots.forEach(slot => {
				var base = {
					SLOT: slot,
					VENUE: fc['VENUE'],
					COURSECODE: fc['CODE'],
					COURSETITLE: fc['TITLE'],
				};
				newFacultyCourses.push(base);
			});
		});
		faculty['whenwherewhat'] = newFacultyCourses;
	}
});

module.exports = { faculties };
