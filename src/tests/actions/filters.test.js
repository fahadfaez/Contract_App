import { setTextFilter, setStartDate, setEndDate, sortByAmount, sortByDate } from "../../actions/filters"
import moment from 'moment'

test('Should Action set text filter to a certain text',()=>{
    const action = setTextFilter('serch text')
    expect(action).toEqual({
        type :'SET_TEXT_FILTER',
        text : 'serch text'
    })
})

test('Should Action set text filter to a default text',()=>{
    const action = setTextFilter()
    expect(action).toEqual({
        type :'SET_TEXT_FILTER',
        text : ''
    })
})

test('Should Action set Start Date action object',()=>{
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type:'SET_START_DATE' ,
        startDate : moment(0)

    })
})

test('Should Action set End Date action object',()=>{
    const action = setEndDate (moment(0))
    expect(action).toEqual({
        type:'SET_END_DATE' ,
        endDate : moment(0)

    })
})

test('Should Action set Sort filter to sort by ammount',()=>{
    const action = sortByAmount()
    expect(action).toEqual({
        type :'SORT_BY_AMOUNT',
     })
})

test('Should Action set Sort filter to sort by date',()=>{
    const action = sortByDate()
    expect(action).toEqual({
        type :'SORT_BY_DATE',
     })
})