import selectContractsTotal from '../../selectors/contracts-total'
import contracts from '../fixtures/contracts'

test('Shoudl return 0 if no contracts',()=> {
    const res = selectContractsTotal([])
    expect(res).toBe(0)
})

test('Shoudl correctly add up single contract',()=> {
    const res = selectContractsTotal([contracts[0]])
    expect(res).toBe(10)
})

test('Shoudl correctly add up single contract',()=> {
    const res = selectContractsTotal(contracts)
    expect(res).toBe(60)
})