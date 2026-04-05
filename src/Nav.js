/** @format */

import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const Nav = ({ darkMode, setDarkMode }) => {
	return (
		<AppBar position='sticky'>
			<Toolbar>
				<Typography
					variant='h6'
					sx={{ flexGrow: 1 }}
				>
					Kevin Portfolio
				</Typography>

				<Button color='inherit'>Home</Button>
				<Button color='inherit'>About</Button>
				<Button color='inherit'>Skills</Button>
				<Button color='inherit'>Projects</Button>
				<Button color='inherit'>Contact</Button>

				<IconButton
					color='inherit'
					onClick={() => setDarkMode(!darkMode)}
				>
					{darkMode ? <LightModeIcon /> : <DarkModeIcon />}
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};

export default Nav;
