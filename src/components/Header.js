import React, { useState } from 'react';
import {
	AppBar,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemText,
	Toolbar,
	useMediaQuery,
	Divider
} from '@material-ui/core';
import {
	Menu as MenuIcon,
	ChevronRight as ChevronRightIcon
} from '@material-ui/icons';
import Logo from 'components/Logo';
import NavTabs from 'components/NavTabs';
import styles from 'styles/appStyles';
import { Link } from 'react-router-dom';

const useStyles = styles;

const Header = () => {
	const classes = useStyles();
	const matches680 = useMediaQuery('(max-width:680px)');

	const [drawerIsOpen, setDrawerIsOpen] = useState(false);
	const [tabValue, setTabValue] = useState(0);

	const handleTabChange = (e, newValue) => {
		setTabValue(newValue);
	};

	const handleDrawerOpen = () => {
		setDrawerIsOpen(true);
	};

	const handleDrawerClose = () => {
		setDrawerIsOpen(false);
	};

	return (
		<>
			<AppBar position='fixed' className={classes.appBar}>
				<Toolbar disableGutters className={classes.toolBar}>
					<Logo handleTabChange={handleTabChange} />
					{matches680 ? (
						<IconButton onClick={handleDrawerOpen}>
							<MenuIcon size='large' color='primary' />
						</IconButton>
					) : (
						<NavTabs tabValue={tabValue} handleTabChange={handleTabChange} />
					)}
				</Toolbar>
			</AppBar>
			{matches680 && (
				<Drawer
					className={classes.drawer}
					variant='temporary'
					anchor='left'
					open={drawerIsOpen}
					onClose={handleDrawerClose}
					classes={{
						paper: classes.drawerPaper
					}}
				>
					<div className={classes.drawerHeader}>
						<IconButton onClick={handleDrawerClose}>
							<ChevronRightIcon color='primary' />
						</IconButton>
					</div>
					<Divider />
					<List disablePadding>
						<ListItem
							button
							component={Link}
							to='/'
							selected={tabValue === 0}
							onClick={() => {
								setTabValue(0);
								setDrawerIsOpen(false);
							}}
							className={classes.drawerNavButton}
						>
							<ListItemText primary='About' />
						</ListItem>
						<ListItem
							button
							component={Link}
							to='/products'
							selected={tabValue === 1}
							onClick={() => {
								setTabValue(1);
								setDrawerIsOpen(false);
							}}
							className={classes.drawerNavButton}
						>
							<ListItemText primary='Products' />
						</ListItem>
						<ListItem
							button
							component={Link}
							to='/cars'
							selected={tabValue === 3}
							onClick={() => {
								setTabValue(3);
								setDrawerIsOpen(false);
							}}
							className={classes.drawerNavButton}
						>
							<ListItemText primary='Classic Cars' />
						</ListItem>
						<ListItem
							button
							component={Link}
							to='/contact'
							selected={tabValue === 4}
							onClick={() => {
								setTabValue(4);
								setDrawerIsOpen(false);
							}}
							className={classes.drawerNavButton}
						>
							<ListItemText primary='Contact Us' />
						</ListItem>
					</List>
				</Drawer>
			)}
		</>
	);
};

export default Header;
