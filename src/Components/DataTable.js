import React from 'react';
import MUIDataTable from "mui-datatables";
import { Link } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';

function DataTable () {

    const columns = ["Date Received", "Time Received", "Subject", "Email Address", "Status", "View" ];

    const data = [
        ["14/10/2020", "09:00", "Subject 1", "jigsaw@icloud.com", <DropdownMenu />, <Link to="/company1/view"><i className="fa fa-eye"></i></Link>],
        ["14/10/2020", "12:30", "Subject 2", "lbecchi@comcast.net", <DropdownMenu />, <Link to="/company1/view"><i className="fa fa-eye"></i></Link>],
        ["14/10/2020", "14:00", "Subject 3", "lipeng@msn.com", <DropdownMenu />, <Link to="/company1/view"><i className="fa fa-eye"></i></Link>],
        ["14/10/2020", "16:20", "Subject 4", "sravani@hotmail.com", <DropdownMenu />, <Link to="/company1/view"><i className="fa fa-eye"></i></Link>],
        ["15/10/2020", "08:45", "Subject 5", "ntegrity@optonline.net", <DropdownMenu />, <Link to="/company1/view"><i className="fa fa-eye"></i></Link>],
        ["15/10/2020", "10:00", "Subject 6", "thaljef@yahoo.ca", <DropdownMenu />, <Link to="/company1/view"><i className="fa fa-eye"></i></Link>],
        ["15/10/2020", "13:20", "Subject 7","lbecchi@yahoo.com", <DropdownMenu />, <Link to="/company1/view"><i className="fa fa-eye"></i></Link>],
        ["16/10/2020", "11:35", "Subject 8", "kaiser@outlook.com", <DropdownMenu />, <Link to="/company1/view"><i className="fa fa-eye"></i></Link>],
        ["17/10/2020", "10:20", "Subject 9", "report@icloud.com", <DropdownMenu />, <Link to="/company1/view"><i className="fa fa-eye"></i></Link>],
        ["17/10/2020", "14:50", "Subject 10", "brainless@yahoo.ca", <DropdownMenu />, <Link to="/company1/view"><i className="fa fa-eye"></i></Link>],
       ];

    return (
        
        <div className="data-table">
        <MUIDataTable 
            title={"Incoming Enquiries"} 
            data={data} 
            columns={columns} 
            />
        </div>
    );
}

export default DataTable