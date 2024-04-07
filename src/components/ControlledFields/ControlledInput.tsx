import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { Input, FormHelperText } from '@mui/joy';
import ControlLabel from './ControlLabel';

interface ControlledInputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	name: string;
	label: string;
	required?: boolean;
}

const ControlledInput = ({ ...props }: ControlledInputProps) => {
	const {
		control,
		formState: { errors },
	} = useFormContext();
	return (
		<Controller
			name={props.name}
			control={control}
			rules={{ required: props.required && 'This field is required' }}
			render={({ field }) => (
				<ControlLabel label={props.label} required={props.required}>
					<Input {...field} error={!!errors[props.name]} />
					<FormHelperText sx={{ ml: 0 }}>
						{!!errors[props.name] &&
							(errors[props.name]?.message as string)}
					</FormHelperText>
				</ControlLabel>
			)}
		/>
	);
};

export default ControlledInput;
