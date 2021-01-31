import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
	logo: {
		position: 'relative',
		height: '100%',
		zIndex: 3,
		'&:hover': {
			cursor: 'pointer'
		},
		animation: '$resize 1s ease 3s backwards'
	},
	title: {
		fontSize: '30px',
		fontFamily: 'Anton, sans-serif'
		// letterSpacing: '0.8px'
	},
	textBox: {
		fill: theme.palette.grey[300]
	},
	backDrop: {
		position: 'fixed',
		// display: 'none',
		zIndex: -10,
		opacity: 0,
		left: 0,
		top: 0,
		right: 0,
		bottom: 0,
		backgroundColor: theme.palette.grey[300],
		animation: '$fade 1s ease-out 3s backwards'
	},
	'@keyframes fade': {
		'0%': {
			opacity: 1,
			zIndex: 2
		},
		'100%': {
			zIndex: 2,
			opacity: 0
		}
	},
	'@keyframes resize': {
		'0%': {
			position: 'fixed',
			top: '50%',
			left: '50%',
			height: '50vh',
			transform: 'translate(-50%, -50%)'
		},
		'100%': {
			position: 'fixed',
			top: 0,
			left: 24,
			height: 90,
			transform: 'translate(0%, 0%)'
		}
	}
}));

export default styles;
