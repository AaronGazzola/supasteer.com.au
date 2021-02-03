import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
	logo: {
		position: 'relative',
		height: '100%',
		zIndex: 3,
		'&:hover': {
			cursor: 'pointer'
		},
		overflow: 'visible',
		animation: '$resize 1s ease 4s backwards'
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
		animation: '$fade-out 1s ease-out 5s backwards'
	},
	shape1: {
		animation: '$slide .5s ease-out .5s backwards '
	},
	shape2: {
		animation: '$slide .5s ease-out .9s backwards '
	},
	shape3: {
		animation: '$slide .5s ease-out 1.3s backwards '
	},
	title1: {
		animation: '$slide .5s ease-out 2s backwards '
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
			maxWidth: '100vw',
			transform: 'translate(-40%, -50%)'
		},
		'100%': {
			maxWidth: '100vw',
			position: 'fixed',
			top: 0,
			left: 24,
			height: 90,
			transform: 'translate(0%, 0%)'
		}
	}
}));

export default styles;
