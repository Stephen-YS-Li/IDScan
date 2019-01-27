import React, {Component} from 'react';

import Header from './Header.js';
import Sidebar from './Sidebar.js';
import "./css/frontpage.css"
import TabsPage from './components/TabsPage.js'

var courses = [
    {
        course_code: "CPSC 221",
        instructor: "Will Evans",
        section:"203",
        exam_dates: ["01/22/2019", "02/30/2019", "04/10/2019"],
        student_list: [
            {
                student_name: "Jason",
                student_no: 84720572,
                attendance: [true, false, true]
            },
            {
                student_name: "Andy",
                student_no: 12534512,
                attendance: [false, true, false]
            },
            {
                student_name: "Stephen",
                student_no: 84720572,
                attendance: [true, false, false]
            }
        ]
    },
    {
        course_code: "CPSC 420",
        instructor: "Jeff Bezos",
        section:"301",
        exam_dates: ["01/24/2019", "02/29/2019", "04/13/2019"],
        student_list: [
            {
                student_name: "Ali",
                student_no: 12957634,
                attendance: [true, true, true]
            },
            {
                student_name: "Andy",
                student_no: 12534512,
                attendance: [false, true, false]
            },
            {
                student_name: "Bill",
                student_no: 12095723,
                attendance: [false, false, false]
            }
        ]
    }
];

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
                    <TabsPage course={courses[0]}/>
                </div>
            </div>
        )
    }
}

export default FrontPage