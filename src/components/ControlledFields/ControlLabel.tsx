import React from 'react';
import { FormControl, Typography, styled } from '@mui/joy';

interface ControlLabelProps {
	label: string;
	children: React.ReactNode;
	required?: boolean;
}

const ControlLabel = ({ ...props }: ControlLabelProps) => {
	return (
		<FormControl>
			<Typography variant='soft'>{props.label}</Typography>
			{props.children}
		</FormControl>
	);
};

export default ControlLabel;
