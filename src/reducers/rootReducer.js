import data from '../facultyall.json';

const initState = {
	allFaculties: data,
	faculties: [],
};

const rootReducer = (state = initState, action) => {
	if (action.type === 'SET_FACULTIES_RESULT') {
		return {
			...state,
			faculties: [...action.res],
		};
	}
	return state;
};

export default rootReducer;
