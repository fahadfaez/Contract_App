export default (contracts) => {
  return  contracts
    .map((contract)=> contract.amount )
    .reduce((sum,value)=> sum+value,0)
 }