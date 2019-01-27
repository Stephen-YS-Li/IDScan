import React, {Component} from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./css/TabsPage.css";

class TabsPage extends Component {
	render() {
		return (
			<Tabs className = "tabs">
			    <TabList>
				    <Tab>Title 1</Tab>
				    <Tab>Title 2</Tab>
			    </TabList>

			    <TabPanel className = "tab-panel">
			    	<h2>Any content 1</h2>
			    </TabPanel>
			    <TabPanel className = "tab-panel">
			    	<h2>Any content 2</h2>
			    </TabPanel>
		  	</Tabs>
		);
	}
}

export default TabsPage;
