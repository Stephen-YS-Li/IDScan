import React, {Component} from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Panel from './Panel.js';
import '../css/TabsPage.css';

var exams = ["Midterm 1", "Midterm 2", "Final Exam"];

class TabsPage extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	_renderTabs() {
		return this.props.course.exam_dates.map((date, index) => {
			return (
				<Tab key={index}>
					<div>{exams[index]}</div>
				</Tab>
			);
		})
	}


	_renderPanels() {
		return this.props.course.exam_dates.map((date, index) => {
			return (
				<TabPanel key={index}>
					<h3 className="panel-date">Date: {date}</h3>
					<Panel student_list={this.props.course.student_list} course_index={index}/>
				</TabPanel>
			);
		})
	}

	render() {
		return (
			<Tabs className="tabs">
			    <TabList>
				    {this._renderTabs()}
			    </TabList>
			    {this._renderPanels()}
		  	</Tabs>
		);
	}
}

export default TabsPage;
