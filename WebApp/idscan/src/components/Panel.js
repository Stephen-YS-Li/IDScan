import React, {Component} from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "../css/Panel.css";

class Panel extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	_renderStudentRows() {
		return this.props.student_list.map((student) => {
			return (
				<tr>
					<td>{student.student_name}</td>
					<td>{student.student_no}</td>
				</tr>
			);
		})
	}

	render() {
		return (
			<table>
				<tr>
					<th>Student Name</th>
					<th>Student Number</th>
				</tr>
				{this._renderStudentRows()}
			</table>
		);
	}
}

export default Panel;
