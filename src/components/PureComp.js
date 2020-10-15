import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
    render() {
        return (
            <div>
               purecomponent  {this.props.name}
            </div>
        )
    }
}

export default PureComp
