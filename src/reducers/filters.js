import moment from 'moment'


// create Filters Reducer
const filtersReducerDefaultState = {
    text :'',
    sortBy : 'date',
    startDate: undefined,// default value for the start date filter (i set it to undefined to show all the contracts from the begining)
    endDate :moment().endOf('year') // default end date value , i set it to the end of the current year .
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER' :
            return {
                ...state,
                text : action.text
            }
        case 'SORT_BY_AMOUNT':
            return{
                ...state,
                sortBy : 'amount'

            }
        case 'SORT_BY_DATE' :
            return {
                ...state,
                sortBy : 'date'

            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate : action.startDate

            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate : action.endDate
                
            }       
        default :
            return state
    }
}

export default filtersReducer