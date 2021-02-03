import React, { useState } from 'react';
import {
	AppBar,
	Drawer,
	Tabs,
	Toolbar,
	useMediaQuery
} from '@material-ui/core';
import Logo from 'components/Logo';
import NavTabs from 'components/NavTabs';
import styles from 'styles/appStyles';

const useStyles = styles;

const Header = () => {
	const classes = useStyles();
	const matchesXs = useMediaQuery(theme => theme.breakpoints.down('xs'));

	const [drawerIsOpen, setDrawerIsOpen] = useState(false);

	// const handleDrawerOpen = () => {
	// 	setDrawerIsOpen(true);
	// };

	const handleDrawerClose = () => {
		setDrawerIsOpen(false);
	};

	return (
		<>
			<AppBar position='fixed' className={classes.appBar}>
				<Toolbar disableGutters className={classes.toolBar}>
					<Logo />
					<NavTabs />
				</Toolbar>
			</AppBar>
			{matchesXs && (
				<Drawer
					className={classes.drawer}
					variant='temporary'
					anchor='right'
					open={drawerIsOpen}
					onClose={handleDrawerClose}
					classes={{
						paper: classes.drawerPaper
					}}
				></Drawer>
			)}
		</>
	);
};

export default Header;
