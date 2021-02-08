import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
	title: {
		marginTop: theme.spacing(1),
		fontWeight: 100,
		color: theme.palette.grey[800],
		textAlign: 'center',
		paddingLeft: theme.spacing(1),
		paddingRight: theme.spacing(1),
		[theme.breakpoints.down('sm')]: {
			fontSize: '3rem',
			marginTop: theme.spacing(2)
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '2.5rem'
		}
	},
	subTitle: {
		fontWeight: 300,
		fontStyle: 'italic',
		marginBottom: theme.spacing(1),
		color: theme.palette.grey[800]
	},
	paper: {
		padding: theme.spacing(2),
		marginTop: theme.spacing(2),
		width: 700,
		[theme.breakpoints.down('md')]: {
			width: 600
		},
		[theme.breakpoints.down('sm')]: {
			width: 500
		},
		[theme.breakpoints.down('xs')]: {
			width: '85%'
		}
	},
	list: {
		listStyle: 'circle',
		'& span': {
			fontStyle: 'italic'
		}
	},
	partPhoto: {
		borderRadius: '5px',
		boxShadow: '2px 2px 2px rgba(0,0,0,0.5)'
	},
	imageGrid: {
		maxWidth: '90%',
		marginTop: theme.spacing(2)
	},
	mrPowerPhoto: {
		marginTop: theme.spacing(3),
		marginBottom: -theme.spacing(3),
		maxWidth: '100%'
	}
}));

export default styles;
