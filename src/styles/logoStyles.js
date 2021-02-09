import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
	logo: {
		position: 'fixed',
		left: '50%',
		maxWidth: 180,
		top: 0,
		height: 90,
		zIndex: 3,
		'&:hover': {
			cursor: 'pointer'
		},
		overflow: 'visible',
		transform: 'translate(-40%, 0%)',
		animation: '$resize 1s ease 3.3s backwards'
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
		zIndex: 2,
		position: 'fixed',
		opacity: 1,
		left: 0,
		top: 0,
		right: 0,
		bottom: 0,
		backgroundColor: theme.palette.grey[300],
		animation: '$fade-out .7s ease-out 4.3s forwards'
	},
	shape1: {
		animation: '$slide .5s ease-out 1s backwards '
	},
	shape2: {
		animation: '$slide .5s ease-out 1.3s backwards '
	},
	shape3: {
		animation: '$slide .5s ease-out 1.6s backwards '
	},
	title1: {
		animation: '$slide .5s ease-out 2.2s backwards '
	},
	title2: {
		animation: '$slide .5s ease-out 2.5s backwards '
	},
	'@keyframes slide': {
		'0%': {
			transform: 'translateX(-10%)',
			opacity: 0
		},
		'100%': {
			transform: 'translateX(0%)',
			opacity: 1
		}
	},
	'@keyframes fade-out': {
		'0%': {
			left: 0,
			top: 0,
			right: 0,
			bottom: 0,
			opacity: 1
		},
		'99%': {
			opacity: 0,
			left: 0,
			top: 0,
			right: 0,
			bottom: 0
		},
		'100%': {
			opacity: 0,
			left: 0,
			top: 0,
			right: '100%',
			bottom: '100%'
		}
	},
	'@keyframes resize': {
		'0%': {
			position: 'fixed',
			top: '50%',
			left: '50%',
			height: '50%',
			maxWidth: '100%',
			transform: 'translate(-40%, -50%)'
		},
		'100%': {
			position: 'fixed',
			top: 0,
			left: '50%',
			maxWidth: '100%',
			height: 90,
			transform: 'translate(-40%, 0%)'
		}
	}
}));

export default styles;
