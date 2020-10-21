import React, {useState} from 'react';
import {Tabs,Tab,AppBar} from '@material-ui/core';

export default function PageTabs(){
    const [tab,setTab] = useState(0)
    const handleTabs=(e, value)=>{
        console.log(value);
        setTab(value);
    }

    return(
        <div>
            <AppBar position="static">
                <Tabs value={tab} onChange={handleTabs}>
                    <Tab label="Tab 1"/>
                    <Tab label="Tab 2 Activities"/>
                </Tabs>
                <TabPanel value={tab} index={0}>
                    <h1>Tab 1</h1>
                </TabPanel>
                <TabPanel value={tab} index={1}>
                    <h1>Tab 2</h1>
                </TabPanel>
            </AppBar>
        </div>
    );
}

function TabPanel(props) {
    const {children, value, index}=props;
    return(
        <div>
            {
                value===index && (
                <>{children}</>
                )
            }
        </div>
    );
}