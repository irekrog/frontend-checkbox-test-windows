/* eslint-disable */
import React from 'react';
import HiddenContent from '../../components/HiddenContent/HiddenContent';

class Checkbox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
    }

    handleCheckbox = (event) => {
        this.setState({
            checked: event.target.checked
        })
    }

    render() {
        console.log(this.state.checked);
        return(
            <div className="checkbox">
                <div className="title">
                    Checkbox
                </div>
                <div className="content">
                    <input className="switch" type="checkbox" onChange={this.handleCheckbox} />
                </div>
                {this.state.checked && <HiddenContent />}
            </div>
        );
    }
}

export default Checkbox;
