import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { getTheme } from 'styles/theme';
import Header from 'components/Header';
import Footer from 'components/Footer';
import styles from 'styles/appStyles';
import HomeScreen from 'screens/HomeScreen';
import PageNotFoundScreen from 'screens/PageNotFoundScreen';
import ProductsScreen from 'screens/ProductsScreen';
import ClassicCarsScreen from 'screens/ClassicCarsScreen';
import ContactUsScreen from 'screens/ContactUsScreen';

const useStyles = styles;

const theme = getTheme();

const App = () => {
	const classes = useStyles();
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Header />
				<main className={classes.main}>
					<Switch>
						<Route path='/' exact component={HomeScreen} />
						<Route path='/products' exact component={ProductsScreen} />
						<Route path='/cars' exact component={ClassicCarsScreen} />
						<Route path='/contact' exact component={ContactUsScreen} />
						<Route path='/' component={PageNotFoundScreen} />
					</Switch>
				</main>
				<Footer />
			</ThemeProvider>
		</Router>
	);
};

export default App;
