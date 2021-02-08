import { Typography } from '@material-ui/core';
import React from 'react';
import styles from 'styles/contentStyles';

const useStyles = styles;

const PageNotFoundScreen = () => {
	const classes = useStyles();
	return (
		<Typography className={classes.title} variant='h1'>
			Oops! 404 Page not found
		</Typography>
	);
};

export default PageNotFoundScreen;
