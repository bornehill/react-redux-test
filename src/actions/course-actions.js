import * as types from './actions-types';
import courseAPI from '../api/MockCourseAPI';

export function createCourse(course){
    return { type: types.CREATE_COURSE, course};
}

export function loadCoursesSuccess(courses){
    return { type: types.LOAD_COURSES_SUCCESS, courses};
}

export function loadCourses() {
    return function(dispatch) {
        return courseAPI.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        });
    };
}