import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

const ContractListItem = ({name ,date ,amount, id})=> (
        <Link className="list-item" to={`/edit/${id}`}>
        <div>
             <h3 className="list-item__title">{name}</h3>
             <span className="list-item__sub-title">
             Date : 
             {moment(date).format('DD/MMM/YYYY')}
             </span>
        </div>
        <h3 className="list-item__data">
            {numeral(amount).format('0,0[.]00 $')}
         </h3>
        </Link>       

)

export default ContractListItem