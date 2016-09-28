import React, {Component} from 'react'

export class Dashboard extends Component {

    constructor() {
        super()
        this.state = {
            indexOfSelected: 0
            , currentComponent: {
                title: '',
                component: null
            }
        }
    }

    componentDidMount() {
        let firstComponent = this.props.components[0]

        this.setState({ 
            indexOfSelected: 0
            , currentComponent: firstComponent 
        })

    }

    _isItemSelected(index){
        return index === this.state.indexOfSelected
    }

    _selectComponent(index) {

        let {components} = this.props

        this.setState({ 
            indexOfSelected: index
            , currentComponent: components[index] 
        })
    }

    _renderComponentsList() {
        let
            {components} = this.props

            , list = components.map((component, index) => {

                let {title} = component

                return (
                    <li
                        className={`component-item ${this._isItemSelected(index) ? 'selected' : ''}`}
                        key={index}
                        onClick = {() => { this._selectComponent.call(this, index) } }
                        >
                        {title}
                    </li>
                )
            })



        return <ul>{list}</ul>
    }


    render() {

        let

            CurrentComponent = () => {

                let {component, title} = this.state.currentComponent

                return (
                    <div className="component">
                        <h1>{title}</h1>
                        <div className="current-component">
                            {component}
                        </div>
                    </div>
                )
            }

            , aside = (
                <aside>
                    {this._renderComponentsList() }
                </aside>
            )

            , main = (
                <main>
                    <CurrentComponent/>
                </main>
            )

        return (
            <div className="dashboard pad shadow ae-1 done">
                {aside}
                {main}
            </div>
        )


    }
}
