import React from 'react';
import { shallow } from 'enzyme';
import { AddContract } from '../../components/AddContract';
import contracts from '../fixtures/contracts';

let startAddContract, history, wrapper;

beforeEach(() => {
  startAddContract = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddContract startAddContract={startAddContract} history={history} />);
});

test('should render AddContract Page correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

/* test('should handle onSubmit', () => {
  wrapper.find('ContractForm').prop('onSubmit')(contracts[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startAddContract).toHaveBeenLastCalledWith(contracts[1]);
});
 */