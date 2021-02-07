import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
	tabs: {
		position: 'absolute',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%, -50%)'
	},
	spacer: {
		width: 180
	},
	tab: {
		fontWeight: 600,
		[theme.breakpoints.down('md')]: {
			minWidth: 120,
			maxWidth: 120
		}
	}
}));

export default styles;
