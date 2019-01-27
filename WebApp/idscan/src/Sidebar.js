import React, {Component} from "react";
import './css/sidebar.css';

class Sidebar extends Component {
    // constructor(props) {
    //     super(props)
    // }

    _renderCourses() {
        this.props.courses.sort((a, b) => a.course_code - b.course_code);

        return this.props.courses.map((course, index) => {
            return (
                <div key={index}>
                    <div>
                        {course.course_code}
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            // Pass on our props
            <div className="sidebar">
                {this._renderCourses()}
                <div>
                    Add a class
                </div>
            </div>
        )
    }
}

export default Sidebar