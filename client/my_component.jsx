import React, {Component} from 'react'
import {Dashboard} from '/client/components/dashboard/dashboard.jsx'
import {Slide} from '/client/components/slide/slide.jsx'

export class MyComponent extends Component{
    render(){
        let components = [
            {title:"Settings", component: <p>A little beautiful first component</p>}
            ,{title:"Users", component: <p>A little beautiful second component</p>}
            ,{title:"Centers", component: <p>A little beautiful third component</p>}
        ] 
 
        return (
            <div className="dashboard-component">
                <Slide>
                    <Dashboard components={components}/>  
                </Slide>         
            </div>

        ) 
    }
} 