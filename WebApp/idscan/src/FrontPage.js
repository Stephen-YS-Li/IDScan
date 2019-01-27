import React, {Component} from 'react';

import Header from './Header.js';
import Sidebar from './Sidebar.js';
import TabsPage from './TabsPage.js';
import "./css/frontpage.css"

class FrontPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        // this._handleInputChange
    }

    render() {
        return (
            <div>
                <Header/>
                <div className='flex-container'>
                    <Sidebar/>
                    <TabsPage/>
                </div>
            </div>
        )
    }
}

export default FrontPage