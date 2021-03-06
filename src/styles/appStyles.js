import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;
const appBarHeight = 90;
const footerHeight = 50;

const styles = makeStyles(theme => ({
	main: {
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		flexGrow: 1,
		margin: '0 auto',
		padding: 0,
		paddingBottom: theme.spacing(3),
		marginTop: appBarHeight,
		minHeight: `calc(100vh - ${appBarHeight + footerHeight}px)`,
		width: '100%',
		maxWidth: 900,
		backgroundColor: '#fff',
		[theme.breakpoints.down('md')]: {
			maxWidth: 800
		},
		[theme.breakpoints.down('sm')]: {
			maxWidth: 600
		}
	},
	appBar: {
		backgroundColor: theme.palette.grey[300],
		width: '100%'
	},
	toolBar: {
		position: 'relative',
		height: appBarHeight,
		backgroundColor: theme.palette.grey[300],
		width: '100%',
		paddingLeft: 24
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		minWidth: drawerWidth,
		width: 'min-content'
	},
	footer: {
		height: footerHeight,
		width: '100%',
		backgroundColor: theme.palette.grey[300],
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		'& p': {
			color: theme.palette.grey[700]
		},
		'& a': {
			color: '#a63600',
			'&:hover': {
				color: '#309772'
			}
		}
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-end'
	},
	drawerNavButton: {
		color: theme.palette.primary.main,
		'&.Mui-selected': {
			backgroundColor: theme.palette.primary.light,
			color: '#fff'
		}
	}
}));

export default styles;
