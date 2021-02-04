import React from 'react';
import { Typography } from '@material-ui/core';
import styles from 'styles/appStyles';

const useStyles = styles;

const Footer = () => {
	const classes = useStyles();
	return (
		<footer className={classes.footer}>
			<Typography variant='body2'>
				Designed and Developed by{' '}
				<a href='https://www.apexapps.dev'>Apex Apps</a>
			</Typography>
			<Typography variant='body2'>
				Copyright &copy; {new Date().getFullYear()} SupaSteer Australia
			</Typography>
		</footer>
	);
};

export default Footer;
