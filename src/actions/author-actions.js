import * as types from './actions-types';
import authorAPI from '../api/MockAuthorAPI';

export function loadAuthorsSuccess(authors){
    return { type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors() {
    return function(dispatch) {
        return authorAPI.getAllAuthors().then(authors => {
            dispatch(loadAuthorsSuccess(authors));
        }).catch(error => {
            throw(error);
        });
    };
}