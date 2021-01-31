import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;
const appBarHeight = 90;
const footerHeight = 50;

const styles = makeStyles(theme => ({
	main: {
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		flexGrow: 1,
		margin: '0 auto',
		padding: 0,
		paddingBottom: theme.spacing(3),
		marginTop: appBarHeight,
		minHeight: `calc(100vh - ${appBarHeight + footerHeight}px)`,
		width: '100%',
		maxWidth: 1220,
		[theme.breakpoints.down('md')]: {
			maxWidth: 900
		},
		[theme.breakpoints.down('sm')]: {
			maxWidth: 600
		}
		// backgroundColor: '#fff'
	},
	appBar: {
		backgroundColor: theme.palette.grey[300],
		width: '100%'
	},
	toolBar: {
		height: appBarHeight,
		backgroundColor: theme.palette.grey[300],
		width: '100%'
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
		alignItems: 'center'
	}
}));

export default styles;
