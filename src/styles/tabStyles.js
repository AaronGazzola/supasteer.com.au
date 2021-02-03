import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
	tabs: {
		position: 'absolute',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%, -50%)'
	},
	indicator: {
		backgroundColor: theme.palette.primary.main
	},
	spacer: {
		width: 180
	},
	tabsRoot: {
		'& .MuiTab-root': {
			fontWeight: 600
		}
		// '& .MuiTab-root': {
		// 	color: theme.palette.grey[700]
		// },
		// '& .Mui-selected': {
		// 	color: theme.palette.primary.main
		// }
	}
}));

export default styles;
