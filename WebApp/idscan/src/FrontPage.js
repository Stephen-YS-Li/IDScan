import React, {Component} from 'react';

import Header from './Header.js';
import TabsPage from './components/TabsPage.js'

var student_list = [
{student_name: "Jason", student_no: 1},
{student_name: "Andy", student_no: 2},
{student_name: "Stephen", student_no: 3}
];

var exam_dates = [5];

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
                <TabsPage exam_dates={exam_dates} student_list={student_list}/>
            </div>
        )
    }
}

export default FrontPage