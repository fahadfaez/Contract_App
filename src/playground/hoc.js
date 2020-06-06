console.log('fahad')
import React from 'react'
import ReactDOM from 'react-dom'


const Info = (props)=>(
    <div>
        <h1>Info</h1>
        <p>the info is {props.info}</p>
    
    </div>
)

const withAdminWarning =(WrappedComponent)=>{
    return(props) => (
        <div>
        <p>This is Private INFO!</p>
        <WrappedComponent {...props} />
        </div>
    )

}

const requireAuth = (WrappedComponent)=>{ 
    return (props)=> (
        <div>
        
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuth(Info)

ReactDOM.render(<AdminInfo info='This is the info detailes' />,document.getElementById('app'))