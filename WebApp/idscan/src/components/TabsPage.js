import React, {Component} from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Panel from './Panel.js';
import '../css/TabsPage.css';

class TabsPage extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	_renderTabs() {
		return this.props.exam_dates.map((date) => {
			return (
				<Tab>
					{date}
				</Tab>
			);
		})
	}


	_renderPanels() {
		return this.props.exam_dates.map((date) => {
			return (
				<TabPanel>
					<Panel student_list={this.props.student_list}/>
				</TabPanel>
			);
		})
	}

	render() {
		return (
			<Tabs className = "tabs">
			    <TabList>
				    {this._renderTabs()}
			    </TabList>
			    {this._renderPanels()}
		  	</Tabs>
		);
	}
}

export default TabsPage;
