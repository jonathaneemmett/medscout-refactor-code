import { render, screen } from '@testing-library/react';

const mockData = {
	id: 1,
	name: 'John Doe',
	email: 'john@test.com',
};

import RefactorCodeTest from './RefactorCodeTest';

jest.mock('react-query', () => ({
	useQuery: () => ({
		data: mockData,
	}),
	useMutation: () => [jest.fn(), { data: {} }],
}));

test('renders RefactorCodeTest with all inputs', () => {
	render(<RefactorCodeTest />);

	// make sure all the inputs are rendered
	const nameInput = screen.getByLabelText('Name');
	const emailInput = screen.getByLabelText('Email');
	const submitButton = screen.getByLabelText('Submit');

	expect(nameInput).toBeInTheDocument();
	expect(emailInput).toBeInTheDocument();
	expect(submitButton).toBeInTheDocument();
});

test('renders RefactorCodeTest with user data', () => {
	render(<RefactorCodeTest />);

	// make sure user data is rendered
	const nameInput = screen.getByLabelText('Name') as HTMLInputElement;
	const emailInput = screen.getByLabelText('Email') as HTMLInputElement;

	expect(nameInput.value).toBe('John Doe');
	expect(emailInput.value).toBe('john@test.com');
});
