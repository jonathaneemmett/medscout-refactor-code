// jest.config.js
const nextJest = require('next/jest');
const dotenv = require('dotenv');

dotenv.config({ path: './.env.local' });

const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
	dir: './',
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
	// Add more setup options before each test is run
	// setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	// if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
	moduleDirectories: ['node_modules', '<rootDir>/'],
	modulePathIgnorePatterns: ['<rootDir>/tests'], // ignore playwright tests
	testEnvironment: 'jest-environment-jsdom',
	setupFiles: ['jest-launchdarkly-mock'],
	setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
	watchPathIgnorePatterns: ['<rootDir>/.next'],
	collectCoverageFrom: ['src/**/*.{ts,tsx}'],
	coveragePathIgnorePatterns: [
		'<rootDir>/tests',
		'mocks',
		'index.ts',
		'src/pages/_app.tsx',
		'src/pages/_document.tsx',
		'test-',
		'fixture.ts',
	],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
