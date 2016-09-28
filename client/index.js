import React, {Component} from 'react'
import {render} from 'react-dom'
import {MyComponent} from './my_component.jsx'

Meteor.startup(()=>{
    render(<MyComponent/>, document.getElementById('root'))
})
