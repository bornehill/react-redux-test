import * as types from './actions-types';

export function createCourse(course){
    return { type: types.CREATE_COURSE, course};
}