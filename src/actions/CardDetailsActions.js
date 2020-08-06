import Constants from '../config/Constants'

export default {
    createNewCard: (cardDetails) => dispatch => {
        return dispatch({
            type: Constants.ACTIONS.CREATE_NEW_CARD, payload: cardDetails
        })
    },
    updateCardDetails: (item,cardDetails) => dispatch => {
        return dispatch({
            type: Constants.ACTIONS.UPDATE_CARD, payload: { item, cardDetails }
        })
    }
}