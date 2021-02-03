import React, { useState } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import styles from 'styles/tabStyles';

const useStyles = styles;

const NavTabs = () => {
	const classes = useStyles();
	const [value, setValue] = useState(0);
	const handleChange = (e, newValue) => {
		setValue(newValue);
	};
	return (
		<Tabs
			value={value}
			onChange={handleChange}
			aria-label='navigation tabs'
			centered
			className={classes.tabs}
		>
			<Tab label='About' />
			<Tab label='Products' />
			<Tab label='Classic Cars' />
			<Tab label='Contact Us' />
		</Tabs>
	);
};

export default NavTabs;
