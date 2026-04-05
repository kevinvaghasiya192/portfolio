/** @format */

import React from 'react';
import { Container, Card, CardContent, Typography, Box, Chip, Stack } from '@mui/material';

const Projects = () => {
	const projects = [
		{
			title: 'RoboReward',
			description: 'Back office admin panel where clients can rent the system to manage their business operations. I worked on POS module and payment integration.',
			tech: ['C#', '.NET', 'JS', 'Sql'],
			work: 'Worked on POS Module including membership, bundle and booking payments. Also worked on terminal integration and improved transaction flow.',
		},
		{
			title: 'SmogSurat',
			description: 'Rider booking platform where users can book rides easily.',
			tech: ['C#', '.NET', 'JS', 'Sql'],
			work: 'Developed rider booking functionality and handled booking logic with API integration.',
		},
		{
			title: 'Company Management',
			description: 'Company management system for HR, employees and interns.',
			tech: ['C#', '.NET', 'JS', 'Sql'],
			work: 'Developed HR, employee and intern modules with check-in/check-out system and calendar functionality.',
		},
		{
			title: 'Forever Web',
			description: 'Full stack e-commerce platform for clothing products.',
			tech: ['React.js', 'Node.js', 'MongoDB'],
			work: 'Developed frontend, backend APIs and admin panel with product management.',
		},
	];

	return (
		<Box sx={{ py: 8 }}>
			<Container maxWidth='md'>
				<Typography
					variant='h4'
					align='center'
					fontWeight='bold'
					gutterBottom
				>
					My Projects
				</Typography>

				<Stack
					spacing={4}
					mt={4}
				>
					{projects.map((project, index) => (
						<Card
							key={index}
							sx={{
								borderRadius: 3,
								transition: '0.3s',
								'&:hover': {
									transform: 'translateY(-5px)',
									boxShadow: 6,
								},
							}}
						>
							<CardContent>
								<Typography
									variant='h5'
									fontWeight='bold'
									gutterBottom
								>
									{project.title}
								</Typography>

								<Typography
									variant='body1'
									color='text.secondary'
									mb={2}
								>
									{project.description}
								</Typography>

								<Typography
									variant='body2'
									mb={2}
								>
									{project.work}
								</Typography>

								<Stack
									direction='row'
									spacing={1}
									flexWrap='wrap'
								>
									{project.tech.map((tech, i) => (
										<Chip
											key={i}
											label={tech}
										/>
									))}
								</Stack>
							</CardContent>
						</Card>
					))}
				</Stack>
			</Container>
		</Box>
	);
};

export default Projects;
