import React, {Component} from 'react';

import Header from './Header.js';
import TabsPage from './TabsPage.js'

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
                <TabsPage/>
            </div>
        )
    }
}

export default FrontPage