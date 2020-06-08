import React from'react'
//import ReactShallowRenderer from 'react-test-renderer/shallow'
import Header from '../../components/Header'

import ShallowRenderer from 'react-test-renderer/shallow'



test('Should render Header Correctly',() => {

    const renderer = new ShallowRenderer()
    renderer.render(<Header />)
    const result = renderer.getRenderOutput()
    expect(result).toMatchSnapshot()
})