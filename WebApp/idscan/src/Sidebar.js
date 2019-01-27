import React, {Component} from "react";
import './css/sidebar.css';

class Sidebar extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            // Pass on our props
            <div className = "sidebar">
                <ul>
                    <li>
                        CPSC 420
                    </li>

                    <li>
                        420
                    </li>

                    <li>
                        Snoop Dogg
                    </li>

                    <li>
                        Doge
                    </li>

                    <li>
                       Add a class
                    </li>
                </ul>
            </div>
        )
    }
}

export default Sidebar