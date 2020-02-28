import { faculties } from '../lib/facultyConverter';

const initState = {
	allFaculties: faculties,
	faculties: [],
};

const rootReducer = (state = initState, action) => {
	if (action.type === 'FIND_FACULTY') {
		var faculty = action.faculty;
		var res = state.allFaculties.filter(fac => {
			return (
				fac.empId === faculty.empid ||
				(fac.cabin.includes(faculty.cabin) && faculty.cabin.length > 0) ||
				(fac.name.includes(faculty.name) && faculty.name.length > 0) ||
				(fac.email.includes(faculty.email) && faculty.email.length > 0) ||
				(fac.mobile.includes(faculty.mobile) && faculty.mobile.length > 0) ||
				(fac.designation.includes(faculty.designation) &&
					faculty.designation.length > 0)
			);
		});
		return {
			...state,
			faculties: res,
		};
	}
	return state;
};

export default rootReducer;
