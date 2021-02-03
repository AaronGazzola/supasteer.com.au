import React from 'react';
import styles from 'styles/logoStyles';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';

const useStyles = styles;

const Logo = ({ handleTabChange }) => {
	const classes = useStyles();
	const history = useHistory();
	return (
		<>
			<svg
				onClick={e => {
					history.push('/');
					handleTabChange(e, 0);
				}}
				viewBox='0 0 200 100'
				className={classes.logo}
			>
				<path
					fill='#48aa43'
					className={classes.shape1}
					d='
     M 0 10
  L 25 10
  L 75 90
  L 50 90
  Z
  '
				></path>
				<path
					fill='#0397d7'
					className={classes.shape2}
					d='
     M 33 10
  L 58 10
  L 108 90
  L 83 90
  Z
  '
				></path>
				<path
					className={classes.shape3}
					fill='#969ba1'
					d='
     M 66 10
  L 91 10
  L 141 90
  L 116 90
  Z
  '
				></path>
				<path
					className={clsx(classes.textBox, classes.title1)}
					d='
     M 0 17
  L 125 17
  L 125 47
  L 0 47
  Z
  '
				></path>
				<path
					className={clsx(classes.textBox, classes.title2)}
					d='
     M 43 52
  L 165 52
  L 165 82
  L 43 82
  Z
  '
				></path>
				<text
					x='0'
					y='44'
					fill='#000'
					className={clsx(classes.title, classes.title1)}
				>
					SUPASTEER
				</text>
				<text
					x='45'
					y='80'
					fill='#000'
					className={clsx(classes.title, classes.title2)}
				>
					AUSTRALIA
				</text>
			</svg>
			<div className={classes.backDrop}></div>
		</>
	);
};

export default Logo;
