import React from 'react';
import styles from 'styles/appStyles';

const useStyles = styles;

const Footer = () => {
	const classes = useStyles();
	return <footer className={classes.footer}></footer>;
};

export default Footer;
