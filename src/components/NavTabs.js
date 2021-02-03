import React, { useState } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import styles from 'styles/tabStyles';
import { Link } from 'react-router-dom';

const useStyles = styles;

const NavTabs = ({ tabValue, handleTabChange }) => {
	const classes = useStyles();

	return (
		<Tabs
			value={tabValue}
			onChange={handleTabChange}
			aria-label='navigation tabs'
			centered
			className={classes.tabs}
			classes={{ indicator: classes.indicator, root: classes.tabsRoot }}
			textColor='primary'
		>
			<Tab component={Link} to='/' disableRipple label='About' />
			<Tab component={Link} to='/products' disableRipple label='Products' />
			<div className={classes.spacer}></div>
			<Tab component={Link} to='cars' disableRipple label='Classic Cars' />
			<Tab component={Link} to='/contact' disableRipple label='Contact Us' />
		</Tabs>
	);
};

export default NavTabs;
