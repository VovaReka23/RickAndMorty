import React from 'react'
import { useHistory } from "react-router";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const Navigation = ({ value, setValue, tabs }) => {
    const history = useHistory();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const changeLink = (event, link) => {
        history.push(link)
    }

    return (
        <AppBar position="static" color="default">
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
            >
                {tabs.map((tab, index) => {
                    return (
                        <Tab key={tab.id} label={tab.name} {...a11yProps(index)} onClick={(event) => changeLink(event, tab.link)} />
                    )
                })}
            </Tabs>
        </AppBar>
    )
}

export default Navigation;