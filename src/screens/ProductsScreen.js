import React, { useEffect } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import styles from 'styles/contentStyles';

const useStyles = styles;

const ProductsScreen = () => {
	const classes = useStyles();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Typography variant='h1' className={classes.title}>
				Products
			</Typography>
			<Paper variant='outlined' className={classes.paper}>
				<Typography variant='h5' className={classes.subTitle}>
					Skill, Precision and Care
				</Typography>
				<Typography className={classes.paragraph}>
					We take great pride in our products and instill our passion into each
					unit we rebuild. We use only genuine parts to re-manufacture each
					steering unit to restore it to back to its original condition.
				</Typography>
			</Paper>
			<Paper variant='outlined' className={classes.paper}>
				<Typography variant='h5' className={classes.subTitle}>
					The Meticulous Process
				</Typography>
				<Typography className={classes.paragraph}>
					The re-manufacturing process of a Power Steering Rack and Pinion
					includes, at minimum:
				</Typography>
				<ul className={classes.list}>
					<li>
						<span>New</span> Rack Ends
					</li>
					<li>
						<span>New</span> Boots and Boot Clips
					</li>
					<li>
						<span>New</span> O-rings
					</li>
					<li>
						<span>New</span> Teflons
					</li>
					<li>
						<span>New</span> Bearings
					</li>
				</ul>
			</Paper>
			<Grid
				container
				spacing={2}
				className={classes.imageGrid}
				alignItems='center'
				justify='center'
				direction='row'
			>
				<Grid item>
					<img
						alt='Power Steering Rack'
						className={classes.partPhoto}
						src='/images/rack1.jpg'
					/>
				</Grid>
				<Grid item>
					<img
						alt='Power Steering Box'
						className={classes.partPhoto}
						src='/images/box1.jpg'
					/>
				</Grid>
			</Grid>
			<Paper variant='outlined' className={classes.paper}>
				<Typography className={classes.paragraph}>
					Each unit is thoroughly cleaned and inspected, with any damaged
					component repaired or replaced as necesary. <br />
					Our pride and care is evident in the finished product, with each unit
					returned to its original condition - in both function, and appearance.
				</Typography>
			</Paper>
			<Grid
				container
				spacing={2}
				className={classes.imageGrid}
				alignItems='center'
				justify='center'
				direction='row'
			>
				<Grid item>
					<img
						alt='Power Steering Box'
						className={classes.partPhoto}
						src='/images/box2.jpg'
					/>
				</Grid>
				<Grid item>
					<img
						alt='Power Steering Box'
						className={classes.partPhoto}
						src='/images/box3.jpg'
					/>
				</Grid>
			</Grid>
			<Paper variant='outlined' className={classes.paper}>
				<Typography>
					The final touch is an accurate replication of the original paint
					pattern, uncluding exposed metal and high quality paint.
					<br />
					This unique, fastidious commitment to quality has set us apart and
					given us the edge over our competition.
				</Typography>
			</Paper>
			<Grid
				container
				spacing={2}
				className={classes.imageGrid}
				alignItems='center'
				justify='center'
				direction='row'
			>
				<Grid item>
					<img
						alt='SupaSteer Show Display'
						className={classes.partPhoto}
						src='/images/show.jpg'
					/>
				</Grid>
			</Grid>
			<Paper variant='outlined' className={classes.paper}>
				<Typography variant='h5' className={classes.subTitle}>
					Warranty
				</Typography>
				<Typography className={classes.paragraph}>
					We offer an Australia wide 12 Month Warranty. <br />
					We are an authorised VACC approved repairer and a preferred Capricorn
					Society supplier, which all adds up to 100% complete peace of mind.
				</Typography>
			</Paper>
			<Paper variant='outlined' className={classes.paper}>
				<Typography variant='h5' className={classes.subTitle}>
					Delivery
				</Typography>
				<Typography className={classes.paragraph}>
					We have a local delivery service that runs 5 days per week and are
					able to dispatch goods by road or air daily, including interstate or
					rural Victoria destinations.
				</Typography>
			</Paper>
			<Grid
				container
				spacing={2}
				className={classes.imageGrid}
				alignItems='center'
				justify='center'
				direction='row'
			>
				<Grid item>
					<img alt='VACC Logo' src='/images/VACCLogo.jpg' />
				</Grid>
				<Grid item>
					<img alt='Capricorn Logo' src='/images/CapricornLogo.jpg' />
				</Grid>
			</Grid>
		</>
	);
};

export default ProductsScreen;
