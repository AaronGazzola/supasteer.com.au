import { Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import styles from 'styles/contentStyles';

const useStyles = styles;

const ProductsScreen = () => {
	const classes = useStyles();
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
					<img className={classes.partPhoto} src='/images/rack1.jpg' />
				</Grid>
				<Grid item>
					<img className={classes.partPhoto} src='/images/box1.jpg' />
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
					<img className={classes.partPhoto} src='/images/box2.jpg' />
				</Grid>
				<Grid item>
					<img className={classes.partPhoto} src='/images/box3.jpg' />
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
					<img className={classes.partPhoto} src='/images/show.jpg' />
				</Grid>
			</Grid>
		</>
	);
};

export default ProductsScreen;
