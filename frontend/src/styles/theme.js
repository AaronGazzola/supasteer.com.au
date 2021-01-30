import { createMuiTheme } from '@material-ui/core/styles';

const supaBlue = '#0397D7';
const supaGreen = '#48AA43';
const supaGray = '#969BA1';

export const getTheme = () =>
	createMuiTheme({
		palette: {
			text: {
				primary: 'rgba(0, 0, 0, 0.75)'
			},
			primary: {
				main: '#025275',
				contrastText: '#fff'
			},
			secondary: {
				main: '#13710E',
				contrastText: '#fff'
			},
			success: {
				main: supaGreen
			},
			error: {
				main: '#8B1F00'
			},
			common: {
				supaBlue,
				supaGreen,
				supaGray,
				blue: '#3CADDE',
				blue1: '#0DA1E0',
				blue2: '#0397D7',
				blue3: '#026A97',
				blue4: '#025275',
				green: '#A2E09F',
				green1: '#72C96D',
				green2: '#48AA43',
				green3: '#2C9026',
				green4: '#13710E',
				purple: '#DD9DC3',
				purple1: '#C56BA0',
				purple2: '#A7427D',
				purple3: '#8D2662',
				purple4: '#6F0E46',
				orange: '#ffd6b5',
				orange1: '#f8b987',
				orange2: '#d28b53',
				orange3: '#b2692f',
				orange4: '#8b4711',
				yellow: '#FFC83C',
				yellow1: '#FFB804',
				yellow2: '#FFB700',
				yellow3: '#EFAB00',
				yellow4: '#B98500',
				red: '#FF623C',
				red1: '#FF3404',
				red2: '#FF3100',
				red3: '#EF2E00',
				red4: '#B92300'
			},
			contrastThreshold: 3,
			tonalOffset: 0.2
		},
		typography: {
			fontFamily: "'Noto Sans', sans-serif",
			h1: {
				fontFamily: "'Roboto', sans-serif",
				fontWeight: 300,
				fontSize: '4rem'
			},
			h2: {
				fontFamily: "'Roboto', sans-serif",
				fontWeight: 300,
				fontSize: '4rem'
			},
			h3: {
				fontFamily: "'Roboto', sans-serif",
				fontWeight: 300,
				fontSize: '3rem'
			},
			h4: {
				fontFamily: "'Roboto', sans-serif",
				fontWeight: 300,
				fontSize: '2.5rem'
			}
		}
	});
