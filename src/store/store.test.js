import expect from 'expect';
import { createStore } from 'redux';
import rootReducer  from '../reducers';
import initialState  from '../reducers/initialState';
import * as courseActions from '../actions/course-actions';

describe('Store', function() {
    it('Should handle creating courses', function() {
        const store = createStore(rootReducer, initialState);
        const course = {title: 'Borne Hill'};

        const action = courseActions.createCourseSuccess(course);
        store.dispatch(action);

        const actual = store.getState().courses[0];
        const expected = {title: 'Borne Hill'};

        expect(actual).toEqual(expected);
    });
});