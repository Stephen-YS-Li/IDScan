import React, {Component} from 'react';

import Header from './Header.js';

class FrontPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        // this._handleInputChange

    }

    render() {
        return (
            <div id = "front-page">
                <Header/>
            </div>
        )
    }
}

export default FrontPage