import { REHYDRATE } from 'redux-persist/constants';
import merge from 'lodash/merge';
import getInitState from '../initialState/index'
import Constants from '../config/Constants'
let initialState = {
    Planned: getInitState().Planned,
    Started: getInitState().Started,
    Done: getInitState().Done,
    // Planned: [],
    // Started: [],
    // Done: []
}

export default function CardDetailsReducer(state = initialState, action) {
    let newState = Object.assign({}, JSON.parse(JSON.stringify(state)))
    switch (action.type) {
        case REHYDRATE:
            newState = action.payload.CardDetails ?
                merge(newState, action.payload.CardDetails) : newState
            break;
        case Constants.ACTIONS.CREATE_NEW_CARD:
            newState[action.payload.Status].push(action.payload)
            break;
        default:
            break
    }
    return newState
}