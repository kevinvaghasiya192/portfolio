/** @format */

import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';

const skills = ['React', 'Node.js', 'C#', '.NET', 'HTML', 'CSS', 'JavaScript', 'MongoDB', 'MySQL'];

const Skills = () => {
	return (
		<Container sx={{ mt: 10 }}>
			<Typography
				variant='h4'
				fontWeight='bold'
			>
				Skills
			</Typography>

			<Grid
				container
				spacing={3}
				sx={{ mt: 2 }}
			>
				{skills.map((skill) => (
					<Grid
						item
						xs={6}
						md={3}
					>
						<Paper sx={{ p: 3, textAlign: 'center' }}>
							<Typography>{skill}</Typography>
						</Paper>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default Skills;
