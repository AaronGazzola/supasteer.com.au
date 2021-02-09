import React, { useEffect } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import styles from 'styles/contentStyles';

const useStyles = styles;

const ContactUsScreen = () => {
	const classes = useStyles();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Typography variant='h1' className={classes.title}>
				Classic Cars
			</Typography>
			<Paper variant='outlined' className={classes.paper}>
				<Typography variant='h5' className={classes.subTitle}>
					Experts in Classics
				</Typography>
				<Typography className={classes.paragraph}>
					At Supasteer we have the parts and expertise to replace or repair the
					steering components of your older model cars. Whether you have a
					Mustang, Chev, Holden, Ford or Valiant - we have what you need. <br />
					<br />
					We have been involved with the restoration of classic cars for many
					years, and are keenly aware of what you want and need for your pride
					and joy. We have many types and models on the shelf, and if we don't
					have it, we can rebuild your unit. We will take the utmost care and
					pride with your property, because we know exactly what it is like to
					intrust your special car or its parts to someone else. We know this
					because we are also proud owners of our own restored cars.
				</Typography>
			</Paper>
			<Grid
				container
				spacing={2}
				className={classes.imageGrid}
				style={{ maxWidth: '85%' }}
				alignItems='center'
				justify='center'
				direction='row'
			>
				<Grid item>
					<img
						alt='Ford Mustang'
						className={classes.partPhoto}
						src='/images/classicCar3.jpg'
					/>
				</Grid>
				<Grid item>
					<img
						alt='Holden StatesMan'
						className={classes.partPhoto}
						src='/images/classicCar2.jpg'
					/>
				</Grid>
				<Grid item>
					<img
						alt='Award Winning AC Cobra'
						className={classes.partPhoto}
						src='/images/classicCar1.jpg'
					/>
				</Grid>
			</Grid>
		</>
	);
};

export default ContactUsScreen;
