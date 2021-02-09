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
		borderRadius: '3px',
		boxShadow: '2px 2px 2px rgba(0,0,0,0.5)'
	},
	imageGrid: {
		maxWidth: '90%',
		marginTop: theme.spacing(2)
	},
	mrPowerPhoto: {
		marginTop: theme.spacing(3),
		marginBottom: -24,
		maxWidth: '100%'
	},
	bold: {
		fontWeight: 'bold'
	},
	signatureGrid: {
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
	signatureText: {
		marginTop: theme.spacing(4),
		marginLeft: theme.spacing(4),
		width: '100%'
	},
	signatureText2: {
		width: '100%',
		marginLeft: theme.spacing(5)
	},
	signature: {
		width: '100%',
		marginLeft: theme.spacing(5),
		marginTop: theme.spacing(2),
		fontFamily: "'Yellowtail', 'Noto Sans', sans-serif",
		fontSize: '2rem',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.5rem'
		}
	},
	phoneButton: {
		marginLeft: theme.spacing(2),
		border: `1px solid ${theme.palette.secondary.main}`
	}
}));

export default styles;
