import React, { useEffect } from 'react';
import { Paper, Typography } from '@material-ui/core';
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
				Contact Us
			</Typography>
			<Paper variant='outlined' className={classes.paper}>
				<Typography variant='h5' className={classes.subTitle}>
					Enquiries and Support
				</Typography>
				<Typography className={classes.paragraph}>
					All reconditioning and repair work is carried out on the premises, by
					our specialist trained Mechanics. The rebuilding staff has a total
					combined specialised experience of 45 years. <br />
					Your enquiry will be handled by one of the rebuilding staff, so you
					can be assured that all our questions will be answered promptly and
					concisely by experienced and knowledgeable people.
				</Typography>
			</Paper>
			<Paper variant='outlined' className={classes.paper}>
				<Typography variant='h5' className={classes.subTitle}>
					Opening Hours:
				</Typography>
				<Typography className={classes.paragraph}>
					We are open{' '}
					<span className={classes.bold}>
						Monday through Friday from 8:00am to 5:00pm
					</span>{' '}
					<br />
					Closed on Saturday and Sunday
				</Typography>
			</Paper>
			<Paper variant='outlined' className={classes.paper}>
				<Typography variant='h5' className={classes.subTitle}>
					Phone
				</Typography>
				<Typography className={classes.paragraph}>
					<span className={classes.bold}>(03) 97220886</span>
				</Typography>
			</Paper>
			<Paper variant='outlined' className={classes.paper}>
				<Typography variant='h5' className={classes.subTitle}>
					Email
				</Typography>
				<Typography className={classes.paragraph}>
					<span className={classes.bold}>sales@supasteer.com.au</span>
				</Typography>
			</Paper>
			<Paper variant='outlined' className={classes.paper}>
				<Typography variant='h5' className={classes.subTitle}>
					Location
				</Typography>
				<Typography className={classes.paragraph}>
					<span className={classes.bold}>
						11 Valley road, Wonga Park, VIC 3115
					</span>
				</Typography>
			</Paper>
		</>
	);
};

export default ContactUsScreen;
