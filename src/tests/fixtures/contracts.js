import moment from'moment'


export default [{
    
    id:'1',
    name:'first contract',
    date : 0,
    amount :10,
    received : [],
    left : 0 
},{
    id:'2',
    name:'Second contract',
    date : moment(0).subtract(4,'years').valueOf(),
    amount : 20,
    received : [],
    left : 0 
},{
    id:'3',
    name:'Third contract',
    date : moment(0).add(4,'years').valueOf(),
    amount :30,
    received : [],
    left : 0
}
]
