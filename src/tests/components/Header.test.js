import React from'react'
import Header from '../../components/Header'
import { shallow } from 'enzyme'





test('Should render Header Correctly',() => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()

})