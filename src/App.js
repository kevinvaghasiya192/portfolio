/** @format */

import React, { useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './theme';

import Navbar from './Nav';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Project';

function App() {
	const [darkMode, setDarkMode] = useState(false);

	return (
		<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
			<CssBaseline />

			<Navbar
				darkMode={darkMode}
				setDarkMode={setDarkMode}
			/>
			<Home />
			<About />
			<Skills />
			<Projects />
		</ThemeProvider>
	);
}

export default App;
