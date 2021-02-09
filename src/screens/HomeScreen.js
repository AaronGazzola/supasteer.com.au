import React, { useEffect } from 'react';
import { Paper, Typography, Grid, IconButton } from '@material-ui/core';
import styles from 'styles/contentStyles';
import { Link } from 'react-router-dom';
import { Phone as PhoneIcon } from '@material-ui/icons';

const useStyles = styles;

const HomeScreen = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const classes = useStyles();
	return (
		<>
			<Typography variant='h1' className={classes.title}>
				About SupaSteer
			</Typography>
			<Paper variant='outlined' className={classes.paper}>
				<Typography variant='h5' className={classes.subTitle}>
					Steering Australia Since 1989
				</Typography>
				<Typography className={classes.paragraph}>
					SupaSteer Pty Ltd has been operating in the Eastern Suburbs of
					Melbourne since 1989. For over 30 years we have been supplying
					Australia with the best Power Steering products and services.
				</Typography>
			</Paper>
			<Paper variant='outlined' className={classes.paper}>
				<Typography variant='h5' className={classes.subTitle}>
					The Steering Specialists
				</Typography>
				<Typography className={classes.paragraph}>
					We supply workshops, dealerships and spare parts outlets throughout
					Victoria with high quality and high value-for-money reconditioned
					exchange steering units.
					<br />
					<br />
					We have a vast range of approximately 600 units on the shelf - ready
					for dispatch. From the common types of Holden and Ford, to the more
					exotic BMW, SAAB, Toyota, Nissan, Hyundai and many more.
					<br />
					<br />
					In the very rare situation that we don't have the unit you require on
					the shelf, we can often overhaul yours and have it on its way back to
					you within 24 hours.
				</Typography>
			</Paper>
			<Grid className={classes.signatureGrid} alignItems='flex-start' container>
				<Typography className={classes.signatureText}>
					Need a question answered or have an enquiry?
				</Typography>
				<Typography className={classes.signatureText2}>
					Call Marty Gazzola, aka:
				</Typography>
				<Typography className={classes.signature}>
					Mr.Power Steering
					<IconButton
						component={Link}
						to='/contact'
						className={classes.phoneButton}
					>
						<PhoneIcon size='large' color='secondary' />
					</IconButton>
				</Typography>
			</Grid>
			<Link style={{ margin: 0, padding: 0 }} to='/contact'>
				<img
					className={classes.mrPowerPhoto}
					src='/images/mrPowerSteering.jpg'
					alt='Mr. Power Steering'
				/>
			</Link>
		</>
	);
};

export default HomeScreen;
