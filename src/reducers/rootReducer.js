import faculties from '../lib/facultyConverter';

const initState = {
	allFaculties: faculties,
	faculties: [],
};

const rootReducer = (state = initState, action) => {
	if (action.type === 'FIND_FACULTY') {
		var faculty = action.faculty;
		var keys = Object.keys(faculty).filter(key => {
			return faculty[key].length !== 0;
		});

		var res = state.allFaculties.filter(fac => {
			var temp = true;
			keys.forEach(key => {
				if (!fac[key].includes(faculty[key])) temp = false;
			});
			return temp;
		});
		return {
			...state,
			faculties: res,
		};
	}
	return state;
};

export default rootReducer;
