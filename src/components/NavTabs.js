import React from 'react';
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
			indicatorColor='primary'
			className={classes.tabs}
			textColor='primary'
		>
			<Tab
				className={classes.tab}
				component={Link}
				to='/'
				disableRipple
				label='About'
			/>
			<Tab
				className={classes.tab}
				component={Link}
				to='/products'
				disableRipple
				label='Products'
			/>
			<div className={classes.spacer}></div>
			<Tab
				className={classes.tab}
				component={Link}
				to='cars'
				disableRipple
				label='Classic Cars'
			/>
			<Tab
				className={classes.tab}
				component={Link}
				to='/contact'
				disableRipple
				label='Contact Us'
			/>
		</Tabs>
	);
};

export default NavTabs;
