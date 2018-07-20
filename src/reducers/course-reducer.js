import * as types from '../actions/actions-types';

export default function createCourse(state = [], action)
{
    switch(action.type)
    {
        case types.CREATE_COURSE:
            return [...state, Object.assign({}, action.course)];
        default:
            return state;
    }
}