import React, {Component} from "react";
import './css/sidebar.css';

class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    _renderCourses() {
        this.props.courses.sort((a, b) => a.course_code - b.course_code);

        return this.props.courses.map((course, index) => {
            return (
                <div id={course.course_code.toLowerCase().replace(" ", "-")}
                     onClick={this.props.clickHandler}
                     key={index}>
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
                <div id = "add-course" onClick={this.props.clickHandler}>
                    Add course
                </div>
            </div>
        )
    }
}

export default Sidebar