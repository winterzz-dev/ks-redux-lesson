import {
    combineReducers,
} from 'redux';
import {CHANGE_MODAL_VISIBLE} from './action-types'

const initialState = {
    visible: false
}

export const modal = (state = initialState, action) => {
    if (action.type === CHANGE_MODAL_VISIBLE) {
        return {
            visible: !state.visible
        }
    }

    if (action.type === 'TEST') {
        return {
            test: 'test'
        }
    }

    return state;
};

export const reducers = combineReducers({
    modal,
});
