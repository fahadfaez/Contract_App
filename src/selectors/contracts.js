import moment from 'moment'


const getVisibleContracts = (contracts , {text, sortBy, startDate, endDate})=>{
    return contracts.filter((contract)=>{
        const date = moment(contract.date)
        const startDateMatch = startDate ? startDate.isSameOrBefore(date,'year') : true
        const endDateMatch = endDate ? endDate.isSameOrAfter(date,'year') : true
        const textMatch = contract.name.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch

    }).sort((a, b)=>{
        if (sortBy === 'date'){
            return a.date < b.date ? 1 : -1
        }else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1
        }
    })
}

export default getVisibleContracts

