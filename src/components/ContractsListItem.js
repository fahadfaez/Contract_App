import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

const ContractListItem = ({name ,date ,amount, id})=> (
    <div>
        <Link to={`/edit/${id}`}>
        <h3>{name}</h3>
        </Link>       
        
        <p>
        Date : 
        {moment(date).format('DD/MMM/YYYY')}
        - Contract Value : 
        {numeral(amount).format('0,0[.]00 $')}
        </p>

    </div>
)

export default ContractListItem