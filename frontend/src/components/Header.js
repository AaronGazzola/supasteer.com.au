import React, { useState } from 'react';
import { AppBar, Drawer, Toolbar, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import Logo from 'components/Logo';
import styles from 'styles/appStyles';

const useStyles = styles;

const Header = () => {
	const theme = useTheme();
	const classes = useStyles();
	const matchesXs = useMediaQuery(theme => theme.breakpoints.down('xs'));

	const [drawerIsOpen, setDrawerIsOpen] = useState(false);

	const handleDrawerOpen = () => {
		setDrawerIsOpen(true);
	};

	const handleDrawerClose = () => {
		setDrawerIsOpen(false);
	};

	return (
		<>
			<AppBar position='fixed' className={classes.appBar}>
				<Toolbar className={classes.toolBar}>
					<Logo />
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
