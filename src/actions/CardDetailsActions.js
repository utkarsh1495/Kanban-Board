import Constants from '../config/Constants'

export default {
    createNewCard: (cardDetails) => {
        return {
            type: Constants.ACTIONS.CREATE_NEW_CARD, payload: cardDetails
        }
    },
    updateCardDetails: (req) => dispatch => {
        return dispatch({
            type: Constants.ACTIONS.UPDATE_CARD
        })
    }
}