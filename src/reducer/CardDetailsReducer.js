import { REHYDRATE } from 'redux-persist/constants';
import merge from 'lodash/merge';
import getInitState from '../initialState/index'
import Constants from '../config/Constants'
let initialState = {
    Planned: getInitState().Planned,
    Started: getInitState().Started,
    Done: getInitState().Done,
}

export default function CardDetailsReducer(state = initialState, action) {
    let newState = Object.assign({}, JSON.parse(JSON.stringify(state)))
    switch (action.type) {
        case REHYDRATE:
            newState = action.payload.CardDetails ?
                merge(newState, action.payload.CardDetails) : newState
            break;
        case Constants.ACTIONS.CREATE_NEW_CARD:
            newState[action.payload.Status].push({...action.payload, id: newState.Planned.length + newState.Started.length + newState.Done.length+1})
            break;
        case Constants.ACTIONS.UPDATE_CARD:{
            newState[action.payload.item.Status] = newState[action.payload.item.Status].filter(element => {
                return element.id !== action.payload.item.id
            });
            newState[action.payload.cardDetails.Status].push({...action.payload.cardDetails, id:action.payload.item.id});
            break;
        }
        default:
            break
    }
    return newState
}