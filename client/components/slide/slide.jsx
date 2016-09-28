import React, {Component} from 'react'

export class Slide extends Component {
    render() {
        let
            {children, background} = this.props

        return (
            <section className="slide">
                <div className="content">
                    <div className="container">
                        <div className="wrap">
                            <div className="fix-10-12">
                               {children}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="background" style={{backgroundImage: `url(${background})`}} />
            </section>
        )
    }

}