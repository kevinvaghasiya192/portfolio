/** @format */

import React from 'react';
import { Box, Container, Typography, Avatar, Stack, Button } from '@mui/material';

import profile from './assets/kevin.jpeg';
import resume from './assets/KEVIN-VAGHASIYA.pdf';

const Home = () => {
	return (
		<Box
			sx={{
				minHeight: '90vh',
				display: 'flex',
				alignItems: 'center',
			}}
		>
			<Container maxWidth='md'>
				<Stack
					direction={{ xs: 'column', md: 'row' }}
					spacing={5}
					alignItems='center'
					justifyContent='center'
				>
					{/* Profile Image */}
					<Avatar
						alt='Kevin Vaghasiya'
						src={profile}
						sx={{
							width: 180,
							height: 180,
							boxShadow: 3,
						}}
					/>

					{/* Text Section */}
					<Box>
						<Typography
							variant='h4'
							fontWeight='bold'
							gutterBottom
						>
							Hi, I'm Kevin Vaghasiya 👋
						</Typography>

						<Typography
							variant='h6'
							color='text.secondary'
							gutterBottom
						>
							Full Stack Developer
						</Typography>

						<Typography
							variant='body1'
							sx={{ mb: 3 }}
						>
							I build modern web applications using React, Node.js, and MongoDB. Currently working on RoboReward POS module and payment integration system.
						</Typography>

						<Button
							variant='contained'
							size='large'
							href={resume}
							download
						>
							Download Resume
						</Button>
					</Box>
				</Stack>
			</Container>
		</Box>
	);
};

export default Home;
