import React from 'react'
import { Link } from 'react-router-dom'


const ContractListItem = ({name ,date ,amount, id})=> (
    <div>
        <Link to={`/edit/${id}`}>
        <h3>{name}</h3>
        </Link>       
        
        <p2>Date : {date} - Contract Value : {amount} $</p2>

    </div>
)

export default ContractListItem