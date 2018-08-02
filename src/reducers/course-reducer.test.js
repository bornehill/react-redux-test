import expect from 'expect';
import * as courseActions from '../actions/course-actions';
import courseReducer from './course-reducer';

describe('Course Reducer', () => {
    it('should add course when passed CREATE_COURSE_SUCCESS action', () => {
        const initialState = [
            {title: 'A'},
            {title: 'B'}
        ];

        const newCourse = {title: 'C'};

        const action = courseActions.createCourseSuccess(newCourse);

        const newState = courseReducer(initialState, action);

        expect(newState.length).toEqual(3);
        expect(newState[2].title).toEqual('C');
    });

    it('should add course when passed UPDATE_COURSE_SUCCESS action', () => {
        const initialState = [
            {id: 'A', title: 'A'},
            {id: 'B', title: 'B'},
            {id: 'C', title: 'C'}
        ];

        const course = {id: 'B', title: 'New Title'};

        const action = courseActions.updateCourseSuccess(course);

        const newState = courseReducer(initialState, action);
        const updatedCourse = newState.find(a => a.id == course.id);
        const untouchedCourse = newState.find(a => a.id == 'A');

        expect(newState.length).toEqual(3);
        expect(updatedCourse.title).toEqual('New Title');
        expect(untouchedCourse.title).toEqual('A');
    });    
});