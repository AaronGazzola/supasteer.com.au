import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
	container: {
		position: 'relative',
		width: '100%',
		height: '100%'
	},
	tabs: {
		position: 'absolute',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%, -50%)'
	}
}));

export default styles;
