/** @format */

import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const About = () => {
	return (
		<Container sx={{ mt: 10 }}>
			<Typography
				variant='h4'
				fontWeight='bold'
			>
				About Me
			</Typography>

			<Paper sx={{ p: 4, mt: 3 }}>
				<Typography>
					I'm Kevin Vaghasiya, a Full Stack Developer currently working at Suvya Web, where I have gained 12 months of hands-on experience including 6 months of internship and 6 months of professional employment. I specialize in building modern and scalable web applications using .NET, React, and database technologies.
					<br />
					<br />
					Currently, I am working on the Robo Reward project, where I contribute to the POS (Point of Sale) module. My responsibilities include developing and implementing payment integration systems and working with payment terminals to ensure smooth and secure transaction processing.
					<br />
					<br />I enjoy solving real-world problems, improving system performance, and learning new technologies. I'm passionate about building clean, efficient, and user-friendly applications that deliver real business value.
				</Typography>
			</Paper>
		</Container>
	);
};

export default About;
