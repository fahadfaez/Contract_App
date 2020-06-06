import filtersReducer from "../../reducers/filters"
import moment from 'moment'

    test('Should setup default filter value',()=>{
        const result = filtersReducer(undefined,{type:'@@INIT'})
        expect(result).toEqual({
        text :'',
        sortBy : 'date',
        startDate: undefined,
        endDate :moment().endOf('year')
        })
    })
  

    test('Should set the text filter to the provided text',()=>{
        const text = 'Filter Text'
        const action = {
            type : 'SET_TEXT_FILTER',
            text
        } 
        const result = filtersReducer(undefined,action)
        expect(result.text).toBe(text)})

    test('Should sort by amount',()=>{
        const sortBy = 'amount'
        const action = {
            type : 'SORT_BY_AMOUNT',
            sortBy
        } 
        const result = filtersReducer(undefined,action)
        expect(result.sortBy).toBe(sortBy)})

    test('Should sort by date',()=>{
        const currentState = {
            text :'',
            sortBy : 'date',
            startDate: undefined,
            endDate :undefined
        }
        const action = {
            type : 'SORT_BY_DATE',
        } 
        const result = filtersReducer(currentState,action)
        expect(result.sortBy).toBe('date')}) 


    test('Should set the Start Date',()=>{
        const startDate = moment()
        const action = {
            type : 'SET_START_DATE',
            startDate
        } 
        const result = filtersReducer(undefined,action)
        expect(result.startDate).toBe(startDate)})

    
    test('Should set the End Date',()=>{
        const endDate = moment()
        const action = {
            type : 'SET_END_DATE',
            endDate
        } 
        const result = filtersReducer(undefined,action)
        expect(result.endDate).toBe(endDate)} )   