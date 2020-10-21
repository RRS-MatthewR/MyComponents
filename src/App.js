import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

// import AppBreadcrumbs from './Components/AppBreadcrumbs';

//App Components
import Header from './Components/Header';
import UploadFiles from './Components/UploadFiles';
import Sidebar from './Components/Sidebar';
import FormDropdown from './Components/FormDropdown';
import ClassForm from './Components/ClassForm';
import FunctionForm from './Components/FunctionForm';
import SearchBar from './Components/SearchBar';
import TestFunctionComp from './Components/TestFunctionComp';
import TestFileBaseComp from './Components/TestFileBaseComp';
import TestSwitch from './Components/TestSwitch';
import DataTable from './Components/DataTable';
import DropdownMenu from './Components/DropdownMenu';
import Stopwatch from './Components/Stopwatch';
import BarChart from './Components/BarChart';
import Tabs from './Components/Tabs';

// import { Breadcrumb } from 'react-bootstrap';

// import Editable from './Components/Editable';

function App() {
  return (
    <div className="container">
      <Header />
    <BrowserRouter>
      <Sidebar />
    
    {/* <div className="breadcrumbs">
      <AppBreadcrumbs />
    </div>  */}

      <div className="main">
      <Route path="/barchart" component={BarChart}></Route>
      <Route path="/stopwatch" component={Stopwatch}></Route>
      <Route path="/dropdown-menu" component={DropdownMenu}></Route>
      <Route path="/data-table" component={DataTable}></Route>
      <Route path="/test-switch" component= {TestSwitch}></Route>
      <Route exact path="/test2" component={TestFileBaseComp}></Route>
      <Route exact path="/test" component={TestFunctionComp}></Route>
        <Route exact path="/upload-files" component={UploadFiles}></Route>
        <Route path="/functionform" component={FunctionForm}></Route>
        <Route path="/classform" component={ClassForm}></Route>
        <Route path="/search" component={SearchBar}></Route>
        <Route path="/dropdown-form-create" component={FormDropdown}></Route>
        <Route path="/tabs" component={Tabs}></Route>
        </div>
    </BrowserRouter>
    </div>
  );
}

export default App;