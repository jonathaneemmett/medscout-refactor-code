import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery, useMutation } from 'react-query';
import { Input, Button, CircularProgress, FormHelperText } from '@mui/joy';

const RefactorCodeTest = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const { data: userData, isLoading } = useQuery('userData', () =>
		fetchUserData(),
	);
	const updateUserMutation = useMutation((updatedUserData) =>
		updateUser(updatedUserData),
	);

	const onSubmit = async (formData: any) => {
		const someGreatDataToSubmit = {
			...userData,
			...formData,
		};
		await updateUserMutation.mutateAsync(someGreatDataToSubmit);
	};

	return (
		<div>
			<h1>Edit User</h1>
			{isLoading ? (
				<CircularProgress />
			) : (
				<form onSubmit={handleSubmit(onSubmit)}>
					<label>Name:</label>
					<Input
						type='text'
						defaultValue={userData.name}
						variant='soft'
						size='sm'
						color='neutral'
						aria-label='Name'
						{...register('name', {
							required: 'Name is required',
						})}
					/>
					<FormHelperText>
						{errors.name && <span>{errors.name.message}</span>}
					</FormHelperText>

					<label>Email:</label>
					<Input
						type='email'
						defaultValue={userData.email}
						variant='soft'
						size='sm'
						color='neutral'
						aria-label='Email'
						{...register('email', {
							required: 'Valid email is required',
							pattern: {
								value: /^\S+@\S+$/i,
								message: 'Invalid email format',
							},
						})}
					/>
					<FormHelperText>
						{errors.email && <span>{errors.email.message}</span>}
					</FormHelperText>

					<label>Password:</label>
					<Input
						type='password'
						defaultValue={userData.password}
						variant='soft'
						size='sm'
						color='neutral'
						aria-label='Password'
						{...register('password', {
							required: 'Password is required',
							minLength: {
								value: 6,
								message:
									'Password must be at least 6 characters',
							},
						})}
					/>
					<FormHelperText>
						{errors.password && (
							<span>{errors.password.message}</span>
						)}
					</FormHelperText>

					<Button
						type='submit'
						variant='soft'
						color='neutral'
						aria-label='Submit'>
						Save
					</Button>
				</form>
			)}
		</div>
	);
};

const fetchUserData = async () => {
	const response = await fetch('http://localhost:8000/users/1');
	const data = await response.json();
	return data;
};

const updateUser = async (userData: any) => {
	const response = await fetch(
		`http://localhost:8000/users/${userData?.id}`,
		{
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(userData),
		},
	);
	const data = await response.json();
	return data;
};

export default RefactorCodeTest;
