import React from 'react';
import {NavLink} from 'react-router-dom';


function Sidebar () {

    return (
            <div className="sidebar">
                <li>
                    <NavLink to="/upload-files"><i className="fa fa-arrow-circle-right"></i> 
                    Upload Files
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/data-table"><i className="fa fa-arrow-circle-right"></i> 
                    Data Table
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dropdown-menu"><i className="fa fa-arrow-circle-right"></i>
                    Dropdown Menu
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/stopwatch"><i className="fa fa-arrow-circle-right"></i>
                    Stopwatch
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/test-switch"><i className="fa fa-arrow-circle-right"></i>
                    Test Switch
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/functionform"><i className="fa fa-arrow-circle-right"></i> 
                    Function Form
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/classform"><i className="fa fa-arrow-circle-right"></i>
                    Class Form
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dropdown-form-create"><i className="fa fa-arrow-circle-right"></i>
                    Form Dropdown
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/search"><i className="fa fa-arrow-circle-right"></i> 
                    Search Bar
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/barchart"><i className="fa fa-arrow-circle-right"></i>
                    Bar Chart
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/tabs"><i className="fa fa-arrow-layer-group"></i>
                    Bar Chart
                    </NavLink>
                </li>
            </div>
    );
}

export default Sidebar