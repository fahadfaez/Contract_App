import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'



export default class ContractForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name : props.contract ? props.contract.name : '',
      amount :props.contract ? (props.contract.amount).toString() : '',
      received : 0,
      date : props.contract ? moment(props.contract.date) : moment(),
      focused : false,
      error:''
  }

  }  
    
    onNameChange = (e)=>{
      const name = e.target.value
      this.setState (()=> ({name}))
    }
    onAmountChange = (e)=>{
       const amount = e.target.value
       if(!amount || amount.match (/^\d{1,}(\.\d{0,2})?$/)){
          this.setState(()=>({ amount }))
         } 
    }
    onDateChange = (date)=> {
      if (date){ 
        this.setState(()=>({date}))
      }
            
    }
    onFocusChange=({focused})=>{
      this.setState(()=>({focused}))
    }
    onSubmit =(e)=> {
      e.preventDefault()
      if (!this.state.name || !this.state.amount){
        this.setState(()=>({ error : 'Please Provide Contract Name & Contract Amount'}))
      }else {
        this.setState(()=>({error : ''}))
        console.log('submitted')
        this.props.onSubmit({
          name : this.state.name,
          amount :parseFloat(this.state.amount,10),
          date:this.state.date.valueOf()

        })
      }
      
    }

    render() {
        return (
                <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                  <label htmlFor="contractName" >Contract Name :  </label>
                  <input
                    type="text"
                    id = "contractName"
                    className="text-input"
                    placeholder="Contract Name"
                    autoFocus
                    value = {this.state.name}
                    onChange = {this.onNameChange}          
                 />
                  <input
                    type="text"
                    placeholder ="Contract Value"
                    className="text-input"
                    value ={this.state.amount}
                    onChange ={this.onAmountChange}
                 />
                 <SingleDatePicker
                    date={this.state.date}
                    onDateChange={this.onDateChange} // PropTypes.func.isRequired
                    focused={this.state.focused} // PropTypes.bool
                    onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
                    numberOfMonths={1}
                    isOutsideRange={()=> false}
                    //id="your_unique_id" // PropTypes.string.isRequired,
                  />
                 <input
                    type="number"
                    placeholder = "Received"
                    className="text-input"
                 
                 />
                 <div>
                   <button className="button" >Save Contract</button>
                 </div>
                 
                </form>
        )
    }
}