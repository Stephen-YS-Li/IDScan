import React, {Component} from 'react';

import 'react-tabs/style/react-tabs.css';
import "../css/Panel.css";

class Panel extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	_renderStudentRows() {
		return this.props.student_list.map((student, index) => {
			return (
				<tr key={index}>
					<td>{student.student_name}</td>
					<td>{student.student_no}</td>
				</tr>
			);
		})
	}

	render() {
		return (
			<table className = "student-table">
				<thead>
					<tr>
						<th>Student Name</th>
						<th>Student Number</th>
					</tr>
				</thead>
				<tbody>
					{this._renderStudentRows()}
				</tbody>
			</table>
		);
	}
}

export default Panel;
